"use client";

import { useState } from "react";
import { ShieldCheck, Zap } from "lucide-react";
import { LegalWrapper } from "@/components/shared/LegalWrapper/LegalWrapper";
import { complaintsLegalInfo } from "@/app/data/legal/complaints/complaintLabelData";
import { complaint } from "@/app/data/legal/complaints/complaintData";
import { complaintProcedureData } from "@/app/data/legal/complaints/complaintProcedureData";
import { LegalStepsCards } from "@/components/shared/LegalStepsCards/LegalStepsCards";
import { LegalCopySheet } from "@/components/shared/LegalCopySheet/LegalCopySheet";
import { LegalFeaturesGrid } from "@/components/shared/LegalFeaturesGrid/LegalFeaturesGrid";
import { LegalSideAlert } from "@/components/shared/LegalSideAlert/LegalSideAlert";

export default function ComplaintsPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    let text = "FORMULARZ REKLAMACYJNY - GLAZLUKASZ.PL\n\n";
    complaint.forEach((s) => {
      text += `[${s.group}]\n`;
      text += s.fields.map((f) => `> ${f}: `).join("\n") + "\n\n";
    });
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <LegalWrapper
      title="Reklamacje i zwroty"
      subtitleMin="Serwisu glazlukasz.pl"
      subtitleMax="Procedura zgłaszania uwag i rozpatrywania reklamacji"
      lastUpdate="14 stycznia 2026 r."
    >
      <div className="xl:max-w-8xl mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <LegalStepsCards items={complaintsLegalInfo} />
        <section className="mt-32 grid items-start gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-2">
              <LegalFeaturesGrid
                title="Procedura"
                accentTitle="Zgłoszeń"
                features={complaintProcedureData}
              />
            </div>
          </div>
          <LegalSideAlert
            icon={Zap}
            title="Wyłączenia"
            items={[
              "• Ingerencja osób trzecich w kod źródłowy / API.",
              "• Błędy wynikające z braku aktualizacji po stronie klienta.",
              "• Nieprawidłowa konfiguracja środowiska hostingowego.",
            ]}
            bgIcon={ShieldCheck}
          />
        </section>
        <LegalCopySheet
          title="Arkusz Danych"
          subtitle="Zalecana struktura dokumentacji"
          sections={complaint}
          onCopy={copyToClipboard}
          copied={copied}
        />
      </div>
    </LegalWrapper>
  );
}
