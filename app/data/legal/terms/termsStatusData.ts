export interface TermsStatusItem {
  category: string;
  details: {
    label: string;
    content: string;
    isLarge?: boolean;
    isUppercase?: boolean;
  }[];
  highlight?: boolean;
}

export const termsStatusData: TermsStatusItem[] = [
  {
    category: "Podmiot",
    highlight: true,
    details: [
      {
        label: "Usługodawca",
        content:
          "Łukasz Głaz. Działalność nierejestrowana (art. 5 ust. 1 ustawy Prawo przedsiębiorców), marka glazlukasz.pl.",
        isLarge: true,
      },
      {
        label: "System Rozliczeń",
        content:
          "Cena końcowa w ofercie. Faktury bez VAT (zwolnienie na podst. art. 113 ust. 1 i 9 ustawy o VAT).",
      },
    ],
  },
  {
    category: "Lokalizacja",
    details: [
      {
        label: "Siedziba",
        content:
          "Lublin, Polska. Dane do dokumentacji księgowej podawane są bezpośrednio na dokumentach sprzedaży.",
        isLarge: true,
        isUppercase: true,
      },
      {
        label: "Prywatność",
        content:
          "Pełny adres korespondencyjny udostępniany wyłącznie w procesie sformalizowanej komunikacji prawnej.",
      },
    ],
  },
  {
    category: "Obsługa & Kontakt",
    highlight: true,
    details: [
      {
        label: "Kanał Oficjalny",
        content: "kontakt@glazlukasz.pl",
        isLarge: true,
      },
      {
        label: "Weryfikacja",
        content:
          "Zgłoszenia rozpatrywane są w terminie 14 dni roboczych. Kontakt przez social media nie jest drogą formalną.",
      },
    ],
  },
];
