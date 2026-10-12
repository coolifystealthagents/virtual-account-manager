import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const manifest=JSON.parse(read('publishing/2026-10-12/manifest.json'));
const source=read('lib/october12.ts');
const blogPage=read('app/blog/[slug]/page.tsx');
const researchPage=read('app/research/[slug]/page.tsx');
const blogIndex=read('app/blog/page.tsx');
const researchIndex=read('app/research/page.tsx');
const errors=[];
const check=(ok,msg)=>{if(!ok)errors.push(msg)};
const blogs=manifest.articles.filter(x=>x.section==='Blog');
const research=manifest.articles.filter(x=>x.section==='Research');
check(blogs.length===12,'Expected exactly 12 Blog articles');
check(research.length===5,'Expected exactly 5 Research articles');
check(manifest.articles.length===17,'Expected exactly 17 articles');
check(new Set(manifest.articles.map(x=>x.slug)).size===17,'Slugs must be unique');
check(new Set(manifest.articles.map(x=>x.title)).size===17,'Titles must be unique');
check(manifest.articles.every(x=>x.publicationDate==='2026-10-12'),'Publication dates must be 2026-10-12');
check(manifest.articles.every(x=>!/2026|october\s+12/i.test(x.title)),'Titles must be date-free');
check(blogPage.includes('Published October 12, 2026')&&researchPage.includes('Published October 12, 2026'),'Visible publication date missing');
check(blogPage.includes('octoberBlog')&&blogPage.includes('Continue the Blog series')&&blogPage.includes('sidebar'),'Blog registry, related content, or sidebar missing');
check(researchPage.includes('octoberResearch')&&researchPage.includes('Related Research')&&researchPage.includes('sidebar'),'Research registry, related content, or sidebar missing');
check(blogIndex.includes('octoberBlog')&&!blogIndex.includes('octoberResearch'),'Blog index must use only Blog registry');
check(researchIndex.includes('octoberResearch')&&!researchIndex.includes('octoberBlog'),'Research index must use only Research registry');
const sourceUrls=[...source.matchAll(/url: '(https:\/\/[^']+)'/g)].map(m=>m[1]);
const authoritative=['nist.gov','cisa.gov','ftc.gov','sba.gov','bls.gov','census.gov','sec.gov','plainlanguage.gov'];
check(new Set(sourceUrls).size>=10,'Research requires at least 10 unique HTTPS sources');
check(sourceUrls.every(url=>authoritative.some(host=>new URL(url).hostname===host||new URL(url).hostname.endsWith('.'+host))),'Research includes a source outside the authoritative allowlist');
for(const item of research){const start=source.indexOf(`slug: '${item.slug}'`);const next=source.indexOf("\n  {",start);const block=source.slice(start,next===-1?source.length:next);const refCount=block.includes('sources: commonSources')?10:new Set([...block.matchAll(/commonSources\[(\d+)\]/g)].map(m=>m[1])).size;check(refCount===10,`${item.slug} must cite 10 authoritative sources`)}
const hashes=[];for(const item of manifest.articles){const rel=item.thumbnailPath;check(fs.existsSync(path.join(root,rel)),`Missing thumbnail ${rel}`);if(fs.existsSync(path.join(root,rel))){const svg=read(rel);check(svg.includes(item.title),`Thumbnail does not contain exact title: ${item.slug}`);check(svg.includes('width="1200" height="630"'),`Thumbnail dimensions incorrect: ${item.slug}`);hashes.push(crypto.createHash('sha256').update(svg).digest('hex'))}}
check(new Set(hashes).size===17,'Thumbnails must be visually unique files');
const paragraphs=[...source.matchAll(/body: '([^']{120,})'/g)].map(m=>m[1].replace(/\s+/g,' ').trim());
const duplicates=[...new Set(paragraphs.filter((p,i)=>paragraphs.indexOf(p)!==i))];
check(duplicates.length===0,'Duplicate substantive prose found');
check(manifest.systems.blog.registry!==manifest.systems.research.registry,'Blog and Research registries must be separate');
if(errors.length){console.error(errors.map(x=>'FAIL: '+x).join('\n'));process.exit(1)}
console.log(`PASS: ${blogs.length} Blog + ${research.length} Research; 17 unique exact-title thumbnails; 10-source research depth; separate routes, indexes, sidebars, and registries; no duplicate substantive prose.`);
