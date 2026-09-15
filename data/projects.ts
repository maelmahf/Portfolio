export type Project = {
  slug: string;
  number: string;
  name: string;
  eyebrow: string;
  showcaseCategory?: string;
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
  coverImage: string | null;
  imageAlt: string | null;
  images: { src: string; alt: string; caption?: string }[];
  showcaseLabels: string[];
  caseStudy: {
    kind: "product" | "systems" | "infrastructure";
    titleLines: string[];
    context: string;
    architectureLabel: string;
    architectureTitle: string;
    architectureDescription: string;
    architectureSteps: string[];
    architectureSupporting: string[];
    engineeringTitle: string;
    engineering: { title: string; description: string }[];
  };
};

export const projects: Project[] = [
  {
    slug: "sahtek",
    number: "01",
    name: "Sahtek",
    eyebrow: "Digital health infrastructure",
    showcaseCategory: "Digital prescription platform",
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
    coverImage: null,
    imageAlt: null,
    images: [],
    showcaseLabels: ["Doctor", "Prescription", "Patient", "Pharmacy"],
    caseStudy: {
      kind: "product",
      titleLines: ["Sahtek"],
      context: "Product / healthcare workflow",
      architectureLabel: "02 / Workflow",
      architectureTitle: "One prescription, three accountable roles.",
      architectureDescription: "The workflow keeps prescription state understandable as responsibility moves from medical authoring to patient access and pharmacy verification.",
      architectureSteps: ["Doctor", "Prescription", "Patient", "Pharmacist"],
      architectureSupporting: ["QR / CIN access", "Medication history", "Pharmacy availability", "Dispense state"],
      engineeringTitle: "Boundaries before screens.",
      engineering: [
        { title: "Role boundaries", description: "Doctor, patient, and pharmacist experiences expose the actions each actor needs while keeping permissions explicit." },
        { title: "Prescription lifecycle", description: "Creation, retrieval, verification, and dispensing are treated as controlled state transitions rather than disconnected actions." },
        { title: "Domain data", description: "NestJS, TypeORM, and MySQL support prescription records, medication information, and retrievable history." },
        { title: "Consistent delivery", description: "Docker packages the application environment so the system can be run and inspected consistently." },
      ],
    },
  },
  {
    slug: "um6p-inf-platform",
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
    coverImage: null,
    imageAlt: null,
    images: [],
    showcaseLabels: ["Company", "Invite", "Student", "Booking", "Interview"],
    caseStudy: {
      kind: "product",
      titleLines: ["UM6P INF", "Platform 2.0"],
      context: "Product / interview operations",
      architectureLabel: "02 / Operations flow",
      architectureTitle: "From company invitation to interview slot.",
      architectureDescription: "The platform turns a multi-party scheduling process into one shared sequence for companies, students, and administrators.",
      architectureSteps: ["Company", "Invitation", "Student", "Slot", "Interview"],
      architectureSupporting: ["Admin workflows", "Participant management", "Offers", "Search / re-invite"],
      engineeringTitle: "Operations encoded as product logic.",
      engineering: [
        { title: "Role-aware access", description: "Student and company authentication separates each participant's workflow while preserving a shared event model." },
        { title: "Booking model", description: "Interview slots and reservations are represented in the data layer instead of relying on temporary interface state." },
        { title: "Admin workflow", description: "Invitation, participant, offer, search, and re-invitation tasks remain first-class operational flows." },
        { title: "Shared data layer", description: "Supabase and PostgreSQL provide the common source of truth used by the Next.js application." },
      ],
    },
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
    coverImage: null,
    imageAlt: null,
    images: [],
    showcaseLabels: ["Client", "poll()", "Parser", "Router", "Static / CGI", "Response"],
    caseStudy: {
      kind: "systems",
      titleLines: ["Webserv"],
      context: "Systems / HTTP implementation",
      architectureLabel: "02 / Request lifecycle",
      architectureTitle: "From socket readiness to HTTP response.",
      architectureDescription: "Each connection advances through explicit transport, parsing, routing, execution, and response stages without blocking the event loop.",
      architectureSteps: ["Client", "Request parser", "Server / location", "Static / upload / CGI", "Response"],
      architectureSupporting: ["poll() readiness", "Keep-alive", "Range requests", "Sessions", "Timeouts", "Error responses"],
      engineeringTitle: "Protocol correctness under concurrency.",
      engineering: [
        { title: "Event loop", description: "poll() tracks socket readiness so multiple connections can progress through partial reads and writes without blocking." },
        { title: "Routing", description: "Parsed configuration drives server selection and longest-prefix location routing before a response handler is chosen." },
        { title: "CGI", description: "CGI execution constructs the required environment and is coordinated without stalling unrelated client connections." },
        { title: "Connection management", description: "Keep-alive, payload limits, and timeouts bound connection work and cleanup." },
        { title: "HTTP behavior", description: "Uploads, sessions, cookies, Range requests, and explicit error responses extend the core request path." },
      ],
    },
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
    coverImage: null,
    imageAlt: null,
    images: [],
    showcaseLabels: ["Nginx", "WordPress", "MariaDB", "Redis", "FTP", "Adminer", "Portainer"],
    caseStudy: {
      kind: "infrastructure",
      titleLines: ["Inception"],
      context: "Infrastructure / containerized services",
      architectureLabel: "02 / Service topology",
      architectureTitle: "A rebuildable stack with durable state.",
      architectureDescription: "The public edge, application runtime, database, cache, administration, and storage responsibilities are separated into explicit services.",
      architectureSteps: ["Client", "Nginx / TLS", "WordPress", "MariaDB"],
      architectureSupporting: ["Redis", "FTP", "Adminer", "Portainer", "Persistent volumes"],
      engineeringTitle: "Isolation with explicit dependencies.",
      engineering: [
        { title: "Service separation", description: "Purpose-built containers keep Nginx, WordPress, MariaDB, and supporting services independently understandable." },
        { title: "Public boundary", description: "Nginx terminates TLS and exposes the necessary public edge while application services remain on the internal network." },
        { title: "Durable state", description: "Named volumes separate persistent database and application data from replaceable containers." },
        { title: "Supporting services", description: "Redis, FTP, Adminer, and Portainer extend caching, access, administration, and inspection without collapsing service boundaries." },
      ],
    },
  },
];

export const otherProjects = ["Minishell", "Cub3D", "Philosophers", "push_swap", "pipex", "so_long", "fractol"];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
