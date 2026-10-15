import {notFound} from 'next/navigation';
import Link from 'next/link';
import {site} from '@/lib/site';
import {serviceDetails} from '@/lib/service-details';

export function generateStaticParams(){return Object.keys(serviceDetails).map(slug=>({slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const service=serviceDetails[slug];
  return service?{title:service.name,description:service.description,alternates:{canonical:'/services/'+slug}}:{};
}

export default async function Service({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const service=serviceDetails[slug];
  if(!service)notFound();
  const schema={'@context':'https://schema.org','@type':'Service',name:service.name,provider:{'@type':'Organization',name:site.brand},areaServed:'United States',description:service.description};
  const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:service.faqs.map(faq=>({'@type':'Question',name:faq.question,acceptedAnswer:{'@type':'Answer',text:faq.answer}}))};
  return <>
    <section className="section"><div className="wrap">
      <p className="eyebrow">{service.eyebrow}</p><h1>{service.title}</h1><p className="lede">{service.intro}</p>
      <div className="workflow">{service.steps.map((step,index)=><div className="step" key={step.title}><b>{String(index+1).padStart(2,'0')}</b><h3>{step.title}</h3><p>{step.body}</p></div>)}</div>
    </div></section>
    <section className="section"><div className="wrap prose">
      <h2>When this service helps</h2><p>{service.need}</p>
      <h2>What your team receives</h2><ul>{service.deliverables.map(item=><li key={item}>{item}</li>)}</ul>
      <h2>Clear professional boundaries</h2><p>{service.boundary}</p>
      <h2>Common questions</h2>{service.faqs.map(faq=><div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}
      <Link id="cta-services-detail-consultation" className="cta" href="/contact-us">{service.cta}</Link>
    </div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </>;
}
