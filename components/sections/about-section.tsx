import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="section-heading light-heading"><span>02</span><h2 id="about-title">About</h2><p>Interface to<br />infrastructure.</p></div>
      <Reveal className="about-grid">
        <p className="about-lead">I engineer the product <em>and</em> the system beneath it.</p>
        <div className="about-body">
          <p>I work across interfaces, APIs, data models, network behavior, and deployment. Seeing those layers together helps me make decisions that hold up beyond the demo.</p>
          <p>I’m looking for software engineering work where clarity, reliability, and the ability to ship all matter.</p>
        </div>
        <div className="about-layers" aria-hidden="true"><span>UI</span><span>API</span><span>DATA</span><span>OPS</span></div>
      </Reveal>
    </section>
  );
}
