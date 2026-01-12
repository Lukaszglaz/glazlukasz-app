"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Info,
  Star,
  ShieldCheck,
  MousePointerClick,
} from "lucide-react";
import clsx from "clsx";
import { ButtonLink } from "@/components/shared/ButtonLink/ButtonLink";
import { PLANS } from "@/app/data/services/pricing";

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [activePlan, setActivePlan] = useState(PLANS[1]);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handlePlanChange = (plan: (typeof PLANS)[0]) => {
    setActivePlan(plan);
    if (window.innerWidth < 1024 && detailsRef.current) {
      const headerOffset = 100;
      const elementPosition =
        detailsRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 pt-4 pb-24">
      <div className="mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2"
        >
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-xs font-bold tracking-wider text-accent uppercase">
            Oferta limitowana: Buduję aktualne portfolio
          </span>
        </motion.div>

        <h2 className="text-color-text-primary mb-6 text-4xl font-black tracking-tight md:text-5xl">
          Wybierz model współpracy
        </h2>

        <p className="text-color-text-secondary mx-auto mb-10 max-w-2xl text-sm leading-relaxed md:text-base">
          Stawiam na jakość, nie na ilość. Obecnie oferuję preferencyjne warunki
          cenowe, ponieważ zależy mi na stworzeniu wybitnych case studies do
          mojego nowego portfolio.
        </p>

        <div className="relative mt-8 flex flex-col items-center">
          <div className="absolute -top-8 flex animate-pulse items-center gap-1.5 text-[10px] font-bold tracking-tight text-accent uppercase lg:hidden">
            <MousePointerClick size={12} /> Zmień rozliczenie
          </div>
          <div className="flex items-center justify-center gap-4">
            <span
              className={clsx(
                "text-sm font-medium transition-colors",
                !isYearly
                  ? "text-color-text-primary"
                  : "text-color-text-secondary",
              )}
            >
              Miesięcznie
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative h-7 w-14 rounded-full bg-border p-1 transition-colors duration-300"
            >
              <motion.div
                animate={{ x: isYearly ? 28 : 0 }}
                className="h-5 w-5 rounded-full bg-accent shadow-sm"
              />
            </button>
            <span
              className={clsx(
                "text-sm font-medium transition-colors",
                isYearly
                  ? "text-color-text-primary"
                  : "text-color-text-secondary",
              )}
            >
              Rocznie{" "}
              <span className="font-bold text-accent">(2 msc GRATIS)</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col overflow-hidden rounded-[2.5rem] border border-border bg-bg-card shadow-2xl lg:flex-row">
        <div className="bg-bg-secondary flex flex-col gap-4 border-border p-6 lg:w-1/3 lg:border-r">
          <div className="mb-2 flex items-center justify-between px-4">
            <p className="text-color-text-secondary text-xs font-bold tracking-widest uppercase">
              Pakiety
            </p>
            <span className="flex animate-bounce items-center gap-1 text-[10px] font-bold tracking-tighter text-accent uppercase lg:hidden">
              <MousePointerClick size={12} /> Kliknij i sprawdź
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {PLANS.map((plan) => {
              const isSelected = activePlan.id === plan.id;
              return (
                <button
                  key={plan.id}
                  onClick={() => handlePlanChange(plan)}
                  className={clsx(
                    "group relative flex flex-col overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300",
                    isSelected
                      ? "scale-[1.02] border-accent bg-accent text-white shadow-lg shadow-accent/20"
                      : "border-border bg-bg-card/50 hover:border-accent/30 hover:bg-accent/5",
                  )}
                >
                  <div
                    className={clsx(
                      "absolute top-0 left-0 h-full w-1 transition-all duration-300",
                      isSelected
                        ? "w-1.5 bg-white/30"
                        : "bg-accent/20 group-hover:bg-accent",
                    )}
                  />

                  <div className="flex w-full items-start justify-between">
                    <div className="flex flex-col">
                      <span className="text-lg leading-tight font-bold">
                        {plan.title}
                      </span>
                      <span
                        className={clsx(
                          "mt-1 text-xs transition-colors",
                          isSelected
                            ? "text-white/80"
                            : "text-color-text-secondary",
                        )}
                      >
                        {plan.id === "custom"
                          ? "Wycena indywidualna"
                          : `Od ${plan.priceMonthly} zł / msc`}
                      </span>
                    </div>
                    {!isSelected && (
                      <div className="rounded-full bg-accent/10 p-1.5 text-accent transition-transform group-hover:translate-x-1">
                        <ArrowRight size={16} />
                      </div>
                    )}
                  </div>

                  {!isSelected && (
                    <div className="mt-3 flex items-center gap-1 text-[9px] font-bold text-accent/70 uppercase lg:hidden">
                      <Check size={10} /> Wybierz ten pakiet
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-auto space-y-3 pt-6">
            <div className="rounded-2xl border border-accent/10 bg-accent/5 p-4">
              <div className="flex gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-accent" />
                <p className="text-color-text-secondary text-[10px] leading-tight font-bold uppercase">
                  Gwarancja jakości: Każda strona oparta o serwery LiteSpeed i
                  czysty kod.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-bg-card/50 p-4">
              <div className="flex gap-3">
                <Info className="h-5 w-5 shrink-0 text-text-secondary" />
                <div className="space-y-1">
                  <p className="text-color-text-secondary text-[10px] leading-tight font-bold uppercase">
                    Informacja o subskrypcji
                  </p>
                  <p className="text-[9px] leading-relaxed text-text-secondary uppercase">
                    Plany na min. 12 msc. Wcześniejsza rezygnacja wiąże się z
                    opłatą za wdrożenie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={detailsRef}
          className="relative flex flex-col p-8 lg:w-2/3 lg:p-14"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlan.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex h-full flex-col"
            >
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="max-w-md">
                  <h3 className="text-color-text-primary text-3xl font-black">
                    {activePlan.title}
                  </h3>
                  <p className="text-color-text-secondary mt-2">
                    {activePlan.description}
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-5xl font-black text-accent">
                    {activePlan.id === "custom"
                      ? "???"
                      : isYearly
                        ? activePlan.priceYearly
                        : activePlan.priceMonthly}
                    <span className="text-color-text-secondary ml-2 text-lg font-bold">
                      zł
                    </span>
                  </div>
                  <p className="text-color-text-secondary text-sm font-medium tracking-tighter uppercase">
                    netto / {isYearly ? "rok" : "miesiąc"}
                  </p>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
                {activePlan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-bg-secondary flex items-center gap-3 rounded-xl border border-border p-4"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-color-text-primary text-sm font-bold">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 lg:pt-12">
                <ButtonLink
                  href="#contact-form"
                  variant="primary"
                  className={clsx(
                    "group flex w-full items-center justify-center gap-2 py-4 text-base font-black uppercase shadow-xl transition-all lg:gap-3 lg:py-6 lg:text-lg",
                  )}
                >
                  <span className="truncate">
                    {activePlan.id === "custom"
                      ? "Zapytaj o wycenę"
                      : "Rozpocznij współpracę"}
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-2 lg:h-6 lg:w-6" />
                </ButtonLink>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
