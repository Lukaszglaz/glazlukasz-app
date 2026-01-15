"use client";

import { useState } from "react";
import { CheckCircle2, Copy, ShieldCheck, Zap } from "lucide-react";
import { LegalWrapper } from "@/components/shared/LegalWrapper/LegalWrapper";
import { complaintsLegalInfo } from "@/app/data/legal/complaints/complaintLabelData";
import { complaint } from "@/app/data/legal/complaints/complaintData";
import { complaintProcedureData } from "@/app/data/legal/complaints/complaintProcedureData";
import { LegalStepsCards } from "@/components/shared/LegalStepsCards/LegalStepsCards";
import { LegalCopySheet } from "@/components/shared/LegalCopySheet/LegalCopySheet";

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
            <h2 className="text-4xl font-extrabold tracking-tighter text-text-primary uppercase">
              Procedura <span className="text-accent">Zgłoszeń</span>
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {complaintProcedureData.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <item.icon className="shrink-0 text-accent" size={20} />
                  <div>
                    <h4 className="text-[13px] font-black tracking-widest text-text-primary uppercase">
                      {item.title}
                    </h4>
                    <p className="text-[12px] text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-destructive/20 bg-destructive/5 p-10 lg:col-span-5">
            <div className="relative z-10">
              <h4 className="mb-6 flex items-center gap-2 text-xs font-black tracking-[0.3em] text-destructive uppercase">
                <Zap size={14} /> Wyłączenia
              </h4>
              <ul className="space-y-4 text-[13px] text-text-secondary opacity-70">
                <li>• Ingerencja osób trzecich w kod źródłowy / API.</li>
                <li>
                  • Błędy wynikające z braku aktualizacji po stronie klienta.
                </li>
                <li>• Nieprawidłowa konfiguracja środowiska hostingowego.</li>
              </ul>
            </div>
            <ShieldCheck
              className="absolute -right-10 -bottom-10 text-destructive opacity-[0.03]"
              size={200}
            />
          </div>
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
