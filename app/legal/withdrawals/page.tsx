"use client";

import { useState } from "react";
import { Lock, AlertTriangle } from "lucide-react";
import { LegalWrapper } from "@/components/shared/LegalWrapper/LegalWrapper";

import {
  withdrawalSteps,
  withdrawalFeatures,
  withdrawalSectionsData,
} from "@/app/data/legal/withdrawals/withdrawalData";
import { LegalStepsCards } from "@/components/shared/LegalStepsCards/LegalStepsCards";
import { LegalCopySheet } from "@/components/shared/LegalCopySheet/LegalCopySheet";
import { LegalFeaturesGrid } from "@/components/shared/LegalFeaturesGrid/LegalFeaturesGrid";

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
          <div className="relative overflow-hidden rounded-[2.5rem] border border-destructive/20 bg-destructive/5 p-10 lg:col-span-5">
            <div className="relative z-10">
              <h4 className="mb-6 flex items-center gap-2 text-xs font-black tracking-[0.3em] text-destructive uppercase">
                <AlertTriangle size={14} /> Ważne Uwagi
              </h4>
              <ul className="space-y-4 text-[13px] text-text-secondary opacity-70">
                <li>
                  • Rezygnacja nie obejmuje zakupionych licencji bezzwrotnych.
                </li>
                <li>
                  • Potrącane są koszty pracy wykonanej do chwili zgłoszenia.
                </li>
                <li>• Brak akceptacji kosztów uniemożliwia drogę polubowną.</li>
              </ul>
            </div>
            <Lock
              className="absolute -right-10 -bottom-10 text-destructive opacity-[0.03]"
              size={200}
            />
          </div>
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
