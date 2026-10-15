import type {Metadata} from 'next';
import Link from 'next/link';
import {site} from '@/lib/site';

export const metadata: Metadata = {
  title: 'Virtual Account Management Support',
  description: 'Keep account plans, renewals, customer meetings, requests, and follow-through organized with dedicated virtual account management support.',
};

const serviceIcons = ['map', 'calendar', 'chat', 'users', 'inbox', 'chart'];

const outcomes = [
  ['A clearer customer picture', 'Keep stakeholders, priorities, open requests, and recent decisions together in one working view.', 'users'],
  ['Fewer dropped follow-ups', 'Turn approved meeting outcomes into assigned actions with visible owners and due dates.', 'check'],
  ['Renewals that start earlier', 'Maintain milestone calendars and surface missing inputs before they become last-minute work.', 'calendar'],
];

const steps = [
  ['Share your workflow', 'Show us how your team handles accounts today, including tools, handoffs, and approval points.'],
  ['Build the playbook', 'We document the recurring work, communication rules, owners, and escalation paths.'],
  ['Meet your support specialist', 'Your specialist learns the approved process and starts with a focused set of tasks.'],
  ['Improve the rhythm', 'Regular check-ins help you refine the workflow as your portfolio and priorities change.'],
];

const faqs = [
  ['What does a virtual account manager do?', 'A virtual account manager supports the recurring coordination around customer accounts. That can include preparing account plans, organizing meetings, tracking renewal milestones, updating relationship records, routing requests, and keeping approved follow-ups visible.'],
  ['Will they make commercial decisions for us?', 'No. Your team keeps control of pricing, commitments, sensitive negotiations, and final decisions. Support follows your approved playbooks and escalation rules.'],
  ['Can they work in our existing tools?', 'Yes. The workflow can be organized around the tools your team already uses, such as your CRM, shared documents, project boards, email, and meeting platforms.'],
  ['Which teams are a good fit?', 'This support is designed for B2B customer teams, agencies, professional service firms, and growing businesses with a portfolio of ongoing client relationships.'],
];

export default function Home() {
  const faqSchema = {'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))};
  return <>
    <section className="home-hero">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Dedicated account support, without another full-time hire</p>
          <h1>Give every customer a clear next step.</h1>
          <p className="lede">A dedicated virtual account manager keeps plans, meetings, renewals, requests, and follow-through organized, so your team can focus on the conversations and decisions that grow relationships.</p>
          <div className="hero-actions">
            <Link id="cta-home-hero-consultation" className="cta" href="/contact-us">Book a free consultation <span aria-hidden="true">→</span></Link>
            <Link className="secondary-link" href="#how-it-works">See how it works</Link>
          </div>
          <ul className="hero-checks" aria-label="Service highlights">
            <li><Icon name="check" />Built around your playbook</li>
            <li><Icon name="clock" />Works with your team and tools</li>
            <li><Icon name="shield" />You keep every key decision</li>
          </ul>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src="/hero-editorial-account-leader.webp" width="1672" height="941" alt="Confident account leader in a cobalt and coral editorial portrait" fetchPriority="high" /></div>
          <div className="floating-card floating-card-top"><span className="icon-chip"><Icon name="check" /></span><span><b>Follow-up ready</b><small>Owners and next steps aligned</small></span></div>
          <div className="floating-card floating-card-bottom"><span className="status-dots" aria-hidden="true"><i/><i/><i/></span><span><b>Portfolio organized</b><small>Priorities visible at a glance</small></span></div>
        </div>
      </div>
    </section>

    <section className="value-strip" aria-label="Who we support">
      <div className="wrap value-strip-inner"><b>Built for growing customer teams</b><span>B2B services</span><span>Agencies</span><span>Customer success</span><span>Account teams</span></div>
    </section>

    <section className="section home-services" id="services">
      <div className="wrap">
        <div className="section-heading"><div><p className="eyebrow">What you can delegate</p><h2>More consistency across every account.</h2></div><p>Get dependable support for the recurring work that keeps customer relationships informed, responsive, and ready for the next decision.</p></div>
        <div className="grid service-grid">{site.services.slice(0,6).map((x,i)=><Link className="card service-card reveal" key={x[0]} href={'/services/'+slug(x[0])}><span className="service-icon"><Icon name={serviceIcons[i]} /></span><h3>{x[0]}</h3><p>{x[1]}</p><span className="card-link">Explore this service <span aria-hidden="true">→</span></span></Link>)}</div>
        <div className="section-action"><Link className="secondary-button" href="/services">View all services <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>

    <section className="section outcomes-section">
      <div className="wrap outcomes-grid">
        <div className="outcomes-copy"><p className="eyebrow">Why teams choose support</p><h2>Protect the details that build trust.</h2><p>Customer relationships rarely break because of one big moment. They become harder to manage when context is scattered, requests sit unanswered, or the next action is unclear.</p><p>A virtual account manager brings a steady operating rhythm to the work between customer conversations.</p><Link className="text-link" href="/about">Learn about our approach <span aria-hidden="true">→</span></Link></div>
        <div className="outcome-list">{outcomes.map(([title,copy,icon],i)=><article className="outcome-item reveal" key={title}><span className="outcome-number">0{i+1}</span><span className="service-icon"><Icon name={icon} /></span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </div>
    </section>

    <section className="section process-section" id="how-it-works">
      <div className="wrap"><div className="section-heading centered"><div><p className="eyebrow">A practical start</p><h2>From busywork to a repeatable system.</h2></div><p>Start with the work creating the most friction, then expand support as the process becomes familiar.</p></div><div className="process-grid">{steps.map(([title,copy],i)=><article className="process-card reveal" key={title}><span className="process-number">{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
    </section>

    <section className="section fit-section">
      <div className="wrap fit-card"><div><p className="eyebrow">A flexible extension of your team</p><h2>Keep your leaders focused on relationships, not reminders.</h2><p>Your virtual account manager handles approved coordination and preparation. Your leaders stay responsible for strategy, judgment, customer commitments, and commercial decisions.</p><Link className="cta" href="/contact-us">Talk through your workflow <span aria-hidden="true">→</span></Link></div><div className="fit-list"><p><Icon name="check" /><span><b>Account teams</b><small>Increase portfolio capacity without losing visibility.</small></span></p><p><Icon name="check" /><span><b>Agencies and service firms</b><small>Keep client communication and deliverable follow-through organized.</small></span></p><p><Icon name="check" /><span><b>Customer success leaders</b><small>Create a more consistent operating rhythm across accounts.</small></span></p></div></div>
    </section>

    <section className="section faq-section"><div className="wrap faq-grid"><div><p className="eyebrow">Questions, answered</p><h2>What to know before you start.</h2><p>Have a different workflow in mind? We can talk through what should stay with your team and what can be delegated.</p><Link className="secondary-button" href="/contact-us">Ask us a question</Link></div><div className="faq-list">{faqs.map(([question,answer],i)=><details key={question} open={i===0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="final-cta"><div className="wrap final-cta-inner"><div><p className="eyebrow">A calmer customer operation starts here</p><h2>Give every account the attention it deserves.</h2><p>Book a free consultation to identify the first account management tasks you can delegate.</p></div><Link id="cta-home-footer-consultation" className="cta cta-light" href="/contact-us">Book your free consultation <span aria-hidden="true">→</span></Link></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
  </>;
}

function Icon({name}:{name:string}) {
  const paths:Record<string,React.ReactNode> = {
    check:<path d="m5 12 4 4L19 6"/>, clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>, shield:<><path d="M12 3 5 6v5c0 4.6 2.8 8.1 7 10 4.2-1.9 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>, map:<><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/></>, calendar:<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01"/></>, chat:<><path d="M21 14a4 4 0 0 1-4 4H9l-6 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v7Z"/><path d="M8 9h8M8 13h5"/></>, users:<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></>, inbox:<><path d="M4 4h16l2 10v6H2v-6L4 4Z"/><path d="M2 14h5l2 3h6l2-3h5"/></>, chart:<><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.check}</svg>;
}

function slug(s:string){return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
