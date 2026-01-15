"use client";

import Link from "next/link";
import {
  Cpu,
  Globe,
  Link as LinkIcon,
  MessageSquare,
  UserCheck,
  Lock,
} from "lucide-react";
import { LegalWrapper } from "@/components/shared/Legal/LegalWrapper/LegalWrapper";

import { termsStatusData } from "@/app/data/legal/terms/termsStatusData";
import { termsInfraData } from "@/app/data/legal/terms/termsInfraData";
import { relatedLinksData } from "@/app/data/legal/cookiesPolicy/relatedLinksData";

export default function TermsPage() {
  return (
    <LegalWrapper
      title="Regulamin serwisu"
      subtitleMax="Warunki świadczenia usług & Standardy współpracy"
      subtitleMin="glazlukasz.pl"
      lastUpdate="13 stycznia 2026 r."
    >
      <div className="space-y-16">
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <UserCheck size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-wide text-text-primary uppercase">
              §1 Status Prawny i Model Biznesowy
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
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <Lock size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-wide text-text-primary uppercase">
              §2 Własność Intelektualna i Ochrona Kodu
            </h2>
          </div>
          <div className="prose prose-invert relative max-w-none overflow-hidden rounded-4xl border border-accent/10 bg-accent/2 p-8 text-sm leading-relaxed">
            <div className="relative z-10 space-y-6">
              <p>
                1.{" "}
                <span className="font-bold text-text-primary">Własność:</span>{" "}
                Wszelkie autorskie prawa majątkowe do dostarczonego kodu
                źródłowego pozostają wyłączną własnością Usługodawcy.
              </p>
              <div className="space-y-4 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                <p className="text-[14px] font-bold tracking-widest text-destructive uppercase">
                  Ostrzeżenie Prawne:
                </p>
                <p>
                  2.{" "}
                  <span className="font-bold text-text-primary">
                    Zakaz Kopiowania:
                  </span>{" "}
                  Bez pisemnej zgody zabrania się modyfikowania i udostępniania
                  kodu osobom trzecim.
                </p>
                <p>
                  3.{" "}
                  <span className="font-bold text-text-primary">
                    Odpowiedzialność:
                  </span>{" "}
                  Próby naruszenia kodu wiążą się z nałożeniem kar umownych oraz
                  odpowiedzialnością karną.
                </p>
              </div>
              <p>
                5.{" "}
                <span className="font-bold text-accent underline">Wykup:</span>{" "}
                Pełne przeniesienie praw następuje wyłącznie po spełnieniu
                warunków wykupu określonych w ofercie.
              </p>
            </div>
            <Cpu
              className="absolute -right-10 -bottom-10 text-accent/3"
              size={200}
            />
          </div>
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <Globe size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-wide text-text-primary uppercase">
              §3 Infrastruktura Techniczna
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
              <LinkIcon size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-wide text-text-primary uppercase">
              §4 Dokumentacja i Linki
            </h2>
          </div>
          <div className="space-y-6 text-sm leading-relaxed text-text-secondary">
            <p>1. Zapoznaj się z pozostałymi dokumentami prawnymi serwisu:</p>
            <div className="flex flex-col gap-3 border-l-2 border-accent/20 pl-6">
              {relatedLinksData.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="group flex items-center gap-2 text-accent transition-colors hover:text-text-primary"
                >
                  <LinkIcon
                    size={16}
                    className="transition-transform group-hover:rotate-45"
                  />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-border pt-12">
          <div className="flex flex-col justify-between gap-12 md:flex-row">
            <div className="max-w-md space-y-6 text-sm">
              <h2 className="text-3xl font-black tracking-wide text-text-primary uppercase">
                §5 Prawo i Spory
              </h2>
              <p className="leading-relaxed font-medium text-text-secondary">
                Wszelkie spory rozstrzygane będą polubownie. Regulamin podlega
                prawu polskiemu.
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
            </div>
          </div>
        </section>
      </div>
    </LegalWrapper>
  );
}
