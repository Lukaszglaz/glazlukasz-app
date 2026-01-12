export interface WorkProcessItem {
  step: string;
  title: string;
  desc: string;
}
export const workProcess: WorkProcessItem[] = [
  {
    step: "01",
    title: "Discovery",
    desc: "Analiza Twoich celów biznesowych i potrzeb użytkowników.",
  },
  {
    step: "02",
    title: "Strategy & UI",
    desc: "Projektowanie architektury informacji i unikalnego designu.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Budowa aplikacji w najnowszych technologiach z dbałością o SEO.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "Wdrożenie, optymalizacja i stała opieka techniczna.",
  },
];
