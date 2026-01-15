"use client";

import { useState } from "react";
import { CheckCircle2, Copy, ShieldCheck, Zap } from "lucide-react";
import { LegalWrapper } from "@/components/shared/LegalWrapper/LegalWrapper";
import { complaintsLegalInfo } from "@/app/data/legal/complaints/complaintLabelData";
import { complaint } from "@/app/data/legal/complaints/complaintData";
import { complaintProcedureData } from "@/app/data/legal/complaints/complaintProcedureData";

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
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {complaintsLegalInfo.map((box, i) => (
            <div
              key={i}
              className={`rounded-[2.5rem] border border-border p-10 transition-all ${
                box.highlight ? "border-accent/30 bg-accent/5" : "bg-bg-card"
              }`}
            >
              <div
                className={`mb-8 flex h-12 w-12 items-center justify-center rounded-2xl ${
                  box.highlight
                    ? "bg-accent text-bg-body"
                    : "bg-accent/10 text-accent"
                }`}
              >
                <box.icon size={24} />
              </div>
              <span className="mb-2 block text-[10px] font-black tracking-[0.4em] text-accent uppercase">
                {box.label}
              </span>
              <h3
                className={`mb-4 text-sm font-extrabold tracking-tighter uppercase ${
                  box.highlight ? "text-accent" : "text-text-primary"
                }`}
              >
                {box.val}
              </h3>
              <p className="text-[13px] leading-relaxed text-text-secondary opacity-60">
                {box.sub}
              </p>
            </div>
          ))}
        </div>
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
        <section className="mt-40 space-y-10">
          <div className="flex flex-col justify-between gap-6 px-2 md:flex-row md:items-end">
            <div>
              <h3 className="text-4xl leading-none font-extrabold tracking-tighter text-text-primary uppercase">
                Arkusz Danych
              </h3>
              <p className="mt-4 text-[11px] font-bold tracking-[0.2em] text-tertiary uppercase">
                Zalecana struktura dokumentacji
              </p>
            </div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-4 rounded-2xl bg-accent px-10 py-5 text-[11px] font-black tracking-widest text-bg-body uppercase shadow-xl shadow-accent/10 transition-all hover:scale-[1.02] hover:bg-accent-hover active:scale-95"
            >
              {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
              {copied ? "Skopiowano" : "Kopiuj Arkusz"}
            </button>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-bg-card shadow-2xl">
            <div className="divide-y divide-border/30">
              {complaint.map((section) => (
                <div
                  key={section.id}
                  className="group grid items-stretch lg:grid-cols-12"
                >
                  <div className="flex flex-col justify-center border-r border-border/30 bg-bg-body/20 p-8 lg:col-span-4 lg:p-10">
                    <h4 className="mb-2 text-lg leading-none font-black tracking-tighter uppercase">
                      {section.group}
                    </h4>
                    <p className="text-[9px] font-bold tracking-widest text-accent uppercase italic">
                      {section.desc}
                    </p>
                  </div>
                  <div className="p-8 lg:col-span-8 lg:p-10">
                    <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                      {section.fields.map((field, idx) => (
                        <div key={idx} className="group/field relative pl-6">
                          <div className="absolute top-1 left-0 h-[80%] w-px bg-text-primary/20 transition-colors group-hover/field:bg-accent" />
                          <div className="absolute top-1 -left-[2.5px] h-1.5 w-1.5 rounded-full border border-text-primary/30 bg-bg-card shadow-[0_0_8px_rgba(79,202,190,0.3)] transition-all group-hover/field:border-accent group-hover/field:bg-accent" />
                          <div className="space-y-1.5">
                            <p className="text-[12px] font-bold tracking-tight text-text-primary uppercase">
                              {field}
                            </p>
                            <div className="h-px w-full bg-linear-to-r from-text-primary/20 to-transparent" />
                            <p className="text-[10px] tracking-tighter text-tertiary uppercase">
                              Dane wejściowe...
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </LegalWrapper>
  );
}
