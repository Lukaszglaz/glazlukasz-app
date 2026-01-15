export interface GDPRProcessingItem {
  goal: string;
  basis: string;
  period: string;
  periodStatus?: "default" | "warning";
}

export const gdprProcessingData: GDPRProcessingItem[] = [
  {
    goal: "Kontakt / Oferta",
    basis: "Art. 6 ust. 1 lit. f RODO (Interes Administratora)",
    period: "Do zakończenia korespondencji",
  },
  {
    goal: "Realizacja Usługi",
    basis: "Art. 6 ust. 1 lit. b RODO (Wykonanie Umowy)",
    period: "Do zakończenia współpracy",
  },
  {
    goal: "Rozliczenia (Faktury)",
    basis: "Art. 6 ust. 1 lit. c RODO (Obowiązek Prawny)",
    period: "5 lat (przepisy podatkowe)",
    periodStatus: "warning",
  },
  {
    goal: "Obrona przed roszczeniami",
    basis: "Art. 6 ust. 1 lit. f RODO (Ochrona prawna)",
    period: "Zgodnie z terminami przedawnienia",
  },
];
