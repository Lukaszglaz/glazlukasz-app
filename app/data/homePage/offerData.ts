import {
  LucideIcon,
  PiggyBank,
  Rocket,
  Shield,
  Timer,
  Users,
  Zap,
} from "lucide-react";

export interface offerItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const offerData: offerItem[] = [
  {
    title: "Szybka Realizacja",
    description:
      "Twoja strona gotowa w mgnieniu oka dzięki efektywnemu procesowi tworzenia.",
    icon: Rocket,
  },
  {
    title: "Innowacyjne Rozwiązania",
    description:
      "Wykorzystuję najnowsze technologie, aby Twoja strona była nowoczesna i funkcjonalna.",
    icon: Zap,
  },
  {
    title: "Kompleksowe Wsparcie",
    description:
      "Jestem zawsze gotów, aby pomóc Ci w razie potrzeby i zapewnić wsparcie techniczne.",
    icon: Users,
  },
  {
    title: "Bezpieczeństwo i Prywatność",
    description:
      "Twoje dane są chronione dzięki zaawansowanym środkom bezpieczeństwa.",
    icon: Shield,
  },
  {
    title: "Profesjonalna Obsługa",
    description:
      "Zapewniam pełne wsparcie od planowania po wdrożenie i utrzymanie Twojej strony.",
    icon: Timer,
  },
  {
    title: "Transparentność Kosztów",
    description:
      "Jasna i czytelna wycena bez ukrytych opłat, abyś wiedział, za co płacisz.",
    icon: PiggyBank,
  },
];
