import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';

const root=path.resolve(import.meta.dirname,'../..');
const baseSha='9e6ff817068ecfc9e19247f90f99e84dfe127472';
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const manifest=JSON.parse(read('publishing/2026-10-13/manifest.json'));
const source=read('lib/october13.ts');
const errors=[]; const check=(condition,message)=>{if(!condition)errors.push(message)};
const blogMatch=source.match(/export const october13Blog:[^=]+= ([\s\S]*?);\n\nexport const october13Research/);
const researchMatch=source.match(/export const october13Research:[^=]+= ([\s\S]*?);\n?$/);
check(Boolean(blogMatch),'Blog registry cannot be parsed'); check(Boolean(researchMatch),'Research registry cannot be parsed');
const blogs=blogMatch?JSON.parse(blogMatch[1]):[]; const research=researchMatch?JSON.parse(researchMatch[1]):[];

check(manifest.site==='VirtualAccountManager.com','site mismatch');
check(manifest.canonicalDomain==='https://virtualaccountmanager.com','canonical domain mismatch');
check(manifest.repository==='coolifystealthagents/virtual-account-manager'&&manifest.branch==='main','repository/branch mismatch');
check(manifest.baseSha===baseSha,'immutable base mismatch');
check(manifest.publicationDate==='2026-10-13','publication date mismatch');
check(blogs.length===12&&research.length===5&&manifest.items.length===17,'requires exactly 12 Blog + 5 Research');
check(new Set(manifest.items.map(x=>x.slug)).size===17,'slugs must be unique');
check(new Set(manifest.items.map(x=>x.title)).size===17,'titles must be unique');

const tree=execFileSync('git',['ls-tree','-r','--name-only',baseSha],{cwd:root,encoding:'utf8'}).split(/\r?\n/);
for(const file of ['lib/october13.ts','lib/october13-blog.ts','lib/october13-research.ts'])check(!tree.includes(file),`${file} existed at immutable base`);
const oldSource=execFileSync('git',['show',`${baseSha}:lib/october12.ts`],{cwd:root,encoding:'utf8'});
const oldSlugs=new Set([...oldSource.matchAll(/slug: '([^']+)'/g)].map(x=>x[1]));
const oldTitles=new Set([...oldSource.matchAll(/title: '([^']+)'/g)].map(x=>x[1].toLowerCase()));

const items=[...blogs.map(x=>({section:'Blog',...x})),...research.map(x=>({section:'Research',...x}))];
const paragraphs=new Map(), hashes=new Set();
const allowed=['nist.gov','cisa.gov','ftc.gov','sba.gov','bls.gov','census.gov','sec.gov','gao.gov'];
for(const item of items){
 const entry=manifest.items.find(x=>x.slug===item.slug); check(Boolean(entry),`${item.slug}: absent from manifest`); if(!entry)continue;
 check(entry.section===item.section,`${item.slug}: section mismatch`);
 check(entry.title===item.title,`${item.slug}: title mismatch`);
 check(entry.publicationDate==='2026-10-13',`${item.slug}: wrong item date`);
 check(entry.route===`/${item.section.toLowerCase()}/${item.slug}`,`${item.slug}: route mismatch`);
 check(entry.sourcePath==='lib/october13.ts',`${item.slug}: wrong registry path`);
 check(!oldSlugs.has(item.slug),`${item.slug}: duplicates immutable base slug`);
 check(!oldTitles.has(item.title.toLowerCase()),`${item.slug}: duplicates immutable base title`);
 check(!/(?:2026|oct(?:ober)?\s+13|13\s+oct(?:ober)?)/i.test(item.title),`${item.slug}: title contains publication date`);
 const prose=[item.excerpt,...item.sections.flatMap(x=>[x.heading,x.body]),...(item.findings||[]),item.question||'',item.method||''].join(' ');
 const words=(prose.match(/\b[\w’'-]+\b/g)||[]).length;
 check(words>=(item.section==='Blog'?950:1150),`${item.slug}: insufficient ${item.section} depth (${words})`);
 check(item.sections.length>=(item.section==='Blog'?9:10),`${item.slug}: insufficient substantive sections`);
 if(item.section==='Research'){
   check(item.sources.length===10&&new Set(item.sources.map(x=>x.url)).size===10,`${item.slug}: requires exactly 10 unique sources`);
   for(const s of item.sources){try{const u=new URL(s.url);check(u.protocol==='https:'&&allowed.some(h=>u.hostname===h||u.hostname.endsWith('.'+h)),`${item.slug}: non-authoritative source ${s.url}`)}catch{errors.push(`${item.slug}: invalid source ${s.url}`)}}
 }
 for(const section of item.sections)for(const p of section.body.split(/\n\s*\n/)){
   const n=p.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(); if(n.length<180)continue; const owners=paragraphs.get(n)||[]; owners.push(item.slug); paragraphs.set(n,owners);
 }
 const thumb=entry.thumbnailPath; check(!tree.includes(thumb),`${item.slug}: thumbnail path existed at immutable base`); check(fs.existsSync(path.join(root,thumb)),`${item.slug}: thumbnail missing`); if(!fs.existsSync(path.join(root,thumb)))continue;
 const svg=read(thumb), encoded=item.title.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
 check(svg.includes('width="1200" height="630" viewBox="0 0 1200 630"'),`${item.slug}: thumbnail dimensions mismatch`);
 check(svg.includes(`<title id="title">${encoded}</title>`),`${item.slug}: semantic thumbnail title mismatch`);
 const visible=[...svg.matchAll(/<text data-title-line="\d+"[^>]*>([^<]+)<\/text>/g)].map(x=>x[1]).join(' ').replaceAll('&amp;','&').replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&quot;','"');
 check(visible===item.title,`${item.slug}: visible thumbnail title is not exact`);
 hashes.add(crypto.createHash('sha256').update(svg).digest('hex'));
}
check(hashes.size===17,'thumbnails must be 17 byte-unique files');
for(const [text,owners] of paragraphs)if(owners.length>1)errors.push(`duplicate substantive paragraph: ${owners.join(', ')} (${text.slice(0,80)})`);
for(const match of oldSource.matchAll(/body: '([^']{180,})'/g)){const n=match[1].toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();if(paragraphs.has(n))errors.push(`immutable-base prose collision: ${paragraphs.get(n).join(', ')}`)}

const blogWrapper=read('lib/october13-blog.ts'),researchWrapper=read('lib/october13-research.ts');
const blogIndex=read('app/blog/page.tsx'),researchIndex=read('app/research/page.tsx'),blogRoute=read('app/blog/[slug]/page.tsx'),researchRoute=read('app/research/[slug]/page.tsx'),sitemap=read('app/sitemap.xml/route.ts');
check(blogWrapper.includes('october13Blog')&&!blogWrapper.includes('october13Research'),'Blog wrapper is not distinct');
check(researchWrapper.includes('october13Research')&&!researchWrapper.includes('october13Blog'),'Research wrapper is not distinct');
check(blogIndex.includes('october13Blog')&&blogIndex.includes('October 13, 2026')&&!blogIndex.includes('october13Research'),'Blog index/date integration missing');
check(researchIndex.includes('october13Research')&&researchIndex.includes('October 13, 2026')&&!researchIndex.includes('october13Blog'),'Research index/date integration missing');
check(blogRoute.includes('october13Blog')&&blogRoute.includes('Published {label}')&&blogRoute.includes('Continue the Blog series')&&blogRoute.includes('sidebar'),'Blog route/date/related/sidebar integration missing');
check(researchRoute.includes('october13Research')&&researchRoute.includes('Published {label}')&&researchRoute.includes('Related Research')&&researchRoute.includes('sidebar'),'Research route/date/related/sidebar integration missing');
check(sitemap.includes('october13Blog')&&sitemap.includes('october13Research'),'sitemap integration missing');
check(manifest.systems.blog.registry!==manifest.systems.research.registry,'Blog and Research registries must be separate');

const workspace=path.resolve(root,'../../..'),recordsRoot=path.join(workspace,'work','records-2026-10-13');
if(fs.existsSync(recordsRoot))for(const name of fs.readdirSync(recordsRoot).filter(x=>x.endsWith('.json')&&x!=='virtualaccountmanager-manifest.json')){const raw=fs.readFileSync(path.join(recordsRoot,name),'utf8');for(const item of items){check(!raw.includes(`"slug": "${item.slug}"`),`${item.slug}: duplicate in ${name}`);check(!raw.includes(`"title": ${JSON.stringify(item.title)}`),`${item.title}: duplicate in ${name}`)}}

if(errors.length){console.error(`FAIL (${errors.length})`);for(const e of errors)console.error('- '+e);process.exit(1)}
console.log('PASS: 12 Blog + 5 Research, Oct13 visible dates, 17 unique exact-title SVGs, 10 authoritative sources per Research, separate systems, immutable-base and duplicate audits.');
