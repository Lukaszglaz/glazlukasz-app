import {
  MessageSquare,
  FileSearch,
  ShieldCheck,
  Lock,
  Zap,
  Scale,
  LucideIcon,
} from "lucide-react";

export interface WithdrawalStepItem {
  icon: LucideIcon;
  label: string;
  val: string;
  sub: string;
  highlight?: boolean;
}

export interface WithdrawalFeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WithdrawalSectionItem {
  id: string;
  group: string;
  desc: string;
  fields: string[];
}

export const withdrawalSteps: WithdrawalStepItem[] = [
  {
    icon: MessageSquare,
    label: "Krok 01",
    val: "Zgłoszenie",
    sub: "Wyślij e-mail na kontakt@glazlukasz.pl z informacją o chęci rezygnacji.",
  },
  {
    icon: FileSearch,
    label: "Krok 02",
    val: "Weryfikacja",
    sub: "Analizujemy stan prac i poniesione koszty. Otrzymasz decyzję oraz dane.",
  },
  {
    icon: ShieldCheck,
    label: "Krok 03",
    val: "Finalizacja",
    sub: "Po akceptacji kosztów i odesłaniu dokumentu, dokonujemy zwrotu środków.",
    highlight: true,
  },
];

export const withdrawalFeatures: WithdrawalFeatureItem[] = [
  {
    icon: Lock,
    title: "Ochrona",
    description: "Dane adresowe przekazywane po weryfikacji mailowej.",
  },
  {
    icon: Zap,
    title: "Szybkość",
    description: "Wstrzymanie prac następuje natychmiast po zgłoszeniu.",
  },
  {
    icon: Scale,
    title: "Prawo",
    description: "Zgodność z ustawą o prawach konsumenta (UE).",
  },
  {
    icon: ShieldCheck,
    title: "Bezpieczeństwo",
    description: "Pełna dokumentacja kosztów i roboczogodzin.",
  },
];

export const withdrawalSectionsData: WithdrawalSectionItem[] = [
  {
    id: "01",
    group: "DANE KONSUMENTA",
    desc: "IDENTYFIKACJA OSOBY ODSTĘPUJĄCEJ",
    fields: [
      "Imię i Nazwisko",
      "Pesel (wymagany do rozliczenia kosztów)",
      "Adres zamieszkania",
      "Numer telefonu",
      "E-mail kontaktowy",
    ],
  },
  {
    id: "02",
    group: "PRZEDMIOT UMOWY",
    desc: "DANE DOTYCZĄCE ZAMÓWIENIA",
    fields: [
      "Numer zamówienia / umowy",
      "Data zawarcia umowy",
      "Nazwa usługi / produktu",
    ],
  },
  {
    id: "03",
    group: "OŚWIADCZENIA",
    desc: "FORMALNA ZGODA NA ROZLICZENIE",
    fields: [
      "Oświadczenie o odstąpieniu",
      "Zgoda na potrącenie nakładów pracy",
      "Numer konta do zwrotu (IBAN)",
    ],
  },
];
