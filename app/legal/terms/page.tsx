"use client";

import Link from "next/link";
import {
  Globe,
  MessageSquare,
  UserCheck,
  ShieldAlert,
  Mail,
  Gavel,
} from "lucide-react";
import { LegalWrapper } from "@/components/shared/Legal/LegalWrapper/LegalWrapper";

import { termsStatusData } from "@/app/data/legal/terms/termsStatusData";
import { termsInfraData } from "@/app/data/legal/terms/termsInfraData";
import { termsSecurityData } from "@/app/data/legal/terms/termsSecurityData";
import { termsLegalBasisData } from "@/app/data/legal/terms/termsLegalBasisData";
import { relatedLinksData } from "@/app/data/legal/cookiesPolicy/relatedLinksData";

export default function TermsPage() {
  return (
    <LegalWrapper
      title="Regulamin serwisu"
      subtitleMax="Warunki świadczenia usług & Standardy współpracy"
      subtitleMin="Serwisu Internetowego glazlukasz.pl"
      lastUpdate="13 stycznia 2026 r."
    >
      <div className="space-y-16">
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <UserCheck size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-wide text-text-primary uppercase">
              §1 Status Prawny i Podmiot
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {termsStatusData.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col overflow-hidden rounded-[2.5rem] border transition-all ${
                  item.highlight
                    ? "border-accent/40 bg-accent/3 hover:bg-accent/6"
                    : "border-border bg-bg-card/40 hover:border-accent/30"
                }`}
              >
                <div className="border-b border-border bg-white/5 px-8 py-5">
                  <h3 className="text-[14px] font-black tracking-[0.2em] text-text-primary uppercase">
                    {item.category}
                  </h3>
                </div>
                <div className="space-y-8 p-8">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="space-y-2">
                      <h4 className="text-[12px] font-black tracking-widest text-accent uppercase">
                        {detail.label}
                      </h4>
                      <p
                        className={`leading-relaxed text-text-secondary italic ${detail.isLarge ? "text-[15px]" : "text-[14px]"}`}
                      >
                        <span
                          className={`mb-1 block text-text-primary not-italic ${detail.isLarge ? "text-lg font-black" : ""} ${detail.isUppercase ? "tracking-tight uppercase" : ""}`}
                        >
                          {detail.content.split(". ")[0]}
                        </span>
                        {detail.content.split(". ").slice(1).join(". ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3 text-destructive">
            <ShieldAlert size={20} />
            <h2 className="text-2xl font-black tracking-wide text-text-primary uppercase">
              §2 Bezpieczeństwo i Zakazy Techniczne
            </h2>
          </div>
          <div className="rounded-[2.5rem] border border-red-500/30 bg-red-500/5 p-8 shadow-[0_0_40px_rgba(239,68,68,0.05)] md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-black text-text-primary uppercase">
                  Ostrzeżenie prawne:
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Działania naruszające integralność serwisu glazlukasz.pl będą
                  zgłaszane odpowiednim organom. Jako osoba fizyczna chronię
                  swoją własność intelektualną z pełną surowością prawa.
                </p>
              </div>
              <ul className="space-y-4">
                {termsSecurityData.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-4 text-sm leading-relaxed text-text-secondary"
                  >
                    <span className="font-black text-destructive">
                      {item.id}.
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <Globe size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-wide text-text-primary uppercase">
              §3 Infrastruktura i Utrzymanie
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {termsInfraData.map((infra, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-border bg-bg-card p-6 text-sm transition-all hover:border-accent/30"
              >
                <h4 className="mb-3 text-[14px] font-black tracking-[0.2em] text-accent uppercase">
                  {infra.title}
                </h4>
                <p className="leading-relaxed font-medium text-text-secondary">
                  {infra.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <Mail size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-wide text-text-primary uppercase">
              §4 Usługi i Tryb Reklamacyjny
            </h2>
          </div>
          <div className="grid gap-6 text-sm leading-relaxed text-text-secondary md:grid-cols-2">
            <div className="space-y-4 rounded-3xl border border-border p-8">
              <h3 className="text-xs font-black tracking-widest text-text-primary uppercase">
                Newsletter i Kontakt
              </h3>
              <p>
                Zapis do newslettera jest dobrowolny. Dane przetwarzane są
                zgodnie z polityką prywatności. Każdy e-mail zawiera link do
                natychmiastowej rezygnacji.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-border p-8">
              <h3 className="text-xs font-black tracking-widest text-text-primary uppercase">
                Reklamacje
              </h3>
              <p>
                Zgłoszenia dotyczące wadliwego działania serwisu należy kierować
                na{" "}
                <span className="font-bold text-accent">
                  kontakt@glazlukasz.pl
                </span>
                . Termin rozpatrzenia: 14 dni roboczych.
              </p>
            </div>
          </div>
        </section>
        <section className="border-t border-border pt-12">
          <div className="flex flex-col justify-between gap-12 md:flex-row">
            <div className="max-w-xl space-y-6">
              <div className="flex items-center gap-3">
                <Gavel size={24} className="text-accent" />
                <h2 className="text-3xl font-black tracking-wide text-text-primary uppercase">
                  §5 Podstawy Prawne
                </h2>
              </div>
              <ul className="grid gap-2 text-xs text-text-secondary opacity-70">
                {termsLegalBasisData.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-accent">•</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-destructive italic">
                Wszelkie spory będą rozstrzygane polubownie. W przypadku braku
                porozumienia właściwym jest sąd dla miejsca zamieszkania
                Usługodawcy.
              </p>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center rounded-[3rem] bg-accent p-10 text-center text-black">
              <MessageSquare className="mb-4" size={32} />
              <p className="mb-4 text-xl font-black tracking-wide uppercase">
                Masz pytania?
              </p>
              <a
                href="mailto:kontakt@glazlukasz.pl"
                className="rounded-xl bg-black px-8 py-3 text-[14px] font-black tracking-widest text-white uppercase transition-transform hover:scale-105"
              >
                Napisz do mnie
              </a>
              <div className="mt-8 flex gap-4">
                {relatedLinksData.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="text-[10px] font-black uppercase opacity-60 hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </LegalWrapper>
  );
}
