import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectVisual } from "./project-visual";
import { Reveal } from "./reveal";

export function ProjectShowcase() {
  return (
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <div className="section-heading"><span>01</span><h2 id="work-title">Selected work</h2><p>Products, protocols,<br />and infrastructure.</p></div>
      <Reveal className="work-statement"><p>Selected engineering<br /><span>work / 2026</span></p><small>Four systems across product,<br />backend, and infrastructure.</small></Reveal>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Reveal key={project.slug}>
            <article className={`project-row ${index % 2 ? "project-reverse" : ""}`}>
              <Link className="project-art" href={`/work/${project.slug}`} aria-label={`View ${project.name} case study`}><ProjectVisual type={project.visual} /></Link>
              <div className="project-copy">
                <div className="project-kicker"><span>{project.number} / 04</span><span>{project.eyebrow}</span></div>
                <h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3>
                <p>{project.summary}</p>
                <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                <Link className="case-link" href={`/work/${project.slug}`}>View case study <ArrowUpRight /></Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
