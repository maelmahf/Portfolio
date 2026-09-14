"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-availability"><span aria-hidden="true" />{profile.availability}</div>
      <Link className="wordmark mobile-wordmark" href="/" aria-label="Mohammed Elmahfoudi, home">ME<span>®</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => <Link key={link.label} href={link.href}>{link.label}</Link>)}
      </nav>
      <Link className="header-cta" href="/#contact">Let&apos;s talk <ArrowUpRight size={15} /></Link>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" className="mobile-menu" initial={reduced ? false : { opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.25 }}>
            <span className="micro-label">Navigate / 2026</span>
            <nav aria-label="Mobile navigation">
              {links.map((link, index) => (
                <Link key={link.label} href={link.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link.label}</Link>
              ))}
            </nav>
            <div className="mobile-menu-meta"><p>Software Engineer<br />Morocco</p><Link href="/#contact" onClick={() => setOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></Link></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
