import Link from 'next/link';
import {site} from '@/lib/site';
import PageHero from '@/components/PageHero';
import {octoberResearch as october12Research,octoberDate as october12Date} from '@/lib/october12-research';
import {october26Research,october26ResearchDate} from '@/lib/october26-research';
import {october27Research,october27ResearchDate} from '@/lib/october27-research';
import {october25Research,october25ResearchDate} from '@/lib/october25-research';
import {october22Research,october22ResearchDate} from '@/lib/october22-research';
import {october13Research,october13Date} from '@/lib/october13-research';
import {october15Research,october15ResearchDate} from '@/lib/october15-research';
export const metadata={title:'Original workflow research',description:'Transparent workflow research from '+site.brand+'.',alternates:{canonical:'/research'}};
const articles=[...october27Research.map(x=>({...x,published:october27ResearchDate,label:'October 27, 2026'})),...october26Research.map(x=>({...x,published:october26ResearchDate,label:'October 26, 2026'})),...october25Research.map(x=>({...x,published:october25ResearchDate,label:'October 25, 2026'})),...october22Research.map(x=>({...x,published:october22ResearchDate,label:'October 22, 2026'})),...october15Research.map(x=>({...x,published:october15ResearchDate,label:'October 15, 2026'})),...october13Research.map(x=>({...x,published:october13Date,label:'October 13, 2026'})),...october12Research.map(x=>({...x,published:october12Date,label:'October 12, 2026'}))];
export default function Page(){return <><PageHero eyebrow="Workflow research library" title="Observable evidence, mapped clearly." copy="Sourced studies with explicit methods, practical takeaways, and clearly stated limits."/><section className="section library-page research-library"><div className="wrap"><div className="library-heading"><div><p className="eyebrow">Research briefs</p><h2>Evidence for better account operations.</h2></div><p>Use these focused briefs to inspect the control points behind customer continuity, team capacity, and reliable follow-through.</p></div><div className="article-grid">{articles.map(x=><Link className="article-card research-card" href={'/research/'+x.slug} key={x.slug}><span>{x.cluster}</span><h2>{x.title}</h2><time dateTime={x.published}>{x.label}</time><b>View research →</b></Link>)}{site.research.map((x:any)=><Link className="article-card research-card" href={'/research/'+x.slug} key={x.slug}><span>{x.cluster}</span><h2>{x.title}</h2><b>View research →</b></Link>)}</div></div></section></>}
