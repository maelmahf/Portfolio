import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectVisual } from "./project-visual";
import { Reveal } from "./reveal";

const layouts = ["split-copy", "split-visual", "wide-dark", "wide-light"] as const;

export function ProjectShowcase() {
  const total = String(projects.length).padStart(2, "0");

  return (
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <div className="section-heading work-heading">
        <span>01 /</span>
        <h2 id="work-title">Selected work</h2>
        <p>Products, protocols,<br />and infrastructure.</p>
      </div>

      <Reveal className="work-intro">
        <p>Systems &amp; products<br /><span>I&apos;ve designed and built.</span></p>
      </Reveal>

      <div className="projects-list">
        {projects.map((project, index) => (
          <Reveal key={project.slug}>
            <article className={`project-entry project-${layouts[index]}`}>
              <div className="project-copy">
                <div className="project-kicker">
                  <span>{project.number} / {total}</span>
                  <span>{project.showcaseCategory ?? project.eyebrow}</span>
                </div>
                <h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3>
                <p>{project.summary}</p>
              </div>

              <Link className="project-art" href={`/work/${project.slug}`} aria-label={`View ${project.name} case study`}>
                <ProjectVisual
                  type={project.visual}
                  coverImage={project.coverImage}
                  imageAlt={project.imageAlt}
                  labels={project.showcaseLabels}
                />
              </Link>

              <div className="project-footer">
                <div className="project-stack" aria-label="Technologies">{project.stack.join(" / ")}</div>
                <Link className="case-link" href={`/work/${project.slug}`}>View case study <ArrowUpRight /></Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
