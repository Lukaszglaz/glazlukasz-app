"use client";

import Link from "next/link";
import {
  Database,
  Cookie,
  Link as LinkIcon,
  Mail,
  Scale,
  ShieldAlert,
  Info,
} from "lucide-react";
import { LegalWrapper } from "@/components/shared/LegalWrapper/LegalWrapper";

import { privacyProcessingData } from "@/app/data/legal/privacyPolicy/privacyProcessingData";
import { privacyRightsData } from "@/app/data/legal/privacyPolicy/privacyRightsData";

export default function PrivacyPolicyPage() {
  return (
    <LegalWrapper
      title="Polityka Prywatności"
      subtitleMax="Zasady przetwarzania i ochrony danych osobowych"
      subtitleMin="Serwisu glazlukasz.pl"
      lastUpdate="13 stycznia 2026 r."
    >
      <div className="space-y-16">
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <Info size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-wide text-text-primary uppercase">
              §1 Postanowienia Ogólne
            </h2>
          </div>
          <div className="space-y-4 rounded-4xl border border-border bg-bg-card p-8 text-sm leading-relaxed">
            <p>
              1. Niniejsza Polityka Prywatności określa zasady przetwarzania i
              ochrony danych osobowych Użytkowników korzystających z serwisu{" "}
              <span className="text-accent">glazlukasz.pl</span>.
            </p>
            <p>
              2. Administratorem danych jest{" "}
              <span className="font-bold text-text-primary">Łukasz Głaz</span>{" "}
              (działalność nierejestrowana zgodnie z polskim prawem). Kontakt:{" "}
              <span className="text-accent italic">kontakt@glazlukasz.pl</span>.
            </p>
            <p>
              3. Dane osobowe przetwarzane są zgodnie z Rozporządzeniem
              Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
              2016 r. (RODO) oraz ustawą o świadczeniu usług drogą elektroniczną
              z dnia 18 lipca 2002 r.
            </p>
          </div>
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <Database size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-wide text-text-primary uppercase">
              §2 Cele i Podstawy Przetwarzania Danych
            </h2>
          </div>
          <div className="space-y-4">
            {privacyProcessingData.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-bg-card p-6 text-sm"
              >
                <h4 className="mb-2 font-bold text-text-primary italic underline underline-offset-4">
                  {item.title}
                </h4>
                <p className="mb-2 text-text-secondary">{item.desc}</p>
                <p className="text-[11px] font-black text-accent uppercase">
                  Podstawa: {item.basis}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <ShieldAlert size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-wide text-text-primary uppercase">
              §3 Bezpieczeństwo i Przechowywanie
            </h2>
          </div>
          <div className="prose prose-invert max-w-none rounded-4xl border border-accent/10 bg-accent/2 p-8 text-sm leading-relaxed">
            <p>
              1. Administrator stosuje środki techniczne i organizacyjne
              zapewniające ochronę przetwarzanych danych osobowych.
            </p>
            <p>
              2. Dane przesyłane przez formularz są szyfrowane za pomocą{" "}
              <span className="text-accent">protokołu SSL</span>.
            </p>
            <p>
              3. Dane są przechowywane na zabezpieczonych serwerach firmy{" "}
              <span className="font-bold">Smarthost Sp. z o.o.</span>.
            </p>
          </div>
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <Scale size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-wide text-text-primary uppercase">
              §4 Prawa Osoby, której dane dotyczą
            </h2>
          </div>
          <div className="rounded-4xl border border-border bg-bg-card p-8 text-sm">
            <p className="mb-6 italic">
              Każdemu Użytkownikowi przysługuje prawo do:
            </p>
            <ul className="grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2">
              {privacyRightsData.map((right, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <p>
                    <span className="font-bold text-text-primary">
                      {right.title}:
                    </span>{" "}
                    {right.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <Cookie size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-wide text-text-primary uppercase">
              §5 Pliki Cookies i Narzędzia Zewnętrzne
            </h2>
          </div>
          <div className="space-y-4 rounded-4xl border border-border bg-bg-card p-8 text-sm">
            <p>
              1. Serwis korzysta z plików Cookies przechowywanych w urządzeniu
              końcowym Użytkownika.
            </p>
            <p>
              2. Administrator wykorzystuje Cookies w celu obsługi formularza,
              analityki oraz dopasowania strony do urządzenia.
            </p>
            <p className="border-l-2 border-accent pl-4 text-text-secondary italic">
              3. Google Analytics: Serwis przesyła anonimowe identyfikatory do
              serwerów Google Ireland Ltd.
            </p>
            <p>
              4. Zarządzanie Cookies odbywa się za pośrednictwem ustawień
              przeglądarki internetowej.
            </p>
          </div>
        </section>
        <section className="border-t border-border pt-12">
          <div className="flex flex-col justify-between gap-12 md:flex-row">
            <div className="max-w-md space-y-6 text-sm">
              <h2 className="text-3xl font-black tracking-wide text-text-primary uppercase">
                §6 Kontakt i Skargi
              </h2>
              <p className="leading-relaxed font-medium text-text-secondary">
                W przypadku naruszenia przepisów RODO, masz prawo wnieść skargę
                do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/legal/terms"
                  className="group flex items-center gap-2 text-accent"
                >
                  <LinkIcon size={16} /> <span>Regulamin Serwisu</span>
                </Link>
                <Link
                  href="/legal/gdpr"
                  className="group flex items-center gap-2 text-accent"
                >
                  <LinkIcon size={16} />{" "}
                  <span>Obowiązek Informacyjny RODO</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center rounded-[3rem] bg-accent p-10 text-center text-black">
              <Mail className="mb-4" size={32} />
              <p className="mb-4 text-xl font-black tracking-wide uppercase">
                Masz wątpliwości?
              </p>
              <a
                href="mailto:kontakt@glazlukasz.pl"
                className="rounded-xl bg-black px-8 py-3 text-[10px] font-black tracking-widest text-white uppercase transition-transform hover:scale-105"
              >
                Napisz do Administratora
              </a>
            </div>
          </div>
        </section>
      </div>
    </LegalWrapper>
  );
}
