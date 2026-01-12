export interface PlanItem {
  id: string;
  title: string;
  priceMonthly: number | null;
  priceYearly: number | null;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const PLANS: PlanItem[] = [
  {
    id: "start",
    title: "Na dobry początek",
    priceMonthly: 79,
    priceYearly: 790,
    description:
      "Profesjonalna wizytówka Twojej firmy z pełnym wsparciem technicznym.",
    features: [
      "Strona One-Page",
      "Hosting NVMe (Smarthost)",
      "Certyfikat SSL",
      "1 skrzynka e-mail",
      "Podstawowe SEO",
    ],
  },
  {
    id: "fundament",
    title: "Solidny fundament",
    priceMonthly: 149,
    priceYearly: 1490,
    description:
      "Rozbudowana witryna i zaawansowana analityka dla rosnącego biznesu.",
    features: [
      "Strona do 5 podstron",
      "Hosting & SSL",
      "Firmowy Copywriting",
      "Analityka GA4",
      "Opieka techniczna",
    ],
    isPopular: true,
  },
  {
    id: "wsparcie",
    title: "Pełne wsparcie",
    priceMonthly: 249,
    priceYearly: 2490,
    description:
      "Kompleksowe rozwiązanie e-commerce lub dedykowana aplikacja webowa.",
    features: [
      "Sklep lub App",
      "Priorytetowe wsparcie",
      "Pełne SEO & Raporty",
      "Integracje API",
      "Automatyzacje",
    ],
  },
  {
    id: "custom",
    title: "Indywidualny",
    priceMonthly: null,
    priceYearly: null,
    description:
      "Projekty niestandardowe wymagające dedykowanych rozwiązań IT.",
    features: [
      "Systemy dedykowane",
      "Unikalny Design UI/UX",
      "Konsultacje 1-na-1",
      "Dowolna skala",
    ],
  },
];
