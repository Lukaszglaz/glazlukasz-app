import { Clock, FileText, Scale, Gavel, LucideIcon } from "lucide-react";

export interface ComplaintProcedureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const complaintProcedureData: ComplaintProcedureItem[] = [
  {
    icon: Clock,
    title: "14 Dni",
    description: "Czas na ustosunkowanie się do zgłoszenia.",
  },
  {
    icon: FileText,
    title: "Formularz",
    description: "Wymagany komplet danych technicznych.",
  },
  {
    icon: Scale,
    title: "Rękojmia",
    description: "Odpowiedzialność za wady fizyczne i prawne.",
  },
  {
    icon: Gavel,
    title: "Mediacja",
    description: "Preferowane polubowne rozwiązanie sporów.",
  },
];
