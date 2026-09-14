import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.name, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const next = projects[(projects.findIndex(({ slug }) => slug === project.slug) + 1) % projects.length];

  return (
    <main className="case-page">
      <header className="case-header"><Link href="/#work"><ArrowLeft /> All work</Link><Link className="wordmark" href="/">ME<span>®</span></Link><span>{project.number} / 04</span></header>
      <article>
        <section className="case-hero">
          <p>{project.eyebrow}</p><h1>{project.name}</h1><div className="case-intro"><p>{project.statement}</p><ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <ProjectVisual type={project.visual} compact />
        </section>
        <section className="case-overview">
          <Reveal><span>Overview</span><p>{project.summary}</p></Reveal>
          <Reveal><span>My role</span><p>{project.role}</p></Reveal>
        </section>
        <section className="case-split">
          <Reveal><span>01 / The challenge</span><h2>Designing for the real constraints.</h2><p>{project.challenge}</p></Reveal>
          <Reveal><span>02 / The solution</span><h2>A system with explicit boundaries.</h2><p>{project.solution}</p></Reveal>
        </section>
        <section className="case-architecture">
          <span>Capabilities</span><h2>What the system covers</h2><div>{project.capabilities.map((item, index) => <p key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</p>)}</div>
        </section>
        <section className="case-decisions">
          <div><span>Technical decisions</span><h2>Engineering choices with consequences.</h2></div>
          <ol>{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ol>
        </section>
        <section className="case-learning"><span>What I learned</span><blockquote>{project.learned}</blockquote></section>
        <section className="case-links"><span>Project links</span><div>{project.github ? <a href={project.github}>GitHub <ArrowUpRight /></a> : <span>GitHub <small>TODO</small></span>}{project.live ? <a href={project.live}>Live demo <ArrowUpRight /></a> : <span>Live demo <small>TODO</small></span>}</div></section>
      </article>
      <Link className="next-project" href={`/work/${next.slug}`}><span>Next case study</span><strong>{next.name}</strong><ArrowUpRight /></Link>
    </main>
  );
}
