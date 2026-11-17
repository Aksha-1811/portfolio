export type Project = {
  title: string;
  kind: string;
  oneLiner: string;
  stack: string[]; // only technologies you have told me were used
  accent: string;
  liveUrl?: string;
  repoUrl?: string; // only add links you have checked
  highlights?: string[];
  // Optional. The card only shows what you fill in, so nothing is invented.
  timeSpent?: string; // be exact and honest, e.g. "About 6 hours, built with Claude Code"
  decisions?: string[]; // two design or technical decisions, in your own words
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Spec Lens",
    kind: "Concept · Nov 2026",
    oneLiner:
      "A requirements-review interface for RFQs: match each requirement against a product catalogue, then accept or reject with keyboard shortcuts.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "var(--purple)",
    liveUrl: "https://speclens-eta.vercel.app/",
    repoUrl: "https://github.com/Aksha-1811/speclens",
    note: "Independent concept built with synthetic data. Includes a small design-system page.",
    // timeSpent: "",
    // decisions: ["", ""],
  },
  {
    title: "Energy Trade-Off Dashboard",
    kind: "MSc project",
    oneLiner:
      "Interactive dashboard analysing residential energy consumption across European households, built from my MSc thesis.",
    stack: ["React", "TypeScript", "D3.js", "Chart.js", "Tailwind CSS", "FastAPI", "Python", "Ridge regression", "OPSD dataset", "Vercel"],
    accent: "var(--green)",
    liveUrl: "https://energy-tradeoff-dashboard.vercel.app/",
    highlights: [
      "Modular React and TypeScript front end with custom D3.js charts and live FastAPI integration.",
      "Descriptive and predictive analysis on the OPSD dataset, a real German open energy dataset.",
      "Refactored a 900-line monolith into a 19-file modular structure and fixed a stale-closure bug in the useEnergyData hook.",
    ],
  },
  {
    title: "FinFlow",
    kind: "Product template",
    oneLiner: "A fintech SaaS dashboard built with Next.js, also sold as a source-code template.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Lucide icons", "Claude Code", "Vercel"],
    accent: "var(--purple)",
    liveUrl: "https://finflow-dashboard-lilac.vercel.app/",
  },
  {
    title: "Clarivo",
    kind: "Landing page",
    oneLiner: "An AI SaaS landing page built with Next.js and deployed on Vercel.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Lucide icons", "Claude Code", "Vercel"],
    accent: "var(--green)",
    liveUrl: "https://ai-saas-landing-page-henna.vercel.app/",
  },
  {
    title: "MediSync AI",
    kind: "Landing page · concept",
    oneLiner: "A landing page for an AI-powered patient records (EHR) concept, with all sections complete.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Lucide icons", "Claude Code", "Vercel"],
    accent: "var(--purple)",
    liveUrl: "https://medisync-ai-self.vercel.app/",
    repoUrl: "https://github.com/Aksha-1811/medisync-ai",
  },
  {
    title: "Vehicle Detection System",
    kind: "UT Austin capstone",
    oneLiner:
      "Full-stack road object detection app: upload an image and see detections with bounding boxes and confidence scores.",
    stack: ["Python", "React", "FastAPI", "YOLO"],
    accent: "var(--purple)",
    highlights: [
      "Drag-and-drop upload with real-time bounding box overlay, backed by a FastAPI endpoint running a pretrained YOLO model.",
      "Group filtering (vehicles, people, animals) with colour-coded boxes, scaling model coordinates to the displayed image size.",
    ],
  },
];
