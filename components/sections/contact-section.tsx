import { ArrowUpRight } from "lucide-react";
import { ContactLinks } from "@/components/contact-links";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-heading">
        <p><span>05 /</span> Contact</p>
        <p className="contact-availability"><i aria-hidden="true" />{profile.contactAvailability}</p>
      </div>

      <Reveal className="contact-statement">
        <h2 id="contact-title"><span>Have an</span><span>opportunity</span><span>in mind?</span></h2>
      </Reveal>

      {profile.email && (
        <Reveal className="contact-email">
          <span>Email</span>
          <a href={`mailto:${profile.email}`} aria-label={`Email Mohammed at ${profile.email}`}>
            {profile.email}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      )}

      <ContactLinks />
    </section>
  );
}
