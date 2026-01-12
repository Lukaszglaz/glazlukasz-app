"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { faqSection } from "@/app/data/shared/faqData";

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      {/* Grid: 
          - 1 kolumna na mobile (domyślnie)
          - 2 kolumny od md (tablet/laptop)
          - gap-4 dla ciasnego, nowoczesnego wyglądu
      */}
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
        {faqSection.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className={clsx(
                "h-fit overflow-hidden rounded-2xl border-2 transition-all duration-300",
                isOpen
                  ? "border-accent bg-accent/5 shadow-md"
                  : "border-border bg-transparent hover:border-accent/30",
              )}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span
                  className={clsx(
                    "pr-4 text-sm font-bold transition-colors duration-300 md:text-base",
                    isOpen ? "text-accent" : "text-color-text-primary",
                  )}
                >
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={clsx(
                    "shrink-0 rounded-full p-1",
                    isOpen
                      ? "bg-accent text-white"
                      : "bg-gray-100 text-gray-500",
                  )}
                >
                  <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="text-color-text-secondary border-t border-accent/10 bg-white/40 p-5 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
