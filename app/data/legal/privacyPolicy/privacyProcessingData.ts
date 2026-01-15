export interface PrivacyProcessingItem {
  title: string;
  desc: string;
  basis: string;
}

export const privacyProcessingData: PrivacyProcessingItem[] = [
  {
    title: "Obsługa zapytań (Formularz)",
    desc: "Przetwarzanie imienia i adresu e-mail w celu udzielenia odpowiedzi na przesłaną wiadomość.",
    basis: "Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes).",
  },
  {
    title: "Zawarcie i realizacja umowy",
    desc: "Przetwarzanie danych niezbędnych do przygotowania projektu, zakupu domeny i hostingu w imieniu klienta.",
    basis: "Art. 6 ust. 1 lit. b RODO (niezbędność do wykonania umowy).",
  },
  {
    title: "Obowiązki podatkowo-księgowe",
    desc: "Wystawianie faktur (rachunków) i prowadzenie ewidencji sprzedaży zgodnie z przepisami o działalności nierejestrowanej.",
    basis: "Art. 6 ust. 1 lit. c RODO (obowiązek prawny).",
  },
  {
    title: "Analityka i statystyka",
    desc: "Monitorowanie ruchu w Serwisie za pomocą Google Analytics (ID: G-3ZG24K6KB2) w celu optymalizacji portfolio.",
    basis: "Art. 6 ust. 1 lit. a RODO (dobrowolna zgoda).",
  },
];
