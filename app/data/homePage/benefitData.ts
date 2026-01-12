export interface BenefitDataItem {
  stepNumber: number;
  title: string;
  description: string;
  variant: "primary" | "secondary" | "tertiary" | "quaternary";
}
export const benefitData: BenefitDataItem[] = [
  {
    stepNumber: 1,
    title: "Ekspercka wiedza i jakość",
    description:
      "Wykorzystuję lata doświadczenia, aby dostarczać Ci produkty najwyższej klasy. Tworzę aplikacje, które są stabilne i dopracowane w każdym najmniejszym detalu.",
    variant: "primary",
  },
  {
    stepNumber: 2,
    title: "Podejście dostosowane pod Ciebie",
    description:
      "Twoje cele są dla mnie priorytetem. Dopasowuję technologię do Twoich potrzeb, zapewniając pełną elastyczność i wsparcie na każdym etapie wspólnej pracy.",
    variant: "secondary",
  },
  {
    stepNumber: 3,
    title: "Nowoczesność w standardzie",
    description:
      "Stosuję narzędzia, które dają Ci przewagę nad konkurencją. Moje projekty są zawsze aktualne i gotowe na zmiany, co pozwala na dynamiczny wzrost Twojego biznesu.",
    variant: "tertiary",
  },
  {
    stepNumber: 4,
    title: "Czysty kod i skalowalność",
    description:
      "Buduję solidny fundament, który gwarantuje płynne działanie strony. Dzięki czystej strukturze, Twój serwis może rosnąć bez żadnej utraty swojej wydajności.",
    variant: "quaternary",
  },
] as const;
