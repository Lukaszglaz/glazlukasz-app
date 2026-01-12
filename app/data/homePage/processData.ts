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
      "Zaczynamy od głębokiej analizy Twoich celów biznesowych oraz potrzeb przyszłych użytkowników. Weryfikuję pomysły i szukam unikalnych rozwiązań, które pozwolą Twojemu projektowi skutecznie wybić się na tle konkurencji.",
    variant: "primary",
    heightVariant: "mediumMax",
  },
  {
    stepNumber: 2,
    title: "Projektowanie UI/UX i Wizerunku",
    description:
      "Ożywiam Twoją wizję za pomocą nowoczesnego designu i przemyślanej narracji wizualnej. Tworzę interfejsy, które są nie tylko estetyczne, ale przede wszystkim intuicyjne, budując zaufanie i lojalność Twoich klientów.",
    variant: "secondary",
    heightVariant: "medium",
  },
  {
    stepNumber: 3,
    title: "Solidne Wdrożenie i Czysty Kod",
    description:
      "Przenoszę projekt w świat najnowszych technologii, dbając o najwyższą wydajność i bezpieczeństwo. Tworzę solidną, skalowalną strukturę kodu, która gwarantuje błyskawiczne działanie strony na każdym urządzeniu.",
    variant: "tertiary",
    heightVariant: "low",
  },
  {
    stepNumber: 4,
    title: "Optymalizacja i Stałe Wsparcie",
    description:
      "Dostarczam gotowy produkt, który jest w pełni zoptymalizowany pod kątem konwersji i wyników. Po wdrożeniu nie zostajesz sam – oferuję kompleksową opiekę techniczną i pomoc w dalszym, dynamicznym rozwoju projektu.",
    variant: "quaternary",
    heightVariant: "veryLow",
  },
] as const;
