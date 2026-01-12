"use client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink/ButtonLink";
import clsx from "clsx";
import { projects } from "../data/realizations/realizationsData";

export default function RealizationsPage() {
  return (
    <div className="bg-bg-page overflow-x-hidden pt-24 pb-20">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-6 border-b border-border pb-12">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-accent"
          >
            <Sparkles size={18} />
            <span className="text-[11px] font-black tracking-[0.4em] uppercase">
              Portfolio Realizacji
            </span>
          </motion.div>
          <h1 className="text-5xl leading-[0.9] font-black tracking-tighter text-text-primary uppercase md:text-7xl">
            Wybrane{" "}
            <span className="text-accent underline decoration-accent/10">
              Projekty
            </span>
            .
          </h1>
          <p className="max-w-xl border-l-2 border-accent/20 pl-6 text-lg leading-relaxed font-medium text-text-secondary italic">
            Realizacje, w których technologia spotyka się z najwyższą estetyką
            wykonania.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl space-y-32 px-6 py-12">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={clsx(
              "flex flex-col gap-12 lg:items-center",
              idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
            )}
          >
            <div className="group relative flex-[1.2]">
              <div className="absolute -inset-2 rounded-[2.5rem] bg-accent/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-bg-card shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="from-bg-page/60 absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-40" />
                <div className="absolute top-6 left-6 flex gap-3">
                  {Object.entries(project.metrics).map(([key, val]) => (
                    <div
                      key={key}
                      className="flex min-w-[50px] flex-col items-center rounded-2xl border border-border bg-bg-card/95 px-3 py-2 backdrop-blur-md"
                    >
                      <span className="text-sm font-black tracking-tighter text-accent">
                        {val}
                      </span>
                      <span className="text-[8px] font-black text-text-secondary uppercase">
                        {key}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-8 lg:px-10">
              <div className="space-y-4">
                <p className="text-xs leading-none font-black tracking-[0.2em] text-accent uppercase">
                  {project.category}
                </p>
                <h3 className="text-4xl leading-[1.1] font-black tracking-tighter text-text-primary uppercase md:text-5xl">
                  {project.title}
                </h3>
                <p className="max-w-md text-base leading-relaxed font-medium text-text-secondary italic md:text-lg">
                  {project.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-border bg-bg-card px-3 py-1.5 text-[10px] font-black tracking-widest text-text-primary uppercase transition-colors group-hover:border-accent/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-8 pt-4">
                <a
                  href={project.link}
                  className="group/link flex items-center gap-2 text-xs font-black tracking-[0.3em] text-text-primary uppercase transition-all hover:text-accent"
                >
                  Live Preview{" "}
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover/link:rotate-45"
                  />
                </a>
                <a
                  href={project.github}
                  className="scale-125 text-text-secondary transition-colors hover:text-accent"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
      <section className="mx-auto max-w-7xl border-t border-border px-6 py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              q: "Kod na własność",
              a: "Otrzymujesz pełne prawa autorskie do stworzonego kodu oraz pełny dostęp do repozytorium projektu.",
            },
            {
              q: "Standardy SEO",
              a: "Każdy projekt buduję z myślą o Core Web Vitals, zapewniając najwyższe pozycje w wyszukiwarkach.",
            },
            {
              q: "Opieka techniczna",
              a: "Zapewniam pełne wsparcie powdrożeniowe, aktualizacje i pomoc techniczną przez pierwsze 3 miesiące darmowo.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="group rounded-[2.5rem] border border-border bg-bg-card p-10 transition-all hover:border-accent/30"
            >
              <CheckCircle2
                className="mb-6 text-accent transition-transform group-hover:scale-110"
                size={24}
              />
              <h3 className="mb-4 text-xs font-black tracking-widest text-text-primary uppercase">
                {faq.q}
              </h3>
              <p className="text-sm leading-relaxed font-medium text-text-secondary">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="group relative overflow-hidden rounded-[4rem] bg-accent p-16 text-center md:p-24">
          <div className="relative z-10 space-y-10">
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-black uppercase lg:text-7xl">
              Zacznijmy budować <br /> Twoją{" "}
              <span className="italic underline decoration-black/20">
                przewagę
              </span>
              .
            </h2>
            <ButtonLink
              href="/contact"
              variant="primary"
              className="rounded-2xl bg-black px-12 py-6 text-sm font-black tracking-[0.2em] text-white uppercase shadow-2xl transition-transform hover:scale-105"
            >
              Darmowa Konsultacja
            </ButtonLink>
          </div>
          <Zap
            className="absolute top-10 right-10 -rotate-12 text-black/5"
            size={240}
          />
          <ShieldCheck
            className="absolute bottom-10 left-10 rotate-12 text-black/5"
            size={180}
          />
        </div>
      </section>
    </div>
  );
}
