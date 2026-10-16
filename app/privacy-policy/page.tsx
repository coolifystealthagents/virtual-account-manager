import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy policy', description: `Privacy policy for ${site.brand}`,
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicy() {
  return <section className="section"><div className="wrap prose"><h1>Privacy policy</h1><p>Last updated October 9, 2026</p><p>{site.legal.privacy}</p><h2>Contact</h2><p>Email hello@{site.domain} with questions about this page.</p></div></section>;
}
