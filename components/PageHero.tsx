import Link from 'next/link';

export default function PageHero({eyebrow,title,copy,action,actionHref='/contact-us'}:{eyebrow:string,title:string,copy:string,action?:string,actionHref?:string}){
  return <section className="page-hero"><div className="page-hero-orb" aria-hidden="true"/><div className="wrap page-hero-inner"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{copy}</p>{action&&<Link className="cta" href={actionHref}>{action} <span aria-hidden="true">→</span></Link>}</div></section>;
}
