"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight, Shield } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink/ButtonLink";
import { stats } from "../data/aboutMe/statsData";
import { extendedTechStack } from "../data/aboutMe/extendedTechStackData";
import { workProcess } from "../data/aboutMe/workProcessData";

export default function AboutMePage() {
  return (
    <div className="bg-bg-page overflow-hidden pt-24 pb-16">
      <section className="mx-auto max-w-7xl px-4 py-12 lg:py-24">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-accent"
            >
              <Zap size={14} className="animate-pulse fill-accent" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase">
                Front-End Developer / Full-Stack Developer
              </span>
            </motion.div>

            <h1 className="text-5xl leading-[0.85] font-black tracking-tighter text-text-primary md:text-8xl">
              Zamieniam <br />{" "}
              <span className="text-accent underline decoration-accent/20">
                wizje
              </span>{" "}
              w <br /> rzeczywistość.
            </h1>

            <p className="mx-auto max-w-xl border-l-4 border-accent/30 pl-6 text-lg leading-relaxed font-medium text-text-secondary italic lg:mx-0">
              "Moim celem nie jest tylko stworzenie strony. Jest nim zbudowanie
              narzędzia, które stanie się fundamentem Twojego sukcesu w sieci."
            </p>

            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
              <ButtonLink
                href="/contact"
                variant="primary"
                size="lg"
                className="group px-8 font-bold uppercase"
              >
                Stwórzmy coś razem
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </ButtonLink>
              <ButtonLink
                href="/realizacje"
                variant="secondary"
                size="lg"
                className="px-8 font-bold uppercase"
              >
                Moje projekty
              </ButtonLink>
            </div>
          </div>

          <div className="relative flex-1">
            <div className="relative z-10 overflow-hidden rounded-[3.5rem] border border-border bg-bg-card p-4 shadow-[0_0_50px_-12px_rgba(var(--accent-rgb),0.3)]">
              <div className="from-bg-secondary flex aspect-[4/5] flex-col items-center justify-center rounded-[2.8rem] border border-border/50 bg-gradient-to-tr to-accent/5 p-8 text-center">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 text-[12rem] font-black text-accent/5 select-none">
                  IT
                </span>
                <div className="z-10 space-y-4">
                  <p className="text-2xl font-black tracking-widest text-text-primary uppercase">
                    Łukasz Głaz
                  </p>
                  <div className="mx-auto h-1 w-12 bg-accent" />
                  <p className="text-sm font-bold tracking-tighter text-text-secondary uppercase">
                    Front-End Developer
                  </p>
                  <p className="text-sm font-bold tracking-tighter text-text-secondary uppercase">
                    | Full-Stack Developer |
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-[80px]" />
            <div className="bg-secondary/10 absolute -top-20 -left-20 -z-10 h-64 w-64 rounded-full blur-[80px]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center rounded-3xl border border-border bg-bg-card p-8 text-center transition-all hover:border-accent/40"
            >
              <stat.icon
                size={24}
                className="mb-4 text-accent transition-transform group-hover:scale-110"
              />
              <span className="mb-1 text-3xl font-black text-text-primary">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold tracking-widest text-text-secondary uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-secondary/20 border-y border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-16 text-4xl font-black tracking-tight text-text-primary uppercase">
            Mój Arsenał Technologiczny
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {extendedTechStack.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[2.5rem] border border-border bg-bg-card p-8 transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <item.icon size={30} />
                </div>
                <h3 className="mb-4 font-black tracking-tighter text-text-primary uppercase">
                  {item.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-bg-page rounded-full border border-border px-3 py-1 text-[10px] font-bold text-text-secondary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black tracking-tighter text-text-primary uppercase">
            Jak pracuję?
          </h2>
          <p className="mt-4 text-text-secondary">
            Transparentny proces to klucz do sukcesu Twojego projektu.
          </p>
        </div>
        <div className="relative grid gap-12 md:grid-cols-4">
          <div className="absolute top-20 left-0 hidden h-px w-full bg-border lg:block" />

          {workProcess.map((step, idx) => (
            <div
              key={idx}
              className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-xl font-black text-black shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)]">
                {step.step}
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-primary">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed font-medium text-text-secondary">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="flex flex-col items-center justify-between gap-8 rounded-[3rem] bg-accent p-8 lg:flex-row lg:p-16">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl leading-tight font-black tracking-tighter text-black uppercase lg:text-5xl">
              Gotowy, by <br /> wynieść swój biznes <br /> na wyższy poziom?
            </h2>
            <p className="mt-6 flex items-center justify-center gap-2 text-sm font-bold tracking-widest text-black/80 uppercase lg:justify-start">
              <Shield size={18} /> Bezpieczeństwo i wydajność w standardzie
            </p>
          </div>
          <div className="shrink-0">
            <ButtonLink
              href="/contact"
              variant="clean"
              size="lg"
              className="rounded-2xl bg-black px-12 py-8 text-xl font-black text-white uppercase shadow-2xl hover:bg-black/90"
            >
              Kliknij i pogadajmy
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
