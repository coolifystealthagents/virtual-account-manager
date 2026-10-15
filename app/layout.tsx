import type { Metadata } from 'next';
import { Baloo_2, Inter, Oswald } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import './home.css';
import { site } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';

const displayFont = Baloo_2({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const tallFont = Oswald({ subsets: ['latin'], variable: '--font-tall', display: 'swap' });
const bodyFont = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://' + site.domain),
  title: { default: site.brand, template: '%s | ' + site.brand },
  description: site.intro,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' }],
    shortcut: '/favicon.svg',
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.brand,
    url: 'https://' + site.domain,
    logo: 'https://' + site.domain + '/logo.svg',
    sameAs: [],
  };
  const tracker = `window.ACR_TRACKER_CONFIG={siteId:'${site.dir}',endpoint:'/ingest/track',debug:false};`;
  const motion = "const o=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');o.unobserve(x.target)}}));document.querySelectorAll('.reveal').forEach(x=>o.observe(x));";

  return (
    <html lang="en" className={`${displayFont.variable} ${tallFont.variable} ${bodyFont.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} /></head>
      <body className={site.variant} style={{
        '--bg': site.colors[1],
        '--ink': site.colors[0],
        '--accent': site.colors[2],
        '--metal': site.colors[3],
        '--paper': site.colors[1],
      } as React.CSSProperties}>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Popup />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <Script id="acr-config" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: tracker }} />
        <Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive" />
        <Script id="motion" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: motion }} />
      </body>
    </html>
  );
}
