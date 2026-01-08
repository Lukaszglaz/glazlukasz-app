export interface BenefitDataItem {
  stepNumber: number;
  title: string;
  description: string;
  variant: "primary" | "secondary" | "tertiary" | "quaternary";
}
export const benefitData = [
  {
    stepNumber: 1,
    title: "Ekspertyza, Która Gwarantuje Jakość",
    description:
      "Moje bogate doświadczenie i szeroka wiedza pozwalają mi zapewnić najwyższą jakość usług w obszarze projektowania i tworzenia innowacyjnych stron internetowych oraz zaawansowanych aplikacji internetowych.",
    variant: "primary",
  },
  {
    stepNumber: 2,
    title: "Indywidualne Dostosowanie do Celów",
    description:
      "Jesteś dla mnie najważniejszy. Dlatego dostosowuję podejście do Twoich konkretnych potrzeb i oczekiwań, zapewniając kompleksowe wsparcie i elastyczność na każdym etapie współpracy.",
    variant: "secondary",
  },
  {
    stepNumber: 3,
    title: "Pionierskie i Nowoczesne Rozwiązania",
    description:
      "Nieustannie poszukuję innowacyjnych rozwiązań i narzędzi, które pozwolą Ci być liderem w Twojej branży. Moje projekty przekraczają Twoje oczekiwania i podążają za dynamicznym rynkiem.",
    variant: "tertiary",
  },
  {
    stepNumber: 4,
    title: "Solidność Kodu i Skalowalność",
    description:
      "Stawiam na solidną strukturę kodu, która gwarantuje nie tylko płynne działanie strony, ale także łatwą skalowalność i możliwość dalszego, efektywnego rozwoju bez utraty wydajności.",
    variant: "quaternary",
  },
] as const;
