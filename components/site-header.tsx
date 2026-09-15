"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { motionDuration, motionEase } from "@/lib/motion";

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Journey", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

const focusableSelector = "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const shouldRestoreFocus = useRef(false);

  const closeMenu = (restoreFocus = true) => {
    shouldRestoreFocus.current = restoreFocus;
    setOpen(false);
  };

  useEffect(() => {
    if (!open) {
      if (shouldRestoreFocus.current) {
        triggerRef.current?.focus();
        shouldRestoreFocus.current = false;
      }
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();

    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const trapFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const focusable = Array.from(menuRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? []);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <header className="site-header">
      <div className="header-availability"><span aria-hidden="true" />{profile.availability}</div>
      <Link className="wordmark mobile-wordmark" href="/" aria-label="Mohammed Elmahfoudi, home">ME<span>®</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => <Link key={link.label} href={link.href}>{link.label}</Link>)}
      </nav>
      <Link className="header-cta" href="/#contact">Let&apos;s talk <ArrowUpRight size={15} /></Link>
      <button
        ref={triggerRef}
        className="menu-button"
        onClick={() => open ? closeMenu() : setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            onKeyDown={trapFocus}
            initial={reduced ? false : { opacity: 0.96, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: reduced ? motionDuration.instant : motionDuration.fast, ease: motionEase.standard }}
          >
            <span className="micro-label">Navigate</span>
            <nav aria-label="Mobile navigation">
              {links.map((link, index) => (
                <Link key={link.label} href={link.href} onClick={() => closeMenu(false)}><span>0{index + 1}</span>{link.label}</Link>
              ))}
            </nav>
            <div className="mobile-menu-meta">
              <p>{profile.title}<br />{profile.location}</p>
              <Link href="/#contact" onClick={() => closeMenu(false)}>Let&apos;s talk <ArrowUpRight size={15} /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
