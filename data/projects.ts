export type Project = {
  slug: string;
  number: string;
  name: string;
  eyebrow: string;
  summary: string;
  statement: string;
  capabilities: string[];
  stack: string[];
  challenge: string;
  solution: string;
  role: string;
  decisions: string[];
  learned: string;
  github: string | null;
  live: string | null;
  visual: "health" | "platform" | "server" | "infra";
};

export const projects: Project[] = [
  {
    slug: "sahtek",
    number: "01",
    name: "Sahtek",
    eyebrow: "Digital health infrastructure",
    summary: "A role-aware prescription platform connecting doctors, patients, and pharmacists through one accountable flow.",
    statement: "Healthcare coordination, designed as a system—not a collection of screens.",
    capabilities: ["Doctor, patient & pharmacist roles", "Electronic prescriptions", "QR identification", "Medication history", "Pharmacy availability", "Multilingual workflows", "Analytics-ready data"],
    stack: ["NestJS", "TypeScript", "TypeORM", "MySQL", "Docker"],
    challenge: "Prescription handoffs cross multiple actors, each with different permissions, context, and operational needs. The product needed a trustworthy flow without making routine actions feel heavy.",
    solution: "A domain-led backend models prescriptions as a controlled lifecycle. Role-specific surfaces expose only the actions each participant needs, while identification and history make the handoff traceable.",
    role: "Product architecture, backend engineering, data modeling, and full-stack implementation.",
    decisions: ["Model permissions around healthcare roles", "Keep prescription state transitions explicit", "Design multilingual content as a product constraint", "Containerize the application for consistent environments"],
    learned: "The strongest healthcare UX starts with clear domain boundaries and conservative access—not visual complexity.",
    github: null,
    live: null,
    visual: "health",
  },
  {
    slug: "um6p-inf",
    number: "02",
    name: "UM6P INF Platform 2.0",
    eyebrow: "Interview operations platform",
    summary: "A scheduling and participation system for career events, built around the real coordination work behind every interview.",
    statement: "One operational layer for invitations, slots, candidates, and offers.",
    capabilities: ["Student & company authentication", "Company invitations", "Interview slot planning", "Booking workflow", "Participant management", "Admin controls", "Offers", "Search & re-invite"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel"],
    challenge: "Career events generate scheduling conflicts and fragmented communication across students, companies, and administrators.",
    solution: "The platform centralizes invitation, availability, booking, and follow-up into role-specific journeys backed by a shared source of truth.",
    role: "Full-stack engineering, workflow design, database integration, and deployment.",
    decisions: ["Use Supabase for a cohesive auth and data layer", "Represent booking rules in the data model", "Optimize high-frequency admin workflows", "Keep search and re-invitation first-class"],
    learned: "Operational software succeeds when exceptional cases are designed alongside the happy path.",
    github: null,
    live: null,
    visual: "platform",
  },
  {
    slug: "webserv",
    number: "03",
    name: "Webserv",
    eyebrow: "Systems / network engineering",
    summary: "An HTTP/1.1 server written from scratch in C++, built to understand the machinery below familiar web frameworks.",
    statement: "The web stack, reduced to sockets, bytes, state, and careful failure handling.",
    capabilities: ["HTTP/1.1 parsing", "Non-blocking sockets", "poll() event loop", "Routing & configuration", "CGI execution", "Uploads", "Sessions & cookies", "Range requests", "Keep-alive & timeouts"],
    stack: ["C++", "Linux", "Networking", "HTTP", "CGI"],
    challenge: "A server must handle many partial, malformed, and concurrent requests without blocking or losing protocol correctness.",
    solution: "A non-blocking event loop separates connection state, request parsing, routing, response construction, and resource cleanup into explicit stages.",
    role: "Systems design, HTTP implementation, networking, and test-driven debugging.",
    decisions: ["Track every connection as an explicit state machine", "Treat partial reads and writes as normal", "Bound work with timeouts and payload limits", "Keep parsing independent from transport"],
    learned: "Framework abstractions become much easier to judge after implementing the protocol behavior they hide.",
    github: null,
    live: null,
    visual: "server",
  },
  {
    slug: "inception",
    number: "04",
    name: "Inception",
    eyebrow: "Containerized infrastructure",
    summary: "A multi-service web stack assembled as isolated containers with durable storage, TLS, and explicit service boundaries.",
    statement: "Infrastructure that can be rebuilt, inspected, and reasoned about.",
    capabilities: ["Service isolation", "TLS termination", "Persistent volumes", "WordPress runtime", "Database provisioning", "Redis caching", "FTP access", "Admin tooling"],
    stack: ["Docker", "Docker Compose", "Nginx", "MariaDB", "WordPress", "Redis", "Linux"],
    challenge: "The system needed reproducible provisioning while keeping data durable and services independently understandable.",
    solution: "Purpose-built containers communicate through a controlled network, persist state through named volumes, and expose only the necessary edges through Nginx.",
    role: "Infrastructure design, container configuration, shell automation, and service hardening.",
    decisions: ["Build service images instead of relying on opaque bundles", "Separate runtime state from containers", "Terminate TLS at the public boundary", "Make startup dependencies and health explicit"],
    learned: "Containers are most useful when they reinforce good service boundaries rather than merely packaging a monolith.",
    github: null,
    live: null,
    visual: "infra",
  },
];

export const otherProjects = ["Minishell", "Cub3D", "Philosophers", "push_swap", "pipex", "so_long", "fractol"];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
