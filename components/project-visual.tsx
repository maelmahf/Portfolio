import type { Project } from "@/data/projects";

export function ProjectVisual({ type, compact = false }: { type: Project["visual"]; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${type} ${compact ? "is-compact" : ""}`} aria-hidden="true">
      <div className="visual-top"><span>{type === "health" ? "HEALTH SYSTEM" : type === "platform" ? "EVENT OPS" : type === "server" ? "HTTP / 1.1" : "SERVICE MAP"}</span><span>● LIVE MODEL</span></div>
      {type === "health" && <div className="health-ui"><div className="health-cross">+</div><div className="rx-card"><span>RX—0942</span><b>Verified prescription</b><i /></div><div className="patient-line"><span>DR</span><span>PT</span><span>PH</span></div></div>}
      {type === "platform" && <div className="platform-ui"><div className="date-stack"><b>18</b><span>INTERVIEWS</span></div><div className="slots">{["09:00", "10:30", "13:00", "15:30"].map((time, i) => <div key={time}><span>{time}</span><i style={{ width: `${38 + i * 14}%` }} /></div>)}</div></div>}
      {type === "server" && <div className="server-ui"><div className="request"><span>GET</span><b>/systems/work</b><em>200 OK</em></div><pre>{`poll(fd) → parse\n         → route\n         → respond`}</pre><div className="server-pulse" /></div>}
      {type === "infra" && <div className="infra-ui"><div className="infra-core">NGINX</div>{["WP", "DB", "REDIS", "TLS"].map((item, i) => <div key={item} className={`node node-${i}`}>{item}</div>)}</div>}
      <div className="visual-bottom"><span>MOHAMMED ELMAHFOUDI</span><span>ENGINEERED / {type.toUpperCase()}</span></div>
    </div>
  );
}
