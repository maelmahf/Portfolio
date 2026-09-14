import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-title">
      <div className="section-heading"><span>03</span><h2 id="experience-title">Journey</h2><p>Learning through<br />systems and products.</p></div>
      <div className="timeline">
        {experience.map((item) => (
          <Reveal className="timeline-row" key={item.institution}>
            <span className="timeline-period">{item.period}</span>
            <div><h3>{item.institution}</h3><p>{item.location}</p></div>
            <div><h4>{item.program}</h4><p>{item.detail}</p></div>
            <span className="timeline-arrow"><ArrowUpRight /></span>
          </Reveal>
        ))}
        <div className="timeline-placeholder"><span>Next</span><p>Software engineering internship / PFE</p><small>Available</small></div>
      </div>
    </section>
  );
}
