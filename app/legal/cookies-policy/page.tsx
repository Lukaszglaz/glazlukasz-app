"use client";

import Link from "next/link";
import {
  Settings,
  EyeOff,
  MousePointer2,
  Info,
  ExternalLink,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { LegalWrapper } from "@/components/shared/LegalWrapper/LegalWrapper";
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
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <Info size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-widest text-text-primary uppercase">
              §1 Co to są pliki "Cookies"?
            </h2>
          </div>
          <div className="rounded-4xl border border-border bg-bg-card p-8 text-sm leading-relaxed">
            <p className="mb-4">
              Pliki "cookies" (tzw. ciasteczka) to niewielkie dane
              informatyczne, w szczególności pliki tekstowe, wysyłane przez
              serwer i zapisywane na urządzeniu końcowym Użytkownika (np. na
              dysku twardym komputera, laptopa, czy też w pamięci smartfona).
            </p>
            <p className="text-text-secondary italic">
              Ciasteczka pozwalają Serwisowi rozpoznać urządzenie Użytkownika i
              odpowiednio wyświetlić stronę internetową, dostosowaną do jego
              indywidualnych preferencji oraz zapewnić poprawne działanie
              funkcji technicznych.
            </p>
          </div>
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <Settings size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-widest text-text-primary uppercase">
              §2 Jakie rodzaje plików stosujemy?
            </h2>
          </div>
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
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <MousePointer2 size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-widest text-text-primary uppercase">
              §3 Narzędzia Analityczne {analyticsData.provider.split(" ")[0]}
            </h2>
          </div>
          <div className="prose prose-invert relative max-w-none overflow-hidden rounded-4xl border border-accent/10 bg-accent/5 p-8 text-sm">
            <div className="relative z-10 space-y-4">
              <p>
                W ramach Serwisu stosowane jest narzędzie{" "}
                <span className="font-mono font-bold text-text-primary">
                  {analyticsData.provider}
                </span>{" "}
                dostarczane przez {analyticsData.company}.
              </p>
              <div className="bg-bg-page rounded-xl border border-border p-4 text-[13px] leading-relaxed text-text-secondary">
                {analyticsData.description}
              </div>
              <p>
                Możesz zapobiec rejestrowaniu danych dotyczących korzystania z
                witryny przez pliki cookie instalując dodatek do przeglądarki
                blokujący Google Analytics:
              </p>
              <a
                href={analyticsData.optOutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-[10px] font-black tracking-widest text-black uppercase transition-transform hover:scale-105"
              >
                Pobierz dodatek blokujący <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <EyeOff size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-widest text-text-primary uppercase">
              §4 Jak zarządzać plikami Cookies?
            </h2>
          </div>
          <div className="space-y-6 rounded-4xl border border-border bg-bg-card p-8 text-sm">
            <p className="leading-relaxed">
              Większość przeglądarek internetowych domyślnie dopuszcza
              przechowywanie plików cookies. Masz jednak możliwość zmiany tych
              ustawień w dowolnym momencie. Wybierz swoją przeglądarkę z listy
              poniżej, aby dowiedzieć się, jak zmienić ustawienia:
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {browserData.map((browser) => (
                <a
                  key={browser.name}
                  href={browser.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bg-page group flex items-center justify-between rounded-xl border border-border px-5 py-3 transition-all hover:border-accent hover:bg-accent/5"
                >
                  <span className="font-bold text-text-primary transition-colors group-hover:text-accent">
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
                  niektóre funkcjonalności dostępne na stronach internetowych
                  Serwisu.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-border pt-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="space-y-4">
              <p className="text-[10px] font-black tracking-widest text-text-secondary uppercase">
                Powiązane dokumenty:
              </p>
              <div className="flex flex-col gap-2">
                {relatedLinksData.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-accent transition-colors hover:text-text-primary"
                  >
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2 text-xs text-text-secondary">
                Masz pytania dotyczące technologii śledzących?
              </p>
              <a
                href="mailto:kontakt@glazlukasz.pl"
                className="text-xl font-black tracking-widest text-accent hover:underline"
              >
                kontakt@glazlukasz.pl
              </a>
            </div>
          </div>
        </section>
      </div>
    </LegalWrapper>
  );
}
