export interface ProcessDataItem {
  stepNumber: number;
  title: string;
  description: string;
  variant: "primary" | "secondary" | "tertiary" | "quaternary";
  heightVariant: "veryLow" | "low" | "medium" | "mediumMax";
}
export const processData: ProcessDataItem[] = [
  {
    stepNumber: 1,
    title: "Strategia i Weryfikacja Koncepcji",
    description:
      "Rozpoczynamy od głębokiej analizy celu i weryfikacji pomysłów. Odkrywam unikalne perspektywy i podejścia, które strategicznie wzmocnią Twój projekt na rynku.",
    variant: "primary",
    heightVariant: "mediumMax",
  },
  {
    stepNumber: 2,
    title: "Projektowanie UI/UX i Wyróżnianie Marki",
    description:
      "Ożywiam Twoją wizję przy pomocy kreatywnego designu i wizualnej narracji. Tworzę dzieła, które nie tylko oddają wartości Twojej marki, ale angażują odbiorców i wybijają się na tle konkurencji.",
    variant: "secondary",
    heightVariant: "medium",
  },
  {
    stepNumber: 3,
    title: "Skalowalne Wdrożenie i Solidność Kodu",
    description:
      "Wykorzystuję najnowsze technologie do przeniesienia projektu na nowy poziom. Zapewniam zaawansowane narzędzia, tworząc interaktywne efekty i wydajną, skalowalną strukturę kodu.",
    variant: "tertiary",
    heightVariant: "low",
  },
  {
    stepNumber: 4,
    title: "Optymalizacja, Wdrożenie i Stałe Wsparcie",
    description:
      "Dokładnie analizuję i dopasowuję projekt do Twoich oczekiwań. Otrzymujesz gotową stronę WWW/aplikację, a także kompleksowe wsparcie techniczne i opiekę po wdrożeniu.",
    variant: "quaternary",
    heightVariant: "veryLow",
  },
] as const;
