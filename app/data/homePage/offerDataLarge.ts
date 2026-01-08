import { Handshake, Layout, LucideIcon, Palette, Zap } from "lucide-react";

export interface OfferDataLargeItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const offerDataLarge = [
  {
    title: "Strony Internetowe Skoncentrowane na Wyniku",
    description:
      "Tworzę witryny, które nie tylko **wyglądają świetnie**, ale są strategicznie zaprojektowane, aby **działać doskonale** – zoptymalizowane pod kątem szybkiej konwersji i intuicyjnej obsługi.",
    icon: Layout,
  },
  {
    title: "Profesjonalne Projektowanie Wizualne (UI/UX)",
    description:
      "Zajmuję się projektowaniem każdego detalu, dbając, by Twoja strona była **estetyczna, funkcjonalna i przyjazna** dla użytkowników. Zadbaj o to, by przyciągała uwagę od pierwszego wejrzenia.",
    icon: Palette,
  },
  {
    title: "Spójny Branding i Identyfikacja Wizualna",
    description:
      "Buduj **zaufanie i lojalność** klientów. Oferuję wsparcie w kreowaniu spójnego i przemyślanego **brandingu**, który odzwierciedla wartości i osobowość Twojego biznesu.",
    icon: Zap,
  },
  {
    title: "Strategiczne Konsultacje Projektowe",
    description:
      "Potrzebujesz pewności co do designu lub **strategii wizualnej**? Chętnie podzielę się wiedzą i doświadczeniem, aby wspólnie znaleźć **najlepsze i najbardziej efektywne rozwiązania** dla Twojego projektu.",
    icon: Handshake,
  },
];
