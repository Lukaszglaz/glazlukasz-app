export interface ProjectsItem {
  id: number;
  title: string;
  category: string;
  desc: string;
  tech: string[];
  metrics: {
    speed: string;
    seo: string;
  };
  image: string;
  link: string;
  github: string;
}

export const projects: ProjectsItem[] = [
  {
    id: 1,
    title: "E-commerce Titan",
    category: "Aplikacje",
    desc: "Zaawansowany system sprzedażowy z dedykowanym panelem zarządzania. Skupienie na konwersji, bezpieczeństwie i błyskawicznym procesowaniu płatności.",
    tech: ["Next.js", "TypeScript", "Stripe"],
    metrics: { speed: "99", seo: "100" },
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Architect Portfolio",
    category: "Strony WWW",
    desc: "Wizytówka premium dla biura projektowego. Wykorzystuje zaawansowane animacje Framer Motion oraz dynamiczne filtrowanie galerii projektów.",
    tech: ["Framer", "React", "SCSS"],
    metrics: { speed: "98", seo: "96" },
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "SaaS Analytics",
    category: "UI/UX",
    desc: "Kompleksowy interfejs analityczny do monitorowania danych w czasie rzeczywistym. Czysty Dark Mode z naciskiem na czytelność wykresów.",
    tech: ["Figma", "Tailwind", "React"],
    metrics: { speed: "97", seo: "92" },
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200",
    link: "#",
    github: "#",
  },
];
