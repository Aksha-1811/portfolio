// Everything personal lives here. Edit this file, not the components.

export const site = {
  content: "Personal Portfolio",
  name: "Akshaya Balakrishnan",
  role: "Software engineer · Frontend & full-stack",
  headline: "Frontend engineer building data-heavy interfaces in React and TypeScript",
  // TODO: rewrite in your own words. Keep it to facts you can defend in an interview.
  intro:
    "Based in Munich. I build dashboards and product UIs with React, TypeScript and Next.js, with a focus on clear states, accessible components and readable code.",
  email: "akshaya.b1811@gmail.com",
  linkedin: "https://www.linkedin.com/in/akshaya-balakrishnan",
  github: "https://github.com/Aksha-1811",
  // After exporting your resume PDF, put it in /public and set e.g. "/Akshaya_Balakrishnan_CV.pdf"
  cv: "" as string,
  // Hero clip: export a short loop from Google Flow, put it in /public, e.g. "/hero.mp4". Poster is a still frame.
  heroVideo: "" as string,
  heroPoster: "" as string,
};

export type Job = {
  role: string;
  org: string;
  place: string;
  dates: string;
  bullets: string[];
  accent: string;
};

// Taken from the resume (FlowCV export, 2026-11-16).
export const experience: Job[] = [
  {
    role: "AI Training Engineer",
    org: "Mercor.io Corporation",
    place: "US (Remote)",
    dates: "10/2026 to Present",
    accent: "var(--purple)",
    bullets: [
      "Matched by Mercor's AI talent platform based on frontend engineering expertise.",
      "Recording and narrating expert frontend development workflows (React, TypeScript, component architecture) to generate high-quality AI training datasets.",
      "Demonstrating real-world frontend coding patterns and decision-making processes for LLM training.",
    ],
  },
  {
    role: "Independent Frontend/AI Engineer",
    org: "Mindrift AI & Outlier AI",
    place: "US (Remote)",
    dates: "03/2025 to 12/2025",
    accent: "var(--green)",
    bullets: [
      "QA AI Trainer at Mindrift AI: evaluated agentic AI systems through scenario design, code review and refactoring for TypeScript-based applications.",
      "Applied RLHF methodology at Outlier AI to evaluate 100+ AI-generated responses across coding, reasoning and frontend tasks, identifying errors and improving model accuracy and consistency.",
    ],
  },
  {
    role: "Frontend Focused Full Stack Developer",
    org: "Tradevest GmbH",
    place: "Munich, Germany",
    dates: "09/2022 to 11/2024",
    accent: "var(--purple)",
    bullets: [
      "Joined as the first frontend developer at a BaFin-regulated asset servicing bank serving institutional clients including asset managers, fund managers and neo-brokers.",
      "Built two landing pages: tradevest.ai (Next.js, Strapi CMS, MUI, 20+ dynamic sections) and wawex.ai (React, TailwindCSS), in a Turborepo monorepo with GitLab CI/CD.",
      "Contributed to the B2B partner dashboard: transaction history, customer overview, personal info and asset management pages in React 18, TypeScript and MUI v5, translating Figma wireframes into production-ready interfaces with a designer.",
    ],
  },
  {
    role: "Digital Specialist Engineer",
    org: "Infosys Ltd",
    place: "Chennai, India",
    dates: "09/2020 to 04/2022",
    accent: "var(--green)",
    bullets: [
      "Designed and implemented a customer support chatbot with AWS Lex and Lambda for a North American automobile manufacturer, automating query handling and reducing manual support workload.",
      "Developed production-ready frontend pages for a Vehicle Management System (inventory, fleet tracking) from Figma wireframes in Angular.",
      "Completed MEAN stack full-stack training, gaining foundational Node.js and Express experience.",
    ],
  },
];

export const education = [
  { title: "MSc Data Science", org: "Deakin University (Remote)", dates: "02/2025 to 02/2026", detail: "Distinction (76%)" },
  { title: "PG Program in AI & Machine Learning", org: "University of Texas at Austin (Remote)", dates: "12/2023 to 12/2024", detail: "CGPA 4.17 / 4.33" },
  { title: "BTech Computer Science and Engineering", org: "Vellore Institute of Technology, India", dates: "05/2016 to 04/2020", detail: "CGPA 8.84 / 10" },
];

export const skillGroups = [
  { name: "Frontend", color: "var(--purple)", items: ["React", "Next.js", "Redux", "Angular", "TypeScript", "JavaScript", "MUI", "Tailwind CSS", "D3.js", "Chart.js"] },
  { name: "Backend & integration", color: "var(--green)", items: ["REST APIs", "FastAPI", "Strapi CMS", "Python", "SQL", "AWS Lex, Lambda & Cognito"] },
  { name: "Data & AI", color: "var(--purple)", items: ["LLMs", "RLHF", "Predictive modelling", "Prompt engineering"] },
  { name: "Tools & workflow", color: "var(--green)", items: ["Git, GitHub", "Docker", "GitLab CI/CD & Jenkins", "GitHub Copilot, Claude Code"] },
];
