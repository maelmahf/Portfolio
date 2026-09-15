import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { CaseStudyPage } from "@/components/case-study/case-study-page";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const canonical = `/work/${project.slug}`;
  return {
    title: `${project.name} case study`,
    description: project.summary,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: `${project.name} — Software Engineering Case Study`,
      description: project.summary,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Software Engineering Case Study`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const next = projects[(projects.findIndex(({ slug }) => slug === project.slug) + 1) % projects.length];

  return <CaseStudyPage project={project} next={next} total={projects.length} />;
}
