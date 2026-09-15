import { Reveal } from "@/components/reveal";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-title">
      <div className="journey-heading">
        <span>03 /</span>
        <h2 id="experience-title">Journey</h2>
      </div>

      <Reveal className="journey-intro">
        <p><span>Learning by</span><span>building systems.</span></p>
      </Reveal>

      <ol className="journey-list">
        {experience.map((item, index) => (
          <li key={item.institution}>
            <Reveal className={`journey-entry ${index === 0 ? "journey-entry-primary" : "journey-entry-secondary"}`}>
              <div className="journey-entry-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <time>{item.period}</time>
              </div>

              <div className="journey-entry-content">
                <div className="journey-institution">
                  <h3>{item.institution}</h3>
                  <p>{item.location}</p>
                </div>

                <div className="journey-program">
                  <h4>{item.program}</h4>
                  <p>{item.detail}</p>
                  {item.domains.length > 0 && <p className="journey-domains">{item.domains.join(" / ")}</p>}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
