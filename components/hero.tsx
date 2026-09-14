"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { ArrowLink } from "./arrow-link";

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.25], [0, reduced ? 0 : 90]);
  const reveal = (delay: number) => reduced ? {} : { initial: { y: "110%" }, animate: { y: 0 }, transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const } };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="availability mobile-availability"><span aria-hidden="true" />{profile.availability}</div>
      <div className="hero-meta">
        <p>Full-Stack / Backend<br />DevOps / DevSecOps</p>
        <p className="hero-index">Based in Morocco<br />Open internationally</p>
      </div>
      <h1 id="hero-title" className="hero-name" aria-label="Mohammed Elmahfoudi">
        <span className="name-line name-line-outline"><motion.span {...reveal(0.1)}>Mohammed</motion.span></span>
        <span className="name-line name-line-bottom name-line-solid"><motion.span {...reveal(0.18)}>Elmahfoudi</motion.span></span>
      </h1>
      <div className="portrait-stage">
        <motion.div className="portrait-motion" style={{ y }} initial={false}>
          <div className={`portrait-card ${profile.portrait ? "has-image" : ""}`}>
            {profile.portrait ? <Image src={profile.portrait} alt="Portrait of Mohammed Elmahfoudi" fill priority sizes="(max-width: 768px) 54vw, 24vw" /> : <><span className="portrait-grid" /><span className="portrait-monogram">ME</span><span className="portrait-note">PORTRAIT<br />READY</span></>}
          </div>
          {!profile.portrait && <span className="portrait-caption">Replace with /public/images/portrait</span>}
        </motion.div>
      </div>
      <motion.div className="hero-bottom" initial={false}>
        <div className="hero-intro">
          <p className="hero-role">Software Engineer</p>
          <p className="hero-description">I build reliable digital products, backend systems, and the infrastructure that keeps them running.</p>
          <ArrowLink href="#work" className="hero-cta">Explore my work</ArrowLink>
        </div>
        <div className="hero-socials" aria-label="Social links">
          {profile.github ? <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a> : <span>GitHub <ArrowUpRight /></span>}
          {profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a> : <span>LinkedIn <ArrowUpRight /></span>}
          {profile.email ? <a href={`mailto:${profile.email}`}>Email <ArrowUpRight /></a> : <span>Email <ArrowUpRight /></span>}
        </div>
      </motion.div>
      <a className="scroll-cue" href="#work"><span>Scroll to selected work</span><ArrowDownRight aria-hidden="true" /></a>
    </section>
  );
}
