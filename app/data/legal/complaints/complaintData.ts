export interface ComplaintItem {
  id: string;
  group: string;
  desc: string;
  fields: string[];
}

export const complaint: ComplaintItem[] = [
  {
    id: "01",
    group: "IDENTYFIKACJA STRON",
    desc: "WERYFIKACJA TOŻSAMOŚCI ZGŁASZAJĄCEGO",
    fields: [
      "Imię i Nazwisko",
      "Pesel / Nr Dowodu Osobistego",
      "Pełna nazwa firmy (jeśli dotyczy)",
      "Adres korespondencyjny",
      "Siedziba firmy (jeśli dotyczy)",
      "NIP Firmy (jeśli dotyczy) ",
      "E-mail i Telefon kontaktowy",
    ],
  },
  {
    id: "02",
    group: "PRZEDMIOT I ZAKRES",
    desc: "SZCZEGÓŁY REKLAMOWANEJ USŁUGI",
    fields: [
      "Numer faktury",
      "ID zamówienia / usługi",
      "Data zawarcia umowy / zakupu",
      "Pełna nazwa usługi / produktu",
    ],
  },
  {
    id: "03",
    group: "PROTOKÓŁ BŁĘDU",
    desc: "DOKUMENTACJA TECHNICZNA WADY",
    fields: [
      "Opis niezgodności (stan faktyczny)",
      "Data i godzina wykrycia nieprawidłowości",
      "Środowisko (System, Browser, Node)",
      "Kroki do odtworzenia błędu",
    ],
  },
  {
    id: "04",
    group: "ŻĄDANIA",
    desc: "OCZEKIWANE ROZWIĄZANIE",
    fields: [
      "Preferowana forma (Naprawa / Zwrot / Obniżka)",
      "Numer konta bankowego (standard IBAN)",
    ],
  },
];
