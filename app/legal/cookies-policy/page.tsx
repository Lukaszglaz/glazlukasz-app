"use client";

import {
  Settings,
  EyeOff,
  MousePointer2,
  Info,
  ExternalLink,
  AlertCircle,
  Mail,
} from "lucide-react";
import { LegalWrapper } from "@/components/shared/LegalWrapper/LegalWrapper";
import { LegalSection } from "@/components/shared/LegalSection/LegalSection";
import { LegalContactCard } from "@/components/shared/LegalContactCard/LegalContactCard";
import { browserData } from "@/app/data/legal/cookiesPolicy/browserData";
import { cookieTypesData } from "@/app/data/legal/cookiesPolicy/cookieTypesData";
import { relatedLinksData } from "@/app/data/legal/cookiesPolicy/relatedLinksData";
import { analyticsData } from "@/app/data/legal/cookiesPolicy/analyticsData";

export default function CookiesPolicyPage() {
  return (
    <LegalWrapper
      title="Polityka Cookies"
      subtitleMin="Serwisu glazlukasz.pl"
      subtitleMax="Zasady wykorzystywania plików tekstowych i technologii śledzących"
      lastUpdate="13 stycznia 2026 r."
    >
      <div className="space-y-16">
        <LegalSection icon={Info} title="§1 Co to są pliki 'Cookies'?">
          <p className="mb-4">
            Pliki "cookies" (tzw. ciasteczka) to niewielkie dane
            informatyczne... zapisywane na urządzeniu końcowym Użytkownika.
          </p>
          <p className="text-text-secondary italic">
            Ciasteczka pozwalają Serwisowi rozpoznać urządzenie Użytkownika i
            odpowiednio wyświetlić stronę...
          </p>
        </LegalSection>

        <LegalSection
          icon={Settings}
          title="§2 Jakie rodzaje plików stosujemy?"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {cookieTypesData.map((type, idx) => (
              <div
                key={idx}
                className="group rounded-3xl border border-border bg-bg-card p-6 transition-all hover:border-accent/30"
              >
                <div className="mb-4 flex items-center gap-3 text-accent">
                  <type.icon size={20} />
                  <h4 className="text-[10px] font-black tracking-widest uppercase">
                    {type.title}
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-text-secondary">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </LegalSection>

        <LegalSection
          icon={MousePointer2}
          title={`§3 Narzędzia Analityczne ${analyticsData.provider.split(" ")[0]}`}
        >
          <div className="space-y-4">
            <p>
              W ramach Serwisu stosowane jest narzędzie{" "}
              <span className="font-mono font-bold text-text-primary">
                {analyticsData.provider}
              </span>
              ...
            </p>
            <div className="bg-bg-page rounded-xl border border-border p-4 text-[13px] leading-relaxed text-text-secondary">
              {analyticsData.description}
            </div>
            <a
              href={analyticsData.optOutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-[10px] font-black tracking-widest text-black uppercase transition-transform hover:scale-105"
            >
              Pobierz dodatek blokujący <ExternalLink size={12} />
            </a>
          </div>
        </LegalSection>

        <LegalSection icon={EyeOff} title="§4 Jak zarządzać plikami Cookies?">
          <div className="space-y-6">
            <p>
              Wybierz swoją przeglądarkę z listy poniżej, aby dowiedzieć się,
              jak zmienić ustawienia:
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {browserData.map((browser) => (
                <a
                  key={browser.name}
                  href={browser.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bg-page group flex items-center justify-between rounded-xl border border-border px-5 py-3 transition-all hover:border-accent"
                >
                  <span className="font-bold text-text-primary group-hover:text-accent">
                    {browser.name}
                  </span>
                  <ExternalLink
                    size={14}
                    className="text-text-secondary group-hover:text-accent"
                  />
                </a>
              ))}
            </div>
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="shrink-0 text-red-500" size={20} />
                <p className="text-xs leading-relaxed text-text-secondary italic">
                  <span className="mb-1 block font-bold tracking-widest text-red-500 uppercase not-italic">
                    Ważna uwaga:
                  </span>
                  Ograniczenie stosowania plików cookies może wpłynąć na
                  funkcjonalność Serwisu.
                </p>
              </div>
            </div>
          </div>
        </LegalSection>

        <section className="border-t border-border pt-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="space-y-4">{/* Linki powiązane... */}</div>
            <LegalContactCard
              icon={Mail}
              title="Masz pytania o Cookies?"
              buttonText="Napisz do mnie"
              href="mailto:kontakt@glazlukasz.pl"
            />
          </div>
        </section>
      </div>
    </LegalWrapper>
  );
}
