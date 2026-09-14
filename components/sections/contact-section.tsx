import { ArrowUpRight } from "lucide-react";
import { ContactLinks } from "@/components/contact-links";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-top"><span>05 / Contact</span><span>Morocco — Open internationally</span></div>
      <Reveal><h2 id="contact-title">Building something<br /><span>that needs to</span><br />hold up?</h2></Reveal>
      <div className="contact-bottom">
        <p>Internships, PFE, and<br />engineering opportunities.</p>
        {profile.email ? <a className="talk-cta" href={`mailto:${profile.email}`}>Let&apos;s talk <ArrowUpRight /></a> : <span className="talk-cta talk-cta-disabled" title="Add an email in data/profile.ts">Let&apos;s talk <small>Email TODO</small></span>}
      </div>
      <ContactLinks />
    </section>
  );
}
