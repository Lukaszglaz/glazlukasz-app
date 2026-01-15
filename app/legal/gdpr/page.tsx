"use client";

import Link from "next/link";
import {
  ShieldCheck,
  UserCheck,
  Database,
  Briefcase,
  Scale,
  Mail,
  Fingerprint,
  FileText,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { LegalWrapper } from "@/components/shared/LegalWrapper/LegalWrapper";
import { relatedLinksData } from "@/app/data/legal/cookiesPolicy/relatedLinksData";
import { gdprProcessingData } from "@/app/data/legal/gdpr/gdprProcessingData";
import { gdprRecipientData } from "@/app/data/legal/gdpr/gdprRecipientData";
import { gdprRightData } from "@/app/data/legal/gdpr/gdprRightData";

export default function GDPRPage() {
  return (
    <LegalWrapper
      title="Obowiązek Informacyjny"
      subtitleMin="Serwisu glazlukasz.pl"
      subtitleMax="Przejrzyste zasady przetwarzania danych osobowych (RODO)"
      lastUpdate="13 stycznia 2026 r."
    >
      <div className="space-y-16">
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <Fingerprint size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-widest text-text-primary uppercase">
              §1 Administrator Danych
            </h2>
          </div>
          <div className="rounded-4xl border border-border bg-bg-card p-8 text-sm leading-relaxed">
            <p className="mb-4">
              Administratorem Twoich danych osobowych jest{" "}
              <span className="font-bold text-text-primary">Łukasz Głaz</span>,
              prowadzący działalność nierejestrowaną zgodnie z polskim prawem
              przedsiębiorców.
            </p>
            <div className="bg-bg-page flex flex-col gap-2 rounded-2xl border border-border/50 p-6">
              <div className="flex items-center gap-3 text-text-secondary">
                <Mail size={16} className="text-accent" />
                <span>
                  Kontakt e-mail:{" "}
                  <span className="font-medium text-text-primary">
                    kontakt@glazlukasz.pl
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <ShieldCheck size={16} className="text-accent" />
                <span>
                  Status:{" "}
                  <span className="font-medium text-text-primary">
                    Samodzielny Administrator Danych
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <Database size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-widest text-text-primary uppercase">
              §2 Tabela Przetwarzania
            </h2>
          </div>
          <div className="overflow-hidden rounded-4xl border border-border bg-bg-card">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-accent/5 text-[10px] font-black tracking-widest text-accent uppercase">
                  <tr>
                    <th className="border-b border-border p-6">
                      Cel przetwarzania
                    </th>
                    <th className="border-b border-border p-6">
                      Podstawa prawna
                    </th>
                    <th className="border-b border-border p-6">
                      Okres przechowywania
                    </th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  {gdprProcessingData.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-border/50 transition-colors hover:bg-white/5"
                    >
                      <td className="p-6 font-bold text-text-primary">
                        {item.goal}
                      </td>
                      <td className="p-6 italic">{item.basis}</td>
                      <td
                        className={`p-6 text-xs ${item.periodStatus === "warning" ? "text-red-400" : "text-accent"}`}
                      >
                        {item.period}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <Briefcase size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-widest text-text-primary uppercase">
              §3 Odbiorcy Danych
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
            {gdprRecipientData.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 rounded-2xl border border-border bg-bg-card p-6"
              >
                <item.icon className="shrink-0 text-accent" size={24} />
                <div>
                  <p className="mb-1 font-bold text-text-primary italic underline underline-offset-4">
                    {item.title}
                  </p>
                  <p className="text-xs leading-relaxed text-text-secondary">
                    {item.description}{" "}
                    {item.provider && (
                      <span className="font-medium text-text-primary">
                        {item.provider}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <UserCheck size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-widest text-text-primary uppercase">
              §4 Katalog Twoich Praw
            </h2>
          </div>
          <div className="prose prose-invert relative max-w-none overflow-hidden rounded-4xl border border-border bg-bg-card p-8 text-sm">
            <div className="mb-6 grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
              {gdprRightData.map((right, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 border-b border-border/30 py-2"
                >
                  <ArrowRight size={12} className="text-accent" />
                  <span className="font-medium text-text-secondary">
                    {right.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-accent/20 bg-accent/5 p-4">
              <AlertCircle className="shrink-0 text-accent" size={20} />
              <p className="text-xs text-text-secondary italic">
                Swoje prawa możesz realizować wysyłając żądanie na adres{" "}
                <span className="font-bold text-text-primary">
                  kontakt@glazlukasz.pl
                </span>
                .
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2 text-accent">
              <Scale size={20} />
            </div>
            <h2 className="text-2xl font-black tracking-widest text-text-primary uppercase">
              §5 Prawo do Skargi
            </h2>
          </div>
          <div className="rounded-4xl border border-border bg-bg-card p-8 text-sm leading-relaxed text-text-secondary">
            <p>
              Jeżeli uznasz, że przetwarzanie danych narusza przepisy RODO, masz
              prawo wnieść skargę do organu nadzorczego:
              <br />
              <br />
              <span className="font-bold text-text-primary">
                Prezes Urzędu Ochrony Danych Osobowych
              </span>
              <br />
              ul. Stawki 2, 00-193 Warszawa
              <br />
              <a
                href="https://uodo.gov.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-1 text-accent hover:underline"
              >
                uodo.gov.pl <FileText size={12} />
              </a>
            </p>
          </div>
        </section>
        <section className="border-t border-border pt-12">
          <div className="flex flex-col gap-4">
            {relatedLinksData.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="flex items-center gap-2 text-[10px] font-black tracking-widest text-accent uppercase hover:text-text-primary"
              >
                <ArrowRight size={12} /> {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </LegalWrapper>
  );
}
