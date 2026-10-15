import Link from 'next/link';
import {site} from '@/lib/site';
import {octoberResearch as october12Research,octoberDate as october12Date} from '@/lib/october12-research';
import {october13Research,october13Date} from '@/lib/october13-research';
import {october15Research,october15ResearchDate} from '@/lib/october15-research';

export const metadata={title:'Original workflow research',description:'Transparent workflow research from '+site.brand+'.'};
const articles=[...october15Research.map(x=>({...x,published:october15ResearchDate,label:'October 15, 2026'})),...october13Research.map(x=>({...x,published:october13Date,label:'October 13, 2026'})),...october12Research.map(x=>({...x,published:october12Date,label:'October 12, 2026'}))];
export default function Page(){return <section className="section library-page"><div className="wrap"><p className="eyebrow">Research library</p><h1>Observable workflow evidence, mapped clearly.</h1><p className="lede">Sourced studies with explicit methods and limits.</p><div className="article-grid">{articles.map(x=><Link className="article-card research-card" href={'/research/'+x.slug} key={x.slug}><span>{x.cluster}</span><h2>{x.title}</h2><time dateTime={x.published}>{x.label}</time></Link>)}{site.research.map((x:any)=><Link className="article-card research-card" href={'/research/'+x.slug} key={x.slug}><span>{x.cluster}</span><h2>{x.title}</h2></Link>)}</div></div></section>}
