import Link from 'next/link';
import './thanks-whats-next.css';

export const metadata={title:'Booking confirmed',description:'Your Virtual Account Manager consultation is confirmed. Review what happens next.',robots:{index:false,follow:false}};

const nextSteps=[
  ['01','Check your inbox','Your calendar invitation and meeting link are on their way.'],
  ['02','Bring one workflow','Choose the recurring account task creating the most follow-up or missed handoffs.'],
  ['03','Come as you are','No deck or polished brief needed. We’ll find the useful starting point together.'],
];

export default function Page(){return <main className="confirmed-page">
  <section className="confirmed-hero" aria-labelledby="confirmed-title">
    <div className="confirmed-orbit" aria-hidden="true"/>
    <div className="wrap confirmed-grid">
      <div className="confirmed-copy">
        <p className="confirmed-status"><span aria-hidden="true">✓</span> Booking confirmed</p>
        <h1 id="confirmed-title">You’re on<br/>the calendar.</h1>
        <p className="confirmed-lede">Your time is reserved. A confirmation email with the meeting details is heading to your inbox now.</p>
        <div className="confirmed-signoff"><span aria-hidden="true">→</span><p><strong>We’ll see you there.</strong><br/>Bring one workflow that keeps slipping. That is enough to start.</p></div>
        <Link className="confirmed-home" href="/">Return to the homepage <span aria-hidden="true">↗</span></Link>
      </div>

      <aside className="confirmed-ticket" aria-labelledby="next-title">
        <div className="ticket-topline"><p className="eyebrow">Before the call</p><span aria-hidden="true">VAM / 001</span></div>
        <h2 id="next-title">Simple from here.</h2>
        <ol>{nextSteps.map(([number,title,copy])=><li key={number}>
          <b>{number}</b><div><h3>{title}</h3><p>{copy}</p></div>
        </li>)}</ol>
        <p className="ticket-note"><span aria-hidden="true">●</span> Your meeting time appears in your local time zone.</p>
      </aside>
    </div>
  </section>
</main>}
