import {site} from '@/lib/site';
import {octoberBlog as october12Blog} from '@/lib/october12-blog';
import {octoberResearch as october12Research} from '@/lib/october12-research';
import {october13Blog} from '@/lib/october13-blog';
import {october13Research} from '@/lib/october13-research';
import {october15Blog} from '@/lib/october15-blog';
import {october15Research} from '@/lib/october15-research';

export async function GET(){const base='https://'+site.domain;const paths=['/','/about','/services','/contact-us','/blog','/research','/privacy-policy','/terms','/accessibility',...site.services.map(x=>'/services/'+slug(x[0])),...site.blog.map(x=>'/blog/'+x[0]),...site.research.map(x=>'/research/'+x.slug),...october12Blog.map(x=>'/blog/'+x.slug),...october12Research.map(x=>'/research/'+x.slug),...october13Blog.map(x=>'/blog/'+x.slug),...october13Research.map(x=>'/research/'+x.slug),...october15Blog.map(x=>'/blog/'+x.slug),...october15Research.map(x=>'/research/'+x.slug)];const xml='<?xml version="1.0" encoding="UTF-8"?>'+'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+paths.map(p=>'<url><loc>'+base+p+'</loc></url>').join('')+'</urlset>';return new Response(xml,{headers:{'Content-Type':'application/xml','Cache-Control':'public, max-age=3600'}})}
function slug(s:string){return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
