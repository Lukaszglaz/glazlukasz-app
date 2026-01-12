import { Code2, Gauge, Rocket, Shield } from "lucide-react";

export interface StatItem {
  label: string;
  value: string;
  icon: typeof Code2;
}

export const stats: StatItem[] = [
  {
    label: "Doświadczenia w IT",
    value: "2+ lata",
    icon: Code2,
  },
  {
    label: "Zorientowanie na cel",
    value: "100%",
    icon: Rocket,
  },
  {
    label: "Czysty Kod & SEO",
    value: "Standard",
    icon: Gauge,
  },
  {
    label: "Pełne Wsparcie",
    value: "Gwarancja",
    icon: Shield,
  },
];
