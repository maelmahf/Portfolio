import type { Project } from "@/data/projects";

export function ArchitectureDiagram({ project }: { project: Project }) {
  const { architectureSteps, architectureSupporting } = project.caseStudy;

  return (
    <div className={`case-diagram case-diagram-${project.visual}`}>
      <ol className="case-diagram-flow" aria-label={`${project.name} system flow`}>
        {architectureSteps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
            {index < architectureSteps.length - 1 && <i aria-hidden="true" />}
          </li>
        ))}
      </ol>

      <div className="case-diagram-support">
        <span>Supporting concerns</span>
        <ul>
          {architectureSupporting.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}
