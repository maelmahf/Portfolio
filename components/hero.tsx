"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { motionDuration, motionEase } from "@/lib/motion";
import { ArrowLink } from "./arrow-link";

const nameLines = ["Mohammed", "Elmahfoudi"] as const;

export function Hero() {
  const lineMotion = (direction: "left" | "right", delay: number) => ({
    initial: {
      x: `var(--hero-word-enter-${direction})`,
      opacity: 1,
    },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.9, delay, ease: motionEase.entrance },
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
              <motion.span
                className="hero-word-motion"
                {...lineMotion(index === 0 ? "left" : "right", index === 0 ? 0 : 0.07)}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="portrait-stage"
          initial={{ opacity: 0, y: "var(--hero-portrait-enter-y)", scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: motionEase.entrance }}
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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: motionDuration.standard, delay: 0.7, ease: motionEase.standard }}
      >
        <p className="hero-role">{profile.title}</p>
        <p className="hero-description">I build digital products, backend systems<br className="hero-copy-break" /> and reliable infrastructure.</p>
        <ArrowLink href="#work" className="hero-cta">Explore my work</ArrowLink>
      </motion.div>

      <motion.nav
        className="hero-socials"
        aria-label="Social links"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: motionDuration.standard, delay: 0.76, ease: motionEase.standard }}
      >
        {profile.github && <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>}
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>}
        {profile.email && <a href={`mailto:${profile.email}`}>Email <ArrowUpRight /></a>}
      </motion.nav>
    </section>
  );
}
