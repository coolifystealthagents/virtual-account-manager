import Image from 'next/image';
import Link from 'next/link';
import {site} from '@/lib/site';
import {octoberBlog as october12Blog,octoberDate as october12Date} from '@/lib/october12-blog';
import {october13Blog,october13Date} from '@/lib/october13-blog';
import {october15Blog,october15Date} from '@/lib/october15-blog';

export const metadata={title:'Practical insights',description:'Practical articles for '+site.audience+'.'};
const articles=[...october15Blog.map(x=>({...x,published:october15Date,label:'October 15, 2026'})),...october13Blog.map(x=>({...x,published:october13Date,label:'October 13, 2026'})),...october12Blog.map(x=>({...x,published:october12Date,label:'October 12, 2026'}))];
export default function Page(){return <section className="section"><div className="wrap"><p className="eyebrow">Insights</p><h1>Practical guidance for the work behind the work.</h1><p className="lede">Original field guides for accountable customer coordination and account operations.</p><div className="grid">{articles.map(x=><Link className="card" href={'/blog/'+x.slug} key={x.slug}><Image src={x.thumbnail} alt={x.title} width={1200} height={630}/><span className="eyebrow">{x.category}</span><h2>{x.title}</h2><p><time dateTime={x.published}>{x.label}</time></p><p>{x.excerpt}</p></Link>)}{site.blog.map((x:any)=><Link className="card" href={'/blog/'+x[0]} key={x[0]}><span className="eyebrow">{x[2]}</span><h2>{x[1]}</h2><p>{x[3]}</p></Link>)}</div></div></section>}
