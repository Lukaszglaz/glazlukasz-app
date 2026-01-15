import { ShieldCheck, Zap, HelpCircle, LucideIcon } from "lucide-react";

export interface LegalInfoBoxItem {
  icon: LucideIcon;
  label: string;
  val: string;
  sub: string;
  highlight?: boolean;
}

export const complaintsLegalInfo: LegalInfoBoxItem[] = [
  {
    icon: ShieldCheck,
    label: "Usługodawca",
    val: "Łukasz Głaz",
    sub: "Działalność nierejestrowana (art. 5 ust. 1 Prawo Przedsiębiorców).",
  },
  {
    icon: Zap,
    label: "Jurysdykcja",
    val: "Polska / UE",
    sub: "Przepisy RP. Dane adresowe podawane bezpośrednio na dokumencie sprzedaży.",
  },
  {
    icon: HelpCircle,
    label: "Kontakt",
    val: "kontakt@glazlukasz.pl",
    sub: "Oficjalny kanał zgłoszeń. Czas procesowania: do 14 dni roboczych.",
    highlight: true,
  },
];
