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
    title: "Strony Wizytówki",
    icon: "Monitor",
    shortDescription:
      "Nowoczesne strony typu One-Page | Multi-Page, które skutecznie budują Twój wizerunek w sieci.",
    fullDescription:
      "Tworzę przejrzyste i szybkie strony wizytówkowe, które od razu informują klienta o Twojej ofercie. Skupiam się na czystym designie i pełnej responsywności, aby strona wyglądała świetnie na każdym urządzeniu.",
    features: [
      "Responsive Web Design",
      "Szybki czas ładowania",
      "Certyfikat SSL",
    ],
  },
  {
    id: "sklepy-online",
    title: "Sklepy Internetowe",
    icon: "ShoppingBag",
    shortDescription:
      "Funkcjonalne platformy sprzedażowe, które pracują na Twój zysk przez całą dobę.",
    fullDescription:
      "Projektuję intuicyjne sklepy online, które ułatwiają zakupy. Integruję systemy płatności (Tpay/Stripe) i dbam o to, aby proces zamówienia był prosty, szybki i bezpieczny dla Twoich klientów.",
    features: [
      "Płatności online",
      "Zarządzanie produktami",
      "Bezpieczne zakupy",
    ],
  },
  {
    id: "aplikacje",
    title: "Aplikacje Webowe",
    icon: "Smartphone",
    shortDescription:
      "Dedykowane rozwiązania online automatyzujące procesy w Twojej firmie.",
    fullDescription:
      "Potrzebujesz czegoś więcej niż strony? Tworzę zaawansowane narzędzia – od systemów rezerwacji po panele administracyjne, które pomagają w codziennym zarządzaniu biznesem.",
    features: [
      "Systemy dedykowane",
      "Automatyzacja pracy",
      "Bezpieczeństwo danych",
    ],
  },

  {
    id: "seo",
    title: "Pozycjonowanie SEO",
    icon: "TrendingUp",
    shortDescription:
      "Zwiększam widoczność Twojej marki w Google, aby klienci sami Cię znajdowali.",
    fullDescription:
      "Dbam o techniczną optymalizację Twojej strony pod algorytmy wyszukiwarek. Dobieram odpowiednie słowa kluczowe i monitoruję pozycję, abyś systematycznie wyprzedzał konkurencję.",
    features: [
      "Audyt techniczny",
      "Analiza słów kluczowych",
      "Monitoring wyników",
    ],
  },
  {
    id: "tresci-copywriting",
    title: "Copywriting",
    icon: "Edit3",
    shortDescription:
      "Profesjonalne treści, które angażują użytkowników i sprzedają Twoje usługi.",
    fullDescription:
      "Pomagam ubrać Twoją ofertę w odpowiednie słowa. Piszę teksty na strony, opisy produktów oraz artykuły, które są przyjazne zarówno dla użytkowników, jak i wyszukiwarek Google.",
    features: [
      "Teksty sprzedażowe",
      "Korekta i redakcja",
      "Optymalizacja pod SEO",
    ],
  },
  {
    id: "grafika",
    title: "Oprawa Graficzna",
    icon: "Palette",
    shortDescription:
      "Spójny i nowoczesny design, który wyróżni Cię na tle konkurencji.",
    fullDescription:
      "Tworzę identyfikację wizualną, która zapada w pamięć. Od logotypów, przez layouty stron, aż po grafiki do mediów społecznościowych – dbam o to, by Twój biznes wyglądał profesjonalnie.",
    features: ["Logo i branding", "Design UI/UX", "Grafiki Social Media"],
  },

  {
    id: "hosting",
    title: "Hosting i Domena",
    icon: "Server",
    shortDescription:
      "Szybkie serwery NVMe i bezpieczne domeny – fundament stabilnej strony.",
    fullDescription:
      "W ramach współpracy oferuję miejsce na najszybszych serwerach Smarthost z technologią LiteSpeed. Zajmuję się pełną konfiguracją: od zakupu domeny po ustawienie firmowej poczty e-mail.",
    features: ["Dyski NVMe", "Poczta we własnej domenie", "Backupy 24h"],
  },
  {
    id: "wsparcie",
    title: "Wsparcie i Opieka",
    icon: "Headphones",
    shortDescription:
      "Stały nadzór nad Twoją stroną, abyś Ty mógł skupić się tylko na biznesie.",
    fullDescription:
      "Jako Twój partner techniczny biorę na siebie aktualizacje, monitoring bezpieczeństwa i drobne zmiany w treściach. Gwarantuję szybką reakcję i pomoc, gdy tylko jej potrzebujesz.",
    features: ["Regularne aktualizacje", "Szybki czas reakcji", "Monitoring"],
  },
  {
    id: "analityka",
    title: "Analityka i Dane",
    icon: "PieChart",
    shortDescription:
      "Raporty i analiza ruchu, dzięki którym poznasz zachowania swoich klientów.",
    fullDescription:
      "Wdrażam narzędzia analityczne (GA4), które pokazują, skąd przychodzą Twoi klienci i co robią na stronie. Dzięki tym danym możemy wspólnie podejmować lepsze decyzje biznesowe.",
    features: ["Konfiguracja GA4", "Śledzenie konwersji", "Miesięczne raporty"],
  },
];
