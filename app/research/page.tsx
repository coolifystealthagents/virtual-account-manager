import Image from 'next/image';
import Link from 'next/link';
import {site} from '@/lib/site';
import {octoberResearch as october12Research,octoberDate as october12Date} from '@/lib/october12-research';
import {october13Research,october13Date} from '@/lib/october13-research';

export const metadata={title:'Original workflow research',description:'Transparent workflow research from '+site.brand+'.'};
const articles=[...october13Research.map(x=>({...x,published:october13Date,label:'October 13, 2026'})),...october12Research.map(x=>({...x,published:october12Date,label:'October 12, 2026'}))];
export default function Page(){return <section className="section"><div className="wrap"><p className="eyebrow">Research library</p><h1>Observable workflow evidence, mapped clearly.</h1><p className="lede">Deeper sourced studies sit apart from practical Blog guidance and state their methods and limits.</p><div className="grid">{articles.map(x=><Link className="card" href={'/research/'+x.slug} key={x.slug}><Image src={x.thumbnail} alt={x.title} width={1200} height={630}/><span className="eyebrow">{x.cluster}</span><h2>{x.title}</h2><p><time dateTime={x.published}>{x.label}</time></p><p>{x.excerpt}</p></Link>)}{site.research.map((x:any)=><Link className="card" href={'/research/'+x.slug} key={x.slug}><span className="eyebrow">{x.cluster}</span><h2>{x.title}</h2><p>{x.excerpt}</p></Link>)}</div></div></section>}
