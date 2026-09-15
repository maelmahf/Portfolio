import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  type: Project["visual"];
  compact?: boolean;
  coverImage?: string | null;
  imageAlt?: string | null;
  labels?: string[];
};

export function ProjectVisual({ type, compact = false, coverImage, imageAlt, labels = [] }: ProjectVisualProps) {
  if (coverImage && imageAlt) {
    return (
      <div className={`showcase-visual showcase-media${compact ? " case-showcase-visual" : ""}`}>
        <Image src={coverImage} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 70vw" />
      </div>
    );
  }

  return (
    <div className={`showcase-visual showcase-${type}${compact ? " case-showcase-visual" : ""}`} aria-hidden="true">
      {type === "health" && <HealthStudy labels={labels} />}
      {type === "platform" && <PlatformStudy labels={labels} />}
      {type === "server" && <ServerStudy labels={labels} />}
      {type === "infra" && <InfrastructureStudy labels={labels} />}
    </div>
  );
}

function VisualHeader({ left, right }: { left: string; right: string }) {
  return <div className="showcase-visual-header"><span>{left}</span><span>{right}</span></div>;
}

function HealthStudy({ labels }: { labels: string[] }) {
  return (
    <>
      <VisualHeader left="Sahtek / care flow" right="Digital prescription platform" />
      <div className="health-study-mark">Sahtek</div>
      <div className="health-study-flow">
        {labels.map((label, index) => <div key={label}><span>0{index + 1}</span><strong>{label}</strong></div>)}
      </div>
      <div className="showcase-context-meta"><span>QR</span><i /><span>CIN</span><i /><span>Medication</span><i /><span>Dispense</span></div>
    </>
  );
}

function PlatformStudy({ labels }: { labels: string[] }) {
  return (
    <>
      <VisualHeader left="UM6P INF / event flow" right="Interview operations platform" />
      <div className="platform-study-index">2.0</div>
      <div className="platform-study-flow">
        {labels.map((label, index) => <div key={label}><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong></div>)}
      </div>
      <div className="showcase-context-meta showcase-platform-meta"><span>Slots</span><i /><span>Admin</span><i /><span>Offers</span></div>
    </>
  );
}

function ServerStudy({ labels }: { labels: string[] }) {
  return (
    <>
      <VisualHeader left="HTTP/1.1 request lifecycle" right="Non-blocking / C++" />
      <div className="server-request-line"><span>REQUEST</span><strong>GET /index.html HTTP/1.1</strong><em>200 OK</em></div>
      <div className="server-study-flow">
        {labels.map((label, index) => <div key={label}><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong>{index < labels.length - 1 && <i />}</div>)}
      </div>
      <div className="server-study-meta"><span>KEEP-ALIVE</span><span>RANGE REQUESTS</span><span>SESSIONS</span><span>TIMEOUTS</span></div>
    </>
  );
}

function InfrastructureStudy({ labels }: { labels: string[] }) {
  const core = labels.slice(0, 3);
  const supporting = labels.slice(3);
  return (
    <>
      <VisualHeader left="Container service topology" right="Docker Compose" />
      <div className="infra-study">
        <div className="infra-core-flow">
          {core.map((label, index) => <div key={label}><span>0{index + 1}</span><strong>{label}</strong>{index < core.length - 1 && <i />}</div>)}
        </div>
        <div className="infra-support-flow">
          <span>Supporting services</span>
          {supporting.map((label) => <strong key={label}>{label}</strong>)}
        </div>
      </div>
      <div className="infra-boundary"><span>PUBLIC / TLS</span><i /><span>PRIVATE NETWORK</span><i /><span>PERSISTENT VOLUMES</span></div>
    </>
  );
}
