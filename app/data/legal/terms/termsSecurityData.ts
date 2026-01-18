export interface TermsSecurityItem {
  id: number;
  text: string;
}

export const termsSecurityData: TermsSecurityItem[] = [
  {
    id: 1,
    text: "Bezwzględny zakaz dekompilacji, analizy i kopiowania kodu źródłowego serwisu bez pisemnej zgody autora.",
  },
  {
    id: 2,
    text: "Zakaz podejmowania prób wstrzykiwania kodu (SQL Injection), skryptów (XSS) oraz skanowania luk w zabezpieczeniach.",
  },
  {
    id: 3,
    text: "Zakaz wykorzystywania automatycznych botów, crawlerów i skryptów nadmiernie obciążających infrastrukturę serwera.",
  },
  {
    id: 4,
    text: "Zakaz dostarczania treści o charakterze bezprawnym, obraźliwym lub naruszającym dobra osobiste osób trzecich.",
  },
];
