import { Reveal } from "@/components/reveal";
import { otherProjects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="section stack-section" aria-labelledby="stack-title">
      <div className="section-heading light-heading"><span>04</span><h2 id="stack-title">What I build with</h2><p>Tools selected<br />for the constraint.</p></div>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal className="skill-group" delay={index * .03} key={group.label}>
            <span>{String(index + 1).padStart(2, "0")}</span><h3>{group.label}</h3><p>{group.items.join("  /  ")}</p>
          </Reveal>
        ))}
      </div>
      <div className="other-projects"><span>Selected 42 work</span><div>{otherProjects.map((project) => <span key={project}>{project}</span>)}</div></div>
    </section>
  );
}
