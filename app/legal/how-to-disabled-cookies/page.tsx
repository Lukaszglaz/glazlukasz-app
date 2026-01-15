"use client";

import { useState } from "react";
import {
  Smartphone,
  ShieldCheck,
  Fingerprint,
  AlertOctagon,
  ArrowRight,
} from "lucide-react";
import { LegalWrapper } from "@/components/shared/Legal/LegalWrapper/LegalWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { browserInstructionsData } from "@/app/data/legal/howToDisabledCookies/browserInstructionsData";

export default function HowToDisabledCookiesPage() {
  const [activeTab, setActiveTab] = useState<string>("chrome");

  const ActiveBrowser = browserInstructionsData[activeTab];

  return (
    <LegalWrapper
      title="Instrukcja Cookies"
      subtitleMin="Serwisu glazlukasz.pl"
      subtitleMax="Wybierz swoją przeglądarkę z listy poniżej"
      lastUpdate="13 stycznia 2026 r."
    >
      <div className="mx-auto max-w-[1200px] space-y-10 pb-20">
        <div className="flex flex-wrap gap-2 rounded-4xl border border-border bg-bg-card p-2 shadow-inner">
          {Object.entries(browserInstructionsData).map(([id, browser]) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex min-w-[140px] flex-1 items-center justify-center gap-3 rounded-2xl px-6 py-4 text-[11px] font-black tracking-widest uppercase transition-all duration-300 ${
                activeTab === id
                  ? "bg-accent text-black shadow-lg"
                  : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
              }`}
            >
              <browser.icon size={20} />
              {browser.name}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-[3rem] border border-border bg-bg-card shadow-2xl"
          >
            <div className="border-b border-border bg-linear-to-br from-accent/5 to-transparent p-10 md:p-14">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <ShieldCheck size={16} />
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase">
                      Poradnik Aktywny
                    </span>
                  </div>
                  <h3 className="text-4xl font-black tracking-tighter text-text-primary uppercase">
                    {ActiveBrowser.name}
                  </h3>
                </div>
                <p className="max-w-md border-l border-accent/30 pl-6 text-sm leading-relaxed text-text-secondary italic">
                  {ActiveBrowser.description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-16 gap-y-10 p-10 md:grid-cols-2 md:p-14">
              {ActiveBrowser.fullSteps.map((step, idx) => (
                <div key={idx} className="group flex gap-6">
                  <div className="bg-bg-page flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border text-sm font-black text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-black">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <h5 className="flex items-center gap-2 text-[12px] font-black tracking-widest text-text-primary uppercase">
                      {step.title}{" "}
                      <ArrowRight
                        size={12}
                        className="text-accent opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </h5>
                    <p className="text-sm leading-relaxed text-text-secondary italic opacity-80">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-between gap-8 border-t border-border bg-black/20 p-8 sm:flex-row">
              <div className="flex items-center gap-4">
                <AlertOctagon className="text-red-500" size={20} />
                <p className="text-[10px] tracking-[0.2em] text-text-secondary uppercase">
                  Wyłączenie ciastek wyloguje Cię z Twoich kont.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Fingerprint className="text-accent" size={20} />
                <p className="text-[10px] tracking-[0.2em] text-text-secondary uppercase">
                  Zalecane użycie trybu Incognito / Private.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <section className="bg-bg-page flex flex-col items-center justify-between gap-6 rounded-[2.5rem] border border-border p-10 md:flex-row">
          <div className="flex items-center gap-6">
            <Smartphone className="text-accent" size={32} />
            <div>
              <h4 className="font-black tracking-tighter text-text-primary uppercase">
                Urządzenia Mobilne?
              </h4>
              <p className="text-xs text-text-secondary italic">
                Instrukcje dla systemów Android oraz iOS są analogiczne do
                wersji desktopowych.
              </p>
            </div>
          </div>
          <a
            href="mailto:kontakt@glazlukasz.pl"
            className="text-[11px] font-black tracking-widest text-accent uppercase hover:underline"
          >
            Potrzebuję pomocy technicznej
          </a>
        </section>
      </div>
    </LegalWrapper>
  );
}
