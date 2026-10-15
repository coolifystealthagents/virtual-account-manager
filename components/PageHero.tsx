import Link from 'next/link';
import Image from 'next/image';

const editorial:Record<string,{src:string,alt:string}>={
  'Virtual account management services':{src:'/editorial-services-specialist.webp',alt:'Customer operations specialist reviewing an account plan'},
  'How we work':{src:'/editorial-about-strategist.webp',alt:'Experienced account strategist at a collaborative worktable'},
  'Workflow research library':{src:'/editorial-research-analyst.webp',alt:'Research analyst mapping findings from account workflow data'},
};

export default function PageHero({eyebrow,title,copy,action,actionHref='/contact-us'}:{eyebrow:string,title:string,copy:string,action?:string,actionHref?:string}){
  const image=editorial[eyebrow];
  return <section className={'page-hero'+(image?' has-media':'')}><div className="page-hero-orb" aria-hidden="true"/><div className="wrap page-hero-inner"><div className="page-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{copy}</p>{action&&<Link className="cta" href={actionHref}>{action} <span aria-hidden="true">→</span></Link>}</div>{image&&<div className="page-hero-media"><Image src={image.src} alt={image.alt} width={1440} height={1080} priority sizes="(max-width: 900px) 100vw, 43vw"/></div>}</div></section>;
}
