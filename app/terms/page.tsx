import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of use', description: `Terms of use for ${site.brand}`,
  alternates: { canonical: '/terms' },
};

export default function Terms() {
  return <section className="section"><div className="wrap prose"><h1>Terms of use</h1><p>Last updated October 9, 2026</p><p>{site.legal.terms}</p><h2>Contact</h2><p>Email hello@{site.domain} with questions about this page.</p></div></section>;
}
