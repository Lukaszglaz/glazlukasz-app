import {
  LucideIcon,
  PiggyBank,
  Rocket,
  Shield,
  Timer,
  Users,
  Zap,
} from "lucide-react";

export interface OfferItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const offerData: OfferItem[] = [
  {
    title: "Szanuję Twój czas",
    description:
      "Działam według planu, którego pilnuję tak samo jak Ty swojego biznesu. Zawsze dowożę gotowy projekt bez opóźnień.",
    icon: Rocket,
  },
  {
    title: "Nowoczesne rozwiązania",
    description:
      "Wybieram technologie, które są szybkie i bezpieczne. Dostajesz narzędzie, które realnie wspiera rozwój Twojej firmy.",
    icon: Zap,
  },
  {
    title: "Stałe wsparcie",
    description:
      "Nie znikam po oddaniu projektu. Jestem pod telefonem, aby dbać o technologię i pomagać Ci w dalszym rozwoju strony.",
    icon: Users,
  },
  {
    title: "Bezpieczeństwo danych",
    description:
      "Stosuję sprawdzone zabezpieczenia, abyś Ty i Twoi klienci nie musieli martwić się o włamania czy utratę informacji.",
    icon: Shield,
  },
  {
    title: "Jasna komunikacja",
    description:
      "Rozmawiamy konkretnie i bez żargonu. Wyjaśnię Ci każdy etap prac prostymi słowami, abyś czuł się pewnie i spokojnie.",
    icon: Timer,
  },
  {
    title: "Uczciwa wycena",
    description:
      "Znasz koszty od początku. Zero ukrytych opłat czy niespodzianek, co pozwala Ci precyzyjnie planować wydatki firmy.",
    icon: PiggyBank,
  },
];
