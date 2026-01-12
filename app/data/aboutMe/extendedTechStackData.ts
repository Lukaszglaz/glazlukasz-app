import { Laptop, Database, Cpu, Gauge } from "lucide-react";

export interface ExtendedTechStackItem {
  category: string;
  tools: string[];
  icon: React.ComponentType<any>;
}

export const extendedTechStack: ExtendedTechStackItem[] = [
  {
    category: "Frontend",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sass Modules",
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
    ],
    icon: Laptop,
  },
  {
    category: "Backend & DB",
    tools: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "phpMyAdmin",
    ],
    icon: Database,
  },
  {
    category: "Narzędzia & Workflow",
    tools: ["Figma", "Git", "Docker", "Vercel", "GitHub / GitLab"],
    icon: Cpu,
  },
  {
    category: "Wydajność & SEO",
    tools: [
      "Core Web Vitals",
      "Semantyczny HTML",
      "Optymalizacja obrazów",
      "Accessibility (a11y)",
    ],
    icon: Gauge,
  },
];
