import { Handshake, Layout, LucideIcon, Palette, Zap } from "lucide-react";

export interface OfferDataLargeItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const offerDataLarge: OfferDataLargeItem[] = [
  {
    title: "Skuteczne strony internetowe",
    description:
      "Projektuję witryny, które nie tylko świetnie wyglądają, ale przede wszystkim zarabiają. Każdy element planuję tak, aby ułatwić Twoim klientom kontakt i zakup.",
    icon: Layout,
  },
  {
    title: "Intuicyjny design UI/UX",
    description:
      "Dbam o to, by korzystanie z Twojej strony było czystą przyjemnością. Tworzę estetyczne i proste w obsłudze interfejsy, w których każdy użytkownik od razu się odnajdzie.",
    icon: Palette,
  },
  {
    title: "Wyrazisty wizerunek marki",
    description:
      "Pomagam zbudować zaufanie dzięki spójnej identyfikacji wizualnej. Tworzę profesjonalny branding, który wyróżni Twój biznes na tle konkurencji i zapadnie w pamięć.",
    icon: Zap,
  },
  {
    title: "Wsparcie i konsultacje",
    description:
      "Nie musisz znać się na wszystkim. Dzielę się wiedzą i wspólnie wybieramy rozwiązania, które są najbardziej opłacalne dla Twojego projektu na każdym jego etapie.",
    icon: Handshake,
  },
];
