"use client";

import {
  Info,
  Database,
  ShieldAlert,
  Mail,
  Scale,
  UserCheck,
  Cookie,
} from "lucide-react";
import { LegalWrapper } from "@/components/shared/Legal/LegalWrapper/LegalWrapper";
import { LegalSection } from "@/components/shared/Legal/LegalSection/LegalSection";
import { LegalContactCard } from "@/components/shared/Legal/LegalContactCard/LegalContactCard";
import { privacyProcessingData } from "@/app/data/legal/privacyPolicy/privacyProcessingData";

export default function PrivacyPolicyPage() {
  return (
    <LegalWrapper
      title="Polityka Prywatności"
      subtitleMax="Ochrona danych osobowych i prywatności użytkowników"
      lastUpdate="13 stycznia 2026 r."
    >
      <div className="space-y-16">
        <LegalSection icon={Info} title="§1 Postanowienia Ogólne">
          <p>
            1. Serwis{" "}
            <span className="font-bold text-accent">glazlukasz.pl</span> dba o
            Twoją prywatność oraz bezpieczeństwo danych osobowych.
          </p>
          <p className="mt-4">
            2. Administratorem danych jest{" "}
            <span className="font-bold text-text-primary">Łukasz Głaz</span>.
            Kontakt w sprawach związanych z prywatnością jest możliwy pod
            adresem:{" "}
            <span className="text-accent italic">kontakt@glazlukasz.pl</span>.
          </p>
        </LegalSection>
        <LegalSection icon={Database} title="§2 Cele i Podstawy Przetwarzania">
          <div className="space-y-6">
            {privacyProcessingData.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/40 bg-bg-card/30 p-6 transition-all hover:border-accent/20"
              >
                <h4 className="flex items-center gap-2 font-black tracking-tight text-text-primary uppercase">
                  <span className="text-accent italic">0{idx + 1}.</span>{" "}
                  {item.title}
                </h4>
                <div className="mt-2 space-y-3">
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item.desc}
                  </p>
                  {item.analyticsId && (
                    <div className="inline-block rounded-md bg-accent/10 px-3 py-1 font-mono text-[10px] font-bold text-accent">
                      ID: {item.analyticsId}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </LegalSection>
        <LegalSection icon={UserCheck} title="§3 Odbiorcy Danych">
          <p>
            Twoje dane osobowe mogą być przekazywane wyłącznie podmiotom
            uprawnionym do uzyskania danych osobowych na podstawie przepisów
            prawa oraz zaufanym partnerom technicznym (hosting Smarthost,
            narzędzia analityczne Google) wyłącznie w zakresie niezbędnym do
            poprawnego działania serwisu.
          </p>
        </LegalSection>
        <LegalSection icon={Scale} title="§4 Prawa Użytkownika">
          <p className="mb-4">
            Zgodnie z RODO, każdemu użytkownikowi przysługuje prawo do:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-text-secondary">
            <li>Dostępu do swoich danych oraz otrzymania ich kopii.</li>
            <li>Sprostowania (poprawiania) swoich danych.</li>
            <li>Usunięcia danych ("prawo do bycia zapomnianym").</li>
            <li>Ograniczenia przetwarzania danych.</li>
            <li>Wniesienia sprzeciwu wobec przetwarzania.</li>
            <li>Wniesienia skargi do organu nadzorczego (Prezesa UODO).</li>
          </ul>
        </LegalSection>
        <LegalSection icon={ShieldAlert} title="§5 Bezpieczeństwo Danych">
          <p>
            Administrator stosuje środki techniczne i organizacyjne zapewniające
            ochronę przetwarzanych danych, w szczególności zabezpiecza dane
            przed ich udostępnieniem osobom nieupoważnionym poprzez szyfrowanie
            połączeń certyfikatem SSL.
          </p>
        </LegalSection>
        <LegalSection icon={Cookie} title="§6 Pliki Cookies">
          <p>
            Serwis korzysta z plików cookies w celach statystycznych oraz
            funkcjonalnych. Szczegółowe informacje na temat zarządzania plikami
            cookies znajdziesz w dedykowanej{" "}
            <a
              href="/legal/cookies-policy"
              className="text-accent hover:underline"
            >
              Polityce Cookies
            </a>
            .
          </p>
        </LegalSection>
        <section className="border-t border-border pt-12">
          <div className="flex flex-col justify-between gap-12 md:flex-row">
            <div className="max-w-md space-y-4">
              <h2 className="text-3xl font-black text-text-primary uppercase">
                Kontakt
              </h2>
              <p className="text-sm leading-relaxed text-text-secondary">
                Jeśli masz jakiekolwiek pytania dotyczące niniejszej polityki
                prywatności lub chcesz skorzystać ze swoich praw, napisz do nas.
              </p>
            </div>
            <LegalContactCard
              icon={Mail}
              title="Centrum Prywatności"
              buttonText="Wyślij zapytanie"
              href="mailto:kontakt@glazlukasz.pl"
            />
          </div>
        </section>
      </div>
    </LegalWrapper>
  );
}
