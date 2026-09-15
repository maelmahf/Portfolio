import { Reveal } from "@/components/reveal";
import { otherProjects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="section stack-section" aria-labelledby="stack-title">
      <div className="stack-heading">
        <span>04 /</span>
        <h2 id="stack-title">Stack</h2>
      </div>

      <Reveal className="stack-intro">
        <p>Tools I use to<br /><span>build the work.</span></p>
      </Reveal>

      <div className="stack-index">
        {skillGroups.map((group, index) => (
          <Reveal className="stack-row" delay={index * .03} key={group.label}>
            <span className="stack-row-number">{String(index + 1).padStart(2, "0")}</span>
            <h3>{group.label}</h3>
            <ul aria-label={`${group.label} technologies`}>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="stack-projects">
        <span>Selected 42 work</span>
        <p>{otherProjects.join(" / ")}</p>
      </Reveal>
    </section>
  );
}
