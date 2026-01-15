import { Chrome, Globe, Compass, Zap, LucideIcon } from "lucide-react";

export interface BrowserStepItem {
  title: string;
  text: string;
}

export interface BrowserInstructionItem {
  name: string;
  icon: LucideIcon;
  description: string;
  fullSteps: BrowserStepItem[];
}

export const browserInstructionsData: Record<string, BrowserInstructionItem> = {
  chrome: {
    name: "Google Chrome",
    icon: Chrome,
    description:
      "Najpopularniejsza przeglądarka oparta na silniku Blink. Zarządzanie odbywa się w sekcji piaskownicy prywatności.",
    fullSteps: [
      {
        title: "Menu Główne",
        text: "Kliknij ikonę trzech kropek w prawym górnym rogu okna.",
      },
      {
        title: "Ustawienia",
        text: "Wybierz 'Ustawienia' > 'Prywatność i bezpieczeństwo'.",
      },
      {
        title: "Pliki Cookies",
        text: "Wejdź w 'Pliki cookie i inne dane witryn'.",
      },
      {
        title: "Blokada",
        text: "Zaznacz opcję 'Blokuj wszystkie pliki cookie' (niezalecane).",
      },
    ],
  },
  firefox: {
    name: "Mozilla Firefox",
    icon: Globe,
    description:
      "Niezależna przeglądarka stawiająca na prywatność z systemem Enhanced Tracking Protection.",
    fullSteps: [
      {
        title: "Otwarcie Menu",
        text: "Kliknij trzy poziome kreski w prawym górnym rogu.",
      },
      {
        title: "Panel Preferencji",
        text: "Przejdź do 'Ustawienia' > 'Prywatność i bezpieczeństwo'.",
      },
      {
        title: "Ochrona",
        text: "W sekcji 'Wzmocniona ochrona' wybierz tryb 'Własna'.",
      },
      {
        title: "Ciasteczka",
        text: "Zaznacz 'Ciasteczka' i zmień ustawienie na 'Wszystkie'.",
      },
    ],
  },
  safari: {
    name: "Apple Safari",
    icon: Compass,
    description:
      "Przeglądarka zintegrowana z ekosystemem Apple, posiada funkcję Intelligent Tracking Prevention.",
    fullSteps: [
      {
        title: "Safari Menu",
        text: "Na pasku zadań macOS kliknij 'Safari' > 'Ustawienia'.",
      },
      {
        title: "Prywatność",
        text: "W oknie ustawień wybierz ikonę tarczy (Prywatność).",
      },
      {
        title: "Blokada Totalna",
        text: "Zaznacz opcję 'Blokuj wszystkie cookie'.",
      },
      {
        title: "Zatwierdzenie",
        text: "Potwierdź komunikat o możliwym pogorszeniu działania stron.",
      },
    ],
  },
  edge: {
    name: "Microsoft Edge",
    icon: Zap,
    description:
      "Nowoczesna przeglądarka Microsoftu z wbudowanym filtrem śledzenia i silnikiem Chromium.",
    fullSteps: [
      {
        title: "Ustawienia",
        text: "Kliknij ikonę trzech kropek '...' w prawym górnym rogu.",
      },
      {
        title: "Uprawnienia",
        text: "Wybierz 'Ustawienia' > 'Ciasteczka i uprawnienia witryn'.",
      },
      {
        title: "Zarządzanie",
        text: "Kliknij 'Zarządzaj plikami cookie i danymi witryn'.",
      },
      {
        title: "Blokuj",
        text: "Włącz przełącznik 'Blokuj pliki cookie innych firm'.",
      },
    ],
  },
  opera: {
    name: "Opera Browser",
    icon: Globe,
    description:
      "Przeglądarka z wbudowanym VPN i silnym mechanizmem blokowania trackerów reklamowych.",
    fullSteps: [
      {
        title: "Łatwa Konfiguracja",
        text: "Kliknij ikonę ustawień w prawym górnym rogu paska bocznego.",
      },
      {
        title: "Pełne Ustawienia",
        text: "Przewiń na sam dół i wybierz 'Przejdź do pełnych ustawień'.",
      },
      {
        title: "Prywatność",
        text: "W sekcji 'Prywatność i bezpieczeństwo' znajdź 'Ciasteczka'.",
      },
      {
        title: "Wybór Trybu",
        text: "Wybierz opcję blokowania plików cookie stron trzecich.",
      },
    ],
  },
};
