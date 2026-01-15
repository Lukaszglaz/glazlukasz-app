"use client";

import { useState } from "react";
import { Lock, AlertTriangle } from "lucide-react";
import { LegalWrapper } from "@/components/shared/Legal/LegalWrapper/LegalWrapper";

import {
  withdrawalSteps,
  withdrawalFeatures,
  withdrawalSectionsData,
} from "@/app/data/legal/withdrawals/withdrawalData";
import { LegalStepsCards } from "@/components/shared/Legal/LegalStepsCards/LegalStepsCards";
import { LegalCopySheet } from "@/components/shared/Legal/LegalCopySheet/LegalCopySheet";
import { LegalFeaturesGrid } from "@/components/shared/Legal/LegalFeaturesGrid/LegalFeaturesGrid";
import { LegalSideAlert } from "@/components/shared/Legal/LegalSideAlert/LegalSideAlert";

export default function WithdrawalPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    let text = "OŚWIADCZENIE O ODSTĄPIENIU OD UMOWY - GLAZLUKASZ.PL\n\n";
    withdrawalSectionsData.forEach((s) => {
      text += `[${s.group}]\n`;
      text += s.fields.map((f) => `> ${f}: `).join("\n") + "\n\n";
    });
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <LegalWrapper
      title="Odstąpienie od umowy"
      subtitleMin="Serwisu glazlukasz.pl"
      subtitleMax="Procedura rezygnacji i weryfikacji zleceń"
      lastUpdate="13 stycznia 2026 r."
    >
      <div className="xl:max-w-8xl mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <LegalStepsCards items={withdrawalSteps} />
        <section className="mt-32 grid items-start gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-2">
              <LegalFeaturesGrid
                title="Procedura"
                accentTitle="Zwrotu"
                features={withdrawalFeatures}
              />
            </div>
          </div>
          <LegalSideAlert
            icon={AlertTriangle}
            title="Ważne uwagi"
            items={[
              "• Odstąpienie nie przysługuje po pełnym wykonaniu usługi.",
              "• Produkty cyfrowe 'custom' nie podlegają zwrotom.",
              "• Weryfikacja tożsamości klienta jest obowiązkowa.",
            ]}
            bgIcon={Lock}
          />
        </section>
        <LegalCopySheet
          title="Arkusz Danych"
          subtitle="Zalecana struktura dokumentacji reklamacyjnej"
          sections={withdrawalSectionsData}
          onCopy={copyToClipboard}
          copied={copied}
        />
      </div>
    </LegalWrapper>
  );
}
