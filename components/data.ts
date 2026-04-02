import {
  Brain,
  Building2,
  Cloud,
  Cpu,
  Database,
  Globe,
  LineChart,
  Radar,
  Rocket,
  Server,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const navItems = [
  "home",
  "about",
  "services",
  "research",
  "products",
  "projects",
  "framework",
  "process",
  "technology",
  "contact",
] as const;

export const stats = [
  { value: "20+", label: "Capability domains" },
  { value: "AI + GIS", label: "Research-driven systems" },
  { value: "Cloud Native", label: "Production stack" },
  { value: "Global", label: "Institutional ambition" },
];

export type ServicePillar = {
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
};

export const servicePillars: ServicePillar[] = [
  {
    icon: Brain,
    title: "AI Systems & Applied Intelligence",
    desc: "Intelligent assistants, retrieval systems, workflow automation, evaluation pipelines, and practical AI solutions built for real operations.",
    points: ["LLM integration", "Knowledge systems", "Workflow automation", "Model evaluation"],
  },
  {
    icon: Globe,
    title: "Research Software Development",
    desc: "Software for environmental intelligence, social research, geospatial analysis, remote sensing, impact tracking, and evidence-driven decision systems.",
    points: ["Research platforms", "Field data systems", "Analytics dashboards", "Decision support tools"],
  },
  {
    icon: Cloud,
    title: "Cloud Platforms & Infrastructure",
    desc: "Fast, reliable, scalable backend systems, API layers, DevOps workflows, and cloud deployments designed for long-term growth.",
    points: ["FastAPI services", "Dockerized deployment", "CI/CD pipelines", "Secure hosting"],
  },
  {
    icon: Building2,
    title: "Institutional Digital Transformation",
    desc: "Custom portals, automation systems, reporting tools, and strategic software delivery for organizations, labs, NGOs, and enterprises.",
    points: ["Custom portals", "Operational systems", "Reporting automation", "Institutional workflows"],
  },
];

export const researchDomains = [
  {
    title: "Environmental Intelligence",
    text: "Climate, adaptation, sustainability, resilience, and environmental monitoring systems that translate research into action.",
  },
  {
    title: "Remote Sensing & Geospatial Systems",
    text: "Mapping platforms, GIS dashboards, satellite-data processing, and spatial intelligence interfaces for decision-makers.",
  },
  {
    title: "Social & Development Data",
    text: "Survey systems, community data workflows, impact measurement, and stakeholder-ready reporting pipelines.",
  },
  {
    title: "AI-Augmented Research Operations",
    text: "Automation for document analysis, synthesis, classification, retrieval, forecasting, and knowledge operations.",
  },
  {
    title: "Security & Resilient Infrastructure",
    text: "Secure architecture, data protection, role-based systems, observability, backup strategies, and operational reliability.",
  },
  {
    title: "Product Strategy & Emerging Systems",
    text: "Future-facing product design connecting research, software engineering, automation, and scalable intelligence platforms.",
  },
];

export const products = [
  {
    name: "SYNAPSE",
    tag: "Intelligence Core",
    desc: "A future-facing intelligence layer for knowledge retrieval, automation, reasoning support, and research-grade workflows.",
  },
  {
    name: "OMNIA",
    tag: "AI Operating Assistant",
    desc: "A personal and organizational assistant built for analysis, action, memory, and operational acceleration.",
  },
  {
    name: "NEXGRID",
    tag: "Cloud & Data Fabric",
    desc: "A modular digital backbone for applications, analytics pipelines, APIs, and resilient compute infrastructure.",
  },
  {
    name: "AUTOFORGE",
    tag: "Automation Engine",
    desc: "A workflow automation system for reports, forms, approvals, dashboards, integrations, and institutional process optimization.",
  },
];

export const projects = [
  {
    title: "Research Intelligence Platform",
    category: "Flagship Platform",
    summary: "A modular portal for publishing datasets, managing field inputs, tracking indicators, and generating real-time insights for research programs.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    title: "Geospatial Monitoring Dashboard",
    category: "Data & Mapping",
    summary: "A location-aware system for maps, remote sensing layers, trend analysis, environmental metrics, and executive dashboards.",
    stack: ["React", "Python", "GIS", "Cloud Storage"],
  },
  {
    title: "AI Knowledge Workspace",
    category: "Applied AI",
    summary: "A retrieval-powered assistant for documents, reports, proposals, policies, and internal knowledge discovery.",
    stack: ["LLM APIs", "Vector DB", "FastAPI", "Redis"],
  },
  {
    title: "Institutional Reporting System",
    category: "Automation",
    summary: "An automated platform for collecting metrics, structuring narratives, generating reports, and reducing operational friction.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Charts"],
  },
  {
    title: "Program Impact Analytics Suite",
    category: "Decision Support",
    summary: "A unified analytics layer for social, environmental, and organizational program evaluation with stakeholder-ready visual outputs.",
    stack: ["Python", "Dashboards", "Data Pipelines", "AWS"],
  },
  {
    title: "Digital Proposal & CRM Flow",
    category: "Growth Systems",
    summary: "A lead-to-proposal workflow connecting client onboarding, project scoping, delivery pipelines, and automated communication.",
    stack: ["Forms", "Email", "Automation", "Admin Panel"],
  },
];

export const frameworkLetters = [
  ["C", "Compute Evolution", "Scalable systems and resilient digital infrastructure."],
  ["I", "Intelligence Layer", "Unified AI and decision-support capability across domains."],
  ["V", "Virtual Autonomy", "Automation that reduces friction and multiplies execution speed."],
  ["I", "Integration", "Seamless connection between people, systems, data, and workflows."],
  ["L", "Learning Systems", "Continuous improvement through analytics, feedback, and iteration."],
  ["I", "Infrastructure", "Cloud-native architecture designed for stability and scale."],
  ["Z", "Zero Friction", "Operational simplicity, elegant UX, and process acceleration."],
  ["E", "Expansion", "A platform mindset built to evolve into bigger products and markets."],
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    text: "Define goals, users, data flows, system constraints, and measurable outcomes. Align research, business, and operational priorities.",
  },
  {
    step: "02",
    title: "Architect",
    text: "Design the experience, technical stack, data model, cloud structure, and delivery roadmap with speed and maintainability in mind.",
  },
  {
    step: "03",
    title: "Build",
    text: "Develop the product using production-ready components, API-driven architecture, secure deployment patterns, and scalable interfaces.",
  },
  {
    step: "04",
    title: "Deploy",
    text: "Launch with operational readiness, analytics, monitoring, role-based access, and structured documentation.",
  },
  {
    step: "05",
    title: "Evolve",
    text: "Improve with new modules, AI augmentation, automation loops, performance optimization, and product expansion strategy.",
  },
];

export const techStack = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "Motion"],
    icon: Sparkles,
  },
  {
    title: "Backend",
    items: ["FastAPI", "Node.js", "REST APIs", "Background Jobs"],
    icon: Server,
  },
  {
    title: "Data Layer",
    items: ["PostgreSQL", "Redis", "Vector Database", "Object Storage"],
    icon: Database,
  },
  {
    title: "Infra & Ops",
    items: ["Docker", "Nginx", "AWS / Vercel", "CI/CD Pipelines"],
    icon: Shield,
  },
];

export const faqs = [
  {
    q: "What kind of clients is Cynexsys built for?",
    a: "Research organizations, labs, NGOs, development programs, modern startups, and institutions that need more than a brochure website — they need real systems.",
  },
  {
    q: "Can Cynexsys handle both services and product development?",
    a: "Yes. The model is intentionally dual: premium service delivery for current revenue, and platform development for long-term scale.",
  },
  {
    q: "Is this site ready for GitHub deployment?",
    a: "Yes. This structure is ready to be pushed as a Next.js app, deployed to Vercel, and connected to your domain later.",
  },
];

export const matrix = [
  [Cpu, "AI Systems", "Assistants, RAG, automation, evaluations"],
  [Radar, "Research Tech", "GIS, climate, social data, insight tools"],
  [Database, "Platform Engineering", "APIs, dashboards, data layers, admin systems"],
  [Shield, "Infrastructure", "Cloud, deployment, security, observability"],
] as const;

export const whyItWorks = [
  "Bold hero positioning with premium, futuristic aesthetics",
  "Large service and project sections so the company feels established",
  "Research-aligned credibility for labs, NGOs, and institutions",
  "Future product layer to support long-term investor storytelling",
  "Easy to adapt into a real Next.js GitHub deployment",
];

export const contactInfo = {
  email: "cynexsysites@gmail.com",
  addressLine1: "Queensland 4006",
  addressLine2: "Level 1, 1024 Ann Street, Fortitude Valley QLD 4006",
};

export const footerBlurb =
  "Built to launch on GitHub now and evolve into a premium production website with your future domain, backend forms, case studies, and product ecosystem.";

export const metadataSummary =
  "Cynexsys is a future-facing research and technology company delivering AI systems, research software, institutional platforms, cloud-native infrastructure, and ambitious digital products.";

export const pageHighlights = {
  heroEyebrow: "Future-ready research, software, and intelligence systems",
  heroTitle:
    "Building digital systems that feel years ahead — and work in the real world today.",
  heroDescription:
    "Cynexsys is a future-facing research and technology company founded by Khaled Md Prottoy — delivering AI systems, research software, institutional platforms, cloud-native infrastructure, and ambitious digital products for organizations that need both credibility and innovation.",
};

export const productIcon = Rocket;
export const projectIcon = LineChart;
