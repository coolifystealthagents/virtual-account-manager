import type {Metadata} from 'next';
import {site} from '@/lib/site';

export const metadata: Metadata = {
  title: 'Accessibility',
  description: `Learn how ${site.brand} supports accessible browsing, what we are improving, and how to report an accessibility barrier.`,
  alternates: {canonical: '/accessibility'},
};

const practices = [
  {number: '01', title: 'Keyboard access', copy: 'Navigation, links, forms, and interactive controls are designed to work without a mouse and to show a visible focus state.'},
  {number: '02', title: 'Readable content', copy: 'Pages use descriptive headings, plain language, legible type, and layouts that remain useful when text is enlarged.'},
  {number: '03', title: 'Useful structure', copy: 'Semantic landmarks, meaningful link text, labels, and image descriptions help assistive technology communicate each page.'},
  {number: '04', title: 'Responsive by default', copy: 'Content is designed to reflow across phones, tablets, and desktops without forcing unnecessary horizontal scrolling.'},
];

const reviewPoints = [
  'Keyboard-only navigation and visible focus treatment',
  'Heading order, landmarks, labels, and link purpose',
  'Color contrast and information that does not rely on color alone',
  'Text zoom, responsive reflow, and reduced-motion preferences',
  'Alternative text for meaningful images and graphics',
];

export default function AccessibilityPage() {
  const email = `hello@${site.domain}`;

  return <>
    <section className="access-hero">
      <div className="wrap access-hero-grid">
        <div className="access-hero-copy reveal">
          <p className="eyebrow">Access is part of the work</p>
          <h1>A clearer path for every visitor.</h1>
          <p className="lede">We want people to understand our services, explore our resources, and contact our team using the device or assistive technology that works for them.</p>
          <div className="access-hero-actions">
            <a className="cta" href={`mailto:${email}?subject=Accessibility%20feedback`}>Report a barrier</a>
            <a className="secondary-button" href="#our-approach">Read our approach</a>
          </div>
        </div>
        <div className="access-poster" aria-hidden="true">
          <span>Access</span><strong>A</strong><b>11Y</b><i>For everyone</i>
        </div>
      </div>
    </section>

    <section className="section access-intro" id="our-approach">
      <div className="wrap access-intro-grid">
        <div><p className="eyebrow">Our commitment</p><h2>Useful, understandable, and operable.</h2></div>
        <div className="access-intro-copy">
          <p className="large-copy">{site.legal.accessibility}</p>
          <p>Our goal is to align this website with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. Accessibility is ongoing work, so we review new content and features as the site evolves.</p>
          <p className="access-reviewed"><b>Statement reviewed</b><span>October 15, 2026</span></p>
        </div>
      </div>
    </section>

    <section className="section access-practices" aria-labelledby="practice-heading">
      <div className="wrap">
        <div className="section-heading">
          <div><p className="eyebrow">How we design</p><h2 id="practice-heading">Four practical priorities.</h2></div>
          <p>These principles guide the way we structure pages, present information, and test the experience.</p>
        </div>
        <div className="access-practice-grid">
          {practices.map((practice) => <article className="access-practice-card" key={practice.number}>
            <span>{practice.number}</span><h3>{practice.title}</h3><p>{practice.copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section access-review">
      <div className="wrap access-review-grid">
        <div className="access-review-panel">
          <p className="eyebrow">What we review</p><h2>Built into each improvement.</h2>
          <p>Accessibility checks are part of our content and interface review. We focus on the barriers that most directly affect whether someone can read, navigate, understand, and take action.</p>
        </div>
        <ul className="access-checklist">
          {reviewPoints.map((point, index) => <li key={point}><b>{String(index + 1).padStart(2, '0')}</b><span>{point}</span></li>)}
        </ul>
      </div>
    </section>

    <section className="section access-help" aria-labelledby="access-help-heading">
      <div className="wrap">
        <div className="section-heading">
          <div><p className="eyebrow">Adjust your view</p><h2 id="access-help-heading">Use the site your way.</h2></div>
          <p>Most modern browsers and operating systems include tools that can make this website easier to use.</p>
        </div>
        <div className="access-help-grid">
          <article><b>Text and zoom</b><p>Use your browser zoom controls to enlarge page content. The layout is designed to reflow as the view changes.</p></article>
          <article><b>Keyboard navigation</b><p>Use Tab and Shift + Tab to move between interactive elements. Press Enter or Space to activate the focused control.</p></article>
          <article><b>Display preferences</b><p>Browser and operating-system settings can adjust contrast, color, motion, magnification, and spoken output.</p></article>
        </div>
      </div>
    </section>

    <section className="access-feedback">
      <div className="wrap access-feedback-grid">
        <div>
          <p className="eyebrow">Feedback makes the site better</p><h2>Found a barrier? Tell us.</h2>
          <p>If something prevents you from using this website, email us with the page address, a short description of the issue, and the browser or assistive technology you were using. We will review the report and respond as soon as practicable.</p>
        </div>
        <div className="access-contact-card">
          <span>Accessibility contact</span><a href={`mailto:${email}?subject=Accessibility%20feedback`}>{email}</a>
          <p>We can also help provide website information in a more accessible format when reasonably possible.</p>
        </div>
      </div>
    </section>
  </>;
}
