import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const source=fs.readFileSync(path.join(root,'lib/october12.ts'),'utf8');
const split=source.indexOf('export const octoberResearch');
const sets=[['Blog',source.slice(0,split)],['Research',source.slice(split)]];
const entries=sets.flatMap(([section,text])=>[...text.matchAll(/slug: '([^']+)',\n\s+title: '([^']+)',[\s\S]*?thumbnail: '([^']+)'/g)].map(m=>({section,slug:m[1],title:m[2],thumbnail:m[3]})));
if(entries.filter(x=>x.section==='Blog').length!==12||entries.filter(x=>x.section==='Research').length!==5)throw new Error('Expected 12 Blog and 5 Research entries');

const outDir=path.join(root,'public/thumbnails/october-12');
fs.mkdirSync(outDir,{recursive:true});
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const wrap=title=>{const words=title.split(' '),lines=[];let line='';for(const word of words){if((line+' '+word).trim().length>22){lines.push(line);line=word}else line=(line+' '+word).trim()}lines.push(line);return lines};
entries.forEach((item,index)=>{const lines=wrap(item.title);const y=245-(lines.length-1)*32;const title=lines.map((line,i)=>`<tspan x="84" y="${y+i*64}">${escape(line)}</tspan>`).join('');const accent=item.section==='Blog'?'#ef6a62':'#b8a0df';const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc" data-title="${escape(item.title)}"><title id="title">${escape(item.title)}</title><desc id="desc">${item.section} article thumbnail for Virtual Account Manager</desc><rect width="1200" height="630" fill="#54244f"/><circle cx="1040" cy="96" r="210" fill="${accent}" opacity=".22"/><circle cx="1110" cy="550" r="290" fill="#fff6e8" opacity=".08"/><path d="M84 110h210" stroke="${accent}" stroke-width="10"/><text x="84" y="82" fill="${accent}" font-family="Arial,sans-serif" font-size="28" font-weight="700" letter-spacing="5">${item.section.toUpperCase()} · ${String(index+1).padStart(2,'0')}</text><text fill="#fff6e8" font-family="Georgia,serif" font-size="44" font-weight="700">${title}</text><text x="84" y="555" fill="#fff6e8" font-family="Arial,sans-serif" font-size="28">Virtual Account Manager</text><rect x="84" y="580" width="1032" height="2" fill="${accent}" opacity=".8"/></svg>`;fs.writeFileSync(path.join(root,'public',item.thumbnail),svg)});

const manifest={site:'VirtualAccountManager.com',canonicalDomain:'https://virtualaccountmanager.com',repository:'coolifystealthagents/virtual-account-manager',branch:'main',date:'2026-10-12',counts:{blog:12,research:5,total:17},articles:entries.map(x=>({site:'VirtualAccountManager.com',section:x.section,title:x.title,slug:x.slug,sourcePath:'lib/october12.ts',thumbnailPath:'public'+x.thumbnail,publicationDate:'2026-10-12'})),systems:{blog:{registry:'lib/october12-blog.ts',index:'app/blog/page.tsx',route:'app/blog/[slug]/page.tsx'},research:{registry:'lib/october12-research.ts',index:'app/research/page.tsx',route:'app/research/[slug]/page.tsx'}}};
fs.writeFileSync(path.join(root,'publishing/2026-10-12/manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(`Generated ${entries.length} exact-title thumbnails and manifest`);
