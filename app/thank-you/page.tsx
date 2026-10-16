import Image from 'next/image';
import Link from 'next/link';
import {site} from '@/lib/site';
import './thank-you.css';

export const metadata={title:'Choose your consultation time',description:'Your request is in. Choose a convenient time for your Virtual Account Manager consultation.',robots:{index:false,follow:false}};

const nextSteps=[
  ['01','Choose your time','Pick the slot that feels easiest for your schedule.'],
  ['02','Check your inbox','We will send the calendar invitation and meeting details.'],
  ['03','Bring one bottleneck','No polished brief needed. Start with the work that keeps slipping.'],
];

export default function Page(){return <div className="booking-page">
  <section className="booking-intro" aria-labelledby="booking-title"><div className="wrap booking-intro-grid">
    <div className="booking-copy"><p className="booking-status"><span aria-hidden="true">✓</span> Request received</p><h1 id="booking-title">Your request is in.</h1><h2>Nice to meet you. Choose your time.</h2><p className="booking-lede">You have already done the hard part by reaching out. Pick a time below and we’ll come ready to listen, understand what is getting stuck, and identify a practical first step.</p><div className="booking-note"><span aria-hidden="true">30</span><p><strong>A focused 30-minute conversation.</strong><br/>No sales deck. No sensitive customer details. Just your questions and one workflow you would like to make easier.</p></div><a className="booking-jump" href="#booking-calendar">Choose a time <span aria-hidden="true">↓</span></a><Link className="booking-back" href="/">Return to the homepage</Link></div>
    <figure className="booking-photo"><Image src="/editorial-thank-you-scheduler.webp" alt="Welcoming Southeast Asian account support team gathered around a worktable" width={1600} height={1200} priority sizes="(max-width: 900px) 100vw, 52vw"/><figcaption><b>Welcome to the team.</b><span>We’re ready to listen. Choose a time that works for you below.</span></figcaption></figure>
  </div></section>
  <section className="booking-calendar-section" id="booking-calendar" aria-labelledby="calendar-title"><div className="wrap booking-calendar-grid">
    <aside className="booking-steps"><p className="eyebrow">What happens next</p><h2>Simple from here.</h2><ol>{nextSteps.map(([number,title,copy])=><li key={number}><b>{number}</b><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></aside>
    <div className="booking-frame-card"><div className="booking-frame-heading"><div><p className="eyebrow">Your calendar</p><h2 id="calendar-title">Choose what works.</h2></div><p>Times display in your local time zone.</p></div><iframe className="booking-page-frame" title="Choose a date and time for your Virtual Account Manager consultation" src={site.bookingUrl} loading="eager"/></div>
  </div></section>
</div>}
