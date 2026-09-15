import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArchitectureDiagram } from "@/components/case-study/architecture-diagram";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/data/projects";
import { profile } from "@/data/profile";

export function CaseStudyPage({ project, next, total }: { project: Project; next: Project; total: number }) {
  const links = [
    project.github ? { label: "View source", href: project.github } : null,
    project.live ? { label: "View live", href: project.live } : null,
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return (
    <main className={`case-page case-page-${project.visual}`}>
      <header className="case-header">
        <Link href="/#work"><ArrowLeft aria-hidden="true" /> All work</Link>
        <Link className="wordmark" href="/" aria-label="Mohammed Elmahfoudi, home">ME<span>®</span></Link>
        <span>{project.number} / {String(total).padStart(2, "0")}</span>
      </header>

      <article>
        <section className="case-hero" aria-labelledby="case-title">
          <div className="case-hero-kicker"><span>{project.number} / {project.caseStudy.context}</span><span>{project.eyebrow}</span></div>
          <h1 id="case-title">{project.caseStudy.titleLines.map((line) => <span key={line}>{line}</span>)}</h1>
          <div className="case-hero-intro">
            <p>{project.summary}</p>
            <dl>
              <div><dt>Role</dt><dd>{project.role}</dd></div>
              <div><dt>Stack</dt><dd>{project.stack.join(" / ")}</dd></div>
            </dl>
          </div>
          <div className="case-hero-visual">
            <ProjectVisual type={project.visual} compact coverImage={project.coverImage} imageAlt={project.imageAlt} labels={project.showcaseLabels} />
          </div>
        </section>

        <section className="case-overview" aria-labelledby="overview-title">
          <div className="case-section-label"><span>01 /</span><h2 id="overview-title">Overview</h2></div>
          <Reveal className="case-overview-copy">
            <p>{project.statement}</p>
            <div><span>What it is</span><p>{project.summary}</p></div>
          </Reveal>
        </section>

        <section className="case-context" aria-label="Problem and approach">
          <Reveal className="case-context-block">
            <span>The problem</span>
            <h2>The constraint shaped the system.</h2>
            <p>{project.challenge}</p>
          </Reveal>
          <Reveal className="case-context-block">
            <span>The approach</span>
            <h2>Responsibilities made explicit.</h2>
            <p>{project.solution}</p>
          </Reveal>
        </section>

        {project.images.length > 0 && (
          <section className="case-media" aria-labelledby="project-media-title">
            <div className="case-section-label"><span>Media /</span><h2 id="project-media-title">Product views</h2></div>
            <div className="case-media-grid">
              {project.images.map((item) => (
                <figure key={item.src}>
                  <div><Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 92vw" /></div>
                  {item.caption && <figcaption>{item.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="case-flow-section" aria-labelledby="architecture-title">
          <div className="case-section-label"><span>{project.caseStudy.architectureLabel.split(" / ")[0]} /</span><h2>{project.caseStudy.architectureLabel.split(" / ")[1]}</h2></div>
          <Reveal className="case-flow-heading">
            <h2 id="architecture-title">{project.caseStudy.architectureTitle}</h2>
            <p>{project.caseStudy.architectureDescription}</p>
          </Reveal>
          <ArchitectureDiagram project={project} />
        </section>

        <section className="case-engineering" aria-labelledby="engineering-title">
          <div className="case-section-label"><span>03 /</span><h2>Engineering</h2></div>
          <Reveal className="case-engineering-heading"><h2 id="engineering-title">{project.caseStudy.engineeringTitle}</h2></Reveal>
          <ol>
            {project.caseStudy.engineering.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-scope" aria-labelledby="scope-title">
          <div className="case-scope-capabilities">
            <div className="case-section-label"><span>04 /</span><h2 id="scope-title">System scope</h2></div>
            <ul>{project.capabilities.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
          </div>
          <div className="case-scope-stack">
            <span>Stack</span>
            <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section className="case-learning" aria-labelledby="learning-title">
          <div className="case-section-label"><span>05 /</span><h2 id="learning-title">Engineering takeaway</h2></div>
          <Reveal><blockquote>{project.learned}</blockquote></Reveal>
        </section>

        {links.length > 0 && (
          <nav className="case-links" aria-label={`${project.name} links`}>
            {links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight aria-hidden="true" /></a>)}
          </nav>
        )}
      </article>

      <Link className="next-project" href={`/work/${next.slug}`}>
        <span>Next project</span>
        <strong>{next.name}</strong>
        <ArrowRight aria-hidden="true" />
      </Link>

      <footer className="case-footer">
        <p><strong>{profile.name}</strong><span>{profile.title}</span></p>
        <nav aria-label="Project footer">
          <Link href="/#work">All work</Link>
          {profile.email && <a href={`mailto:${profile.email}`}>Email</a>}
          {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        </nav>
      </footer>
    </main>
  );
}
