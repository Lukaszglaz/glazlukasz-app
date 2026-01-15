"use client";

import {
  Info,
  Database,
  ShieldAlert,
  Scale,
  Cookie,
  Mail,
  Link as LinkIcon,
} from "lucide-react";
import { LegalWrapper } from "@/components/shared/LegalWrapper/LegalWrapper";
import { LegalSection } from "@/components/shared/LegalSection/LegalSection";
import { privacyProcessingData } from "@/app/data/legal/privacyPolicy/privacyProcessingData";
import { LegalContactCard } from "@/components/shared/LegalContactCard/LegalContactCard";

export default function PrivacyPolicyPage() {
  return (
    <LegalWrapper
      title="Polityka Prywatności"
      subtitleMax="Ochrona danych osobowych"
      lastUpdate="13 stycznia 2026 r."
    >
      <div className="space-y-16">
        <LegalSection icon={Info} title="§1 Postanowienia Ogólne">
          <p>
            1. Serwis{" "}
            <span className="font-bold text-accent">glazlukasz.pl</span> dba o
            Twoją prywatność.
          </p>
          <p className="mt-4">
            2. Administratorem danych jest Łukasz Głaz. Kontakt:
            kontakt@glazlukasz.pl.
          </p>
        </LegalSection>

        <LegalSection icon={Database} title="§2 Cele Przetwarzania">
          <div className="space-y-4">
            {privacyProcessingData.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/40 p-4"
              >
                <h4 className="font-bold text-text-primary italic">
                  {item.title}
                </h4>
                <p className="text-xs text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </LegalSection>

        <LegalSection icon={ShieldAlert} title="§3 Bezpieczeństwo">
          <p>Stosujemy szyfrowanie SSL oraz bezpieczne serwery Smarthost.</p>
        </LegalSection>

        <section className="border-t border-border pt-12">
          <div className="flex flex-col justify-between gap-12 md:flex-row">
            <div className="max-w-md space-y-4">
              <h2 className="text-3xl font-black text-text-primary uppercase">
                Kontakt
              </h2>
              <p className="text-sm text-text-secondary">
                Masz pytania dotyczące Twoich danych?
              </p>
            </div>
            <LegalContactCard
              icon={Mail}
              title="Napisz do nas"
              buttonText="Wyślij e-mail"
              href="mailto:kontakt@glazlukasz.pl"
            />
          </div>
        </section>
      </div>
    </LegalWrapper>
  );
}
