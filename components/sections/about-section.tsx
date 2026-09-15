import { Reveal } from "@/components/reveal";

export function AboutSection() {
  const disciplines = [
    ["Product", "Interfaces and end-to-end application flows."],
    ["Backend", "APIs, data models, and application logic."],
    ["Systems", "Networking, protocols, and lower-level software."],
    ["Infrastructure", "Containers, services, and deployment."],
  ] as const;

  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="about-heading">
        <span>02 /</span>
        <h2 id="about-title">About</h2>
      </div>

      <Reveal className="about-statement">
        <p>
          <span>I build software</span>
          <span>from the interface</span>
          <span className="about-statement-muted">down to the system.</span>
        </p>
      </Reveal>

      <div className="about-lower">
        <Reveal className="about-copy">
          <p>I like working across the layers of a product—from the interface people interact with to the APIs, data models, and infrastructure that keep it running.</p>
          <p>My work spans full-stack applications, backend systems, network programming, and deployment.</p>
        </Reveal>

        <Reveal className="about-index">
          <ol>
            {disciplines.map(([name, description], index) => (
              <li key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{name}</strong>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
