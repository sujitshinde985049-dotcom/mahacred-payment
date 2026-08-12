"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { navGroups } from "@/lib/content";

export function Logo() {
  return <Link href="/" className="logo" aria-label="Mahacred Firstpaytech home"><span className="logo-mark"><i /><i /><i /></span><span><b>MAHACRED</b><small>FIRSTPAYTECH</small></span></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-shell"><Logo />
    <nav className="desktop-nav" aria-label="Primary navigation">
      <Link href="/">Home</Link>{navGroups.map(g => <div className="nav-group" key={g.label}><button>{g.label}<ChevronDown size={14}/></button><div className="mega"><p>{g.note}</p><div>{g.links.map(l=><Link href={l.href} key={l.href}>{l.label}<ArrowUpRight size={13}/></Link>)}</div></div></div>)}
    </nav>
    <Link className="nav-cta" href="/contact">Business enquiry <ArrowUpRight size={16}/></Link>
    <button className="menu-btn" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  </div>{open&&<div className="mobile-nav"><Link href="/" onClick={()=>setOpen(false)}>Home</Link>{navGroups.map(g=><div key={g.label}><strong>{g.label}</strong>{g.links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}</div>)}<Link className="button primary" href="/contact" onClick={()=>setOpen(false)}>Business enquiry</Link></div>}</header>;
}
