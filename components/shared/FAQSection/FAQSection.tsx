"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { faqSection } from "@/app/data/shared/faqSection";

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {faqSection.map((item, index) => (
          <div key={index} className="flex flex-col">
            <button
              onClick={() => toggleItem(index)}
              className={clsx(
                "flex w-full items-center justify-between rounded-2xl border-2 p-5 text-left transition-all duration-300",
                activeIndex === index
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/50",
              )}
            >
              <span className="text-color-text-primary pr-4 text-sm leading-tight font-bold">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-color-text-secondary h-5 w-5 shrink-0" />
              </motion.div>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="text-color-text-secondary p-5 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
