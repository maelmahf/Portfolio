"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { motionDuration, motionEase } from "@/lib/motion";
import { ArrowLink } from "./arrow-link";

const nameLines = ["Mohammed", "Elmahfoudi"] as const;

export function Hero() {
  const reduced = useReducedMotion();
  const duration = reduced ? motionDuration.instant : motionDuration.reveal;
  const lineMotion = (delay: number) => ({
    initial: { y: "5%", opacity: 0.92 },
    animate: { y: 0, opacity: 1 },
    transition: { duration, delay: reduced ? 0 : delay, ease: motionEase.entrance },
  });

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="availability mobile-availability">
        <span aria-hidden="true" />
        {profile.availability}
      </div>

      <div className="hero-art">
        <h1 id="hero-title" className="hero-name hero-name-back" aria-label={profile.name}>
          {nameLines.map((line, index) => (
            <span className={`name-line name-line-${index + 1}`} key={line}>
              <motion.span {...lineMotion(index === 0 ? 0.08 : 0.14)}>{line}</motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="portrait-stage"
          initial={{ opacity: 1, y: 14, scale: 0.988 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration, delay: reduced ? 0 : 0.22, ease: motionEase.entrance }}
        >
          <div className="portrait-card has-image">
            <Image
              src={profile.portrait ?? "/images/portrait/mohammed-elmahfoudi-portrait-v2.png"}
              alt="Portrait of Mohammed Elmahfoudi"
              fill
              priority
              sizes="(max-width: 768px) 69vw, (max-width: 1200px) 38vw, 32vw"
            />
          </div>
        </motion.div>

      </div>

      <motion.div
        className="hero-intro"
        initial={{ opacity: 0.92, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0 : motionDuration.standard, delay: reduced ? 0 : 0.32, ease: motionEase.standard }}
      >
        <p className="hero-role">{profile.title}</p>
        <p className="hero-description">I build digital products, backend systems<br className="hero-copy-break" /> and reliable infrastructure.</p>
        <ArrowLink href="#work" className="hero-cta">Explore my work</ArrowLink>
      </motion.div>

      <motion.nav
        className="hero-socials"
        aria-label="Social links"
        initial={{ opacity: 0.92, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0 : motionDuration.standard, delay: reduced ? 0 : 0.38, ease: motionEase.standard }}
      >
        {profile.github && <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>}
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>}
        {profile.email && <a href={`mailto:${profile.email}`}>Email <ArrowUpRight /></a>}
      </motion.nav>
    </section>
  );
}
