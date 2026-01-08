export interface servicesDataItem {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
}

export const servicesData: servicesDataItem[] = [
  {
    id: "strony-www",
    title: "Strony WWW",
    icon: "Monitor",
    shortDescription:
      "Tworzę nowoczesne i responsywne strony internetowe, które stają się Twoją najlepszą wizytówką w sieci.",
    fullDescription:
      "Projektuję witryny skrojone pod Twoje potrzeby – od prostych stron wizytówkowych po rozbudowane portale. Skupiam się na szybkości działania, intuicyjnej nawigacji (UX) oraz pełnej responsywności.",
    features: [
      "Projektowanie UI/UX",
      "Responsywność",
      "Optymalizacja szybkości",
    ],
  },
  {
    id: "seo",
    title: "Pozycjonowanie SEO",
    icon: "TrendingUp",
    shortDescription:
      "Zwiększam widoczność Twojej marki w wyszukiwarkach, przyciągając realnych klientów.",
    fullDescription:
      "SEO to nie tylko słowa kluczowe. To kompleksowa optymalizacja techniczna i treściowa, która pozwoli Ci wyprzedzić konkurencję w Google i zbudować trwały autorytet strony.",
    features: ["Audyt techniczny", "Link Building", "Analiza słów kluczowych"],
  },
  {
    id: "hosting",
    title: "Hosting i Domeny",
    icon: "Server",
    shortDescription:
      "Zapewniam stabilne fundamenty dla Twojego biznesu: niezawodny hosting i bezpieczne domeny.",
    fullDescription:
      "Oferuję pomoc w wyborze i konfiguracji serwerów oraz rejestracji domen. Dbamy o to, aby Twoja strona była dostępna 24/7 i posiadała certyfikat SSL.",
    features: ["Certyfikat SSL", "Backup 24h", "Wsparcie techniczne"],
  },
  {
    id: "aplikacje",
    title: "Aplikacje Internetowe",
    icon: "Smartphone",
    shortDescription:
      "Tworzę dedykowane narzędzia online, które automatyzują procesy i rozwijają Twój biznes.",
    fullDescription:
      "Projektuję i wdrażam zaawansowane aplikacje webowe dostosowane do specyfiki Twojej firmy – od systemów rezerwacji po panele zarządzania danymi.",
    features: ["Systemy dedykowane", "Automatyzacja", "Bezpieczeństwo danych"],
  },
  {
    id: "bazy-danych",
    title: "Bazy danych i E-mailing",
    icon: "Mail",
    shortDescription:
      "Skuteczne zarządzanie danymi i profesjonalne kampanie mailingowe w jednym miejscu.",
    fullDescription:
      "Pomagam uporządkować informacje dzięki wydajnym bazom danych oraz wdrażam systemy e-mailingowe do budowania relacji z klientami.",
    features: ["Kampanie Newsletter", "Zarządzanie bazami", "Analiza danych"],
  },
  {
    id: "grafika",
    title: "Oprawa graficzna",
    icon: "Palette",
    shortDescription:
      "Buduję spójny i profesjonalny wizerunek Twojej marki, który przyciąga wzrok.",
    fullDescription:
      "Tworzę design, który sprzedaje. Od nowoczesnych layoutów stron, przez logotypy, aż po materiały promocyjne i identyfikację wizualna.",
    features: ["Logotypy", "Identyfikacja wizualna", "Materiały Social Media"],
  },
  {
    id: "wsparcie",
    title: "Wsparcie techniczne",
    icon: "Headphones",
    shortDescription:
      "Kompleksowa opieka nad Twoimi projektami, abyś mógł skupić się na rozwoju firmy.",
    fullDescription:
      "Szybka pomoc w nagłych wypadkach, regularne aktualizacje systemów oraz stały monitoring bezpieczeństwa Twojej infrastruktury IT.",
    features: ["Monitoring 24/7", "Aktualizacje", "Szybka reakcja"],
  },
];
