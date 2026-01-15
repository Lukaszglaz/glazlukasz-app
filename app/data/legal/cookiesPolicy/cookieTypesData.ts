import { ShieldCheck, BarChart3, LucideIcon } from "lucide-react";

export interface CookieTypeItem {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
}

export const cookieTypesData: CookieTypeItem[] = [
  {
    icon: ShieldCheck,
    title: "Niezbędne (Techniczne)",
    description:
      "Konieczne do prawidłowego funkcjonowania strony. Pozwalają na utrzymanie sesji, obsługę formularzy oraz zapamiętanie ustawień prywatności. Tych plików nie można wyłączyć.",
  },
  {
    icon: BarChart3,
    title: "Analityczne (Opcjonalne)",
    description:
      "Pomagają nam zrozumieć, jak użytkownicy korzystają ze strony (np. które podstrony są najpopularniejsze). Korzystamy z narzędzia Google Analytics (ID: G-3ZG24K6KB2). Dane te są zbierane anonimowo.",
  },
];
