import Link from 'next/link';
import {site} from '@/lib/site';
import './thank-you.css';

export const metadata={title:'Choose your consultation time',description:'Choose a convenient time for your Virtual Account Manager consultation.',robots:{index:false,follow:false}};

const nextSteps=[
  ['01','Choose your time','Pick the slot that feels easiest for your schedule.'],
  ['02','Check your inbox','We will send the calendar invitation and meeting details.'],
  ['03','Bring one bottleneck','No polished brief needed. Start with the work that keeps slipping.'],
];

export default function Page(){return <div className="booking-page">
  <section className="booking-intro" aria-labelledby="booking-title"><div className="wrap booking-intro-grid">
    <div className="booking-copy"><p className="eyebrow">Your request is in</p><h1 id="booking-title">Nice to meet you. Let’s find your time.</h1><p className="booking-lede">You have already done the hard part by reaching out. Choose a time below and we’ll come ready to listen, understand what is getting stuck, and identify a practical first step.</p><div className="booking-note"><span aria-hidden="true">30</span><p><strong>A focused 30-minute conversation.</strong><br/>No sales deck. No sensitive customer details. Just your questions and one workflow you would like to make easier.</p></div><Link className="booking-back" href="/">Not ready to book? Return to the homepage</Link></div>
    <div className="booking-poster" aria-hidden="true"><span className="booking-poster-kicker">Request received</span><strong>Next:<br/>choose your time</strong><div className="booking-poster-flow"><span><b>01</b> Request sent</span><span><b>02</b> Pick a time below</span></div><i>30-minute consultation</i></div>
  </div></section>
  <section className="booking-calendar-section" aria-labelledby="calendar-title"><div className="wrap booking-calendar-grid">
    <aside className="booking-steps"><p className="eyebrow">What happens next</p><h2>Simple from here.</h2><ol>{nextSteps.map(([number,title,copy])=><li key={number}><b>{number}</b><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></aside>
    <div className="booking-frame-card"><div className="booking-frame-heading"><div><p className="eyebrow">Your calendar</p><h2 id="calendar-title">Choose what works.</h2></div><p>Times display in your local time zone.</p></div><iframe className="booking-page-frame" title="Choose a date and time for your Virtual Account Manager consultation" src={site.bookingUrl} loading="eager"/></div>
  </div></section>
</div>}
