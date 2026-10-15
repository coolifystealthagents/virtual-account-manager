import Link from 'next/link';
import {site} from '@/lib/site';

export default function Header(){return <header className="nav"><div className="wrap navin"><Link href="/" className="brand" aria-label={`${site.brand} home`}><img src="/logo.svg" alt="" width="48" height="48"/><span className="brand-copy"><strong>{site.brand}</strong><small>Powered by Stealth Agents</small></span></Link><nav className="links" aria-label="Primary"><Link href="/services">Services</Link><Link href="/research">Research</Link><Link href="/blog">Blogs</Link><Link href="/about">About</Link><Link id="cta-global-header-consultation" className="cta" href="/contact-us">Book a free call</Link></nav></div></header>}
