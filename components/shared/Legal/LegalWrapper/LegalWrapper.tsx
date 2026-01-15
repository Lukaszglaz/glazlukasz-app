"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface LegalWrapperProps {
  title: string;
  subtitleMax?: string;
  subtitleMin?: string;
  lastUpdate: string;
  children: React.ReactNode;
}

export const LegalWrapper = ({
  title,
  subtitleMax,
  subtitleMin,
  lastUpdate,
  children,
}: LegalWrapperProps) => {
  return (
    <div className="bg-bg-page min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-text-secondary uppercase transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} /> Powrót do strony głównej
        </Link>
        <header className="mb-16 border-b border-border pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl leading-none font-black tracking-tighter text-text-primary uppercase md:text-6xl"
          >
            {title}
          </motion.h1>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold tracking-widest text-accent uppercase italic">
                {subtitleMin || "Dokumentacja prawna"}
              </p>
              <p className="text-sm font-bold tracking-widest text-accent uppercase italic">
                {subtitleMax || "Dokumentacja prawna"}
              </p>
            </div>
            <p className="text-[10px] font-bold tracking-widest text-text-secondary uppercase">
              Ostatnia aktualizacja: {lastUpdate}
            </p>
          </div>
        </header>
        <article className="prose prose-invert prose-headings:text-text-primary prose-headings:uppercase prose-headings:tracking-tighter prose-headings:font-black prose-p:text-text-secondary prose-p:leading-relaxed prose-p:text-sm prose-li:text-text-secondary prose-li:text-sm prose-strong:text-accent prose-strong:font-bold max-w-none">
          {children}
        </article>
      </div>
    </div>
  );
};
