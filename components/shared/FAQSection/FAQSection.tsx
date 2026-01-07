"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const FAQ_ITEMS = [
    {
      question: "Od czego zaczynamy proces tworzenia Twojej nowej strony?",
      answer:
        "Naszą współpracę rozpoczynamy od wnikliwej analizy Twoich potrzeb i celów biznesowych. Następnie przygotowuję strategię, gromadzę niezbędne materiały oraz opracowuję makietę funkcjonalną, która stanowi fundament profesjonalnego projektu graficznego.",
    },
    {
      question:
        "Czy muszę dostarczyć własne grafiki, czy zajmujesz się tym Ty?",
      answer:
        "Masz pełną dowolność – możesz przekazać mi własne materiały lub zdać się na moje wsparcie. W ramach usług wyszukuję i dobieram wysokiej jakości zasoby wizualne, które najlepiej oddadzą charakter Twojej marki i przyciągną uwagę odbiorców.",
    },
    {
      question:
        "Jak wygląda opieka nad projektem po jego oficjalnym zakończeniu?",
      answer:
        "Moje wsparcie nie kończy się w momencie publikacji strony. Po zakończeniu prac możesz liczyć na uwzględnienie zmian zgodnie z naszymi ustaleniami. Zazwyczaj oferuję również dedykowaną opiekę techniczną, dbając o stabilne działanie Twojej witryny.",
    },
    {
      question:
        "Czy istnieje możliwość rozliczenia ratalnego za wykonane usługi?",
      answer:
        "Aktualnie preferuję standardowe formy płatności, jednak stale rozwijam swoją ofertę i nie wykluczam wprowadzenia systemu ratalnego w bliskiej przyszłości, aby jeszcze lepiej dopasować się do możliwości moich klientów.",
    },
    {
      question:
        "Czy moja strona będzie zintegrowana z mediami społecznościowymi?",
      answer:
        "Zdecydowanie tak. Implementuję pełną integrację z wybranymi platformami społecznościowymi, co pozwala na płynną komunikację z użytkownikami, budowanie społeczności i skuteczne zwiększanie zasięgów Twojego biznesu.",
    },
    {
      question:
        "Czy otrzymam instrukcję, jak samodzielnie zarządzać treścią na stronie?",
      answer:
        "Tak, po sfinalizowaniu projektu otrzymasz ode mnie przejrzystą instrukcję obsługi. Dzięki niej będziesz mógł z łatwością samodzielnie aktualizować teksty czy zdjęcia, zachowując pełną kontrolę nad zawartością swojej witryny.",
    },
    {
      question:
        "Czy oferujesz kompleksową optymalizację pod kątem wyszukiwarek (SEO)?",
      answer:
        "Obecnie intensywnie pracuję nad rozszerzeniem oferty o zaawansowane usługi SEO. Już wkrótce będę mógł zaproponować pełną optymalizację, która pomoże Twojej stronie zająć najwyższe pozycje w wynikach wyszukiwania.",
    },
    {
      question:
        "Gdzie mogę zapoznać się z Twoimi dotychczasowymi realizacjami?",
      answer:
        "Serdecznie zapraszam Cię do odwiedzenia sekcji portfolio. Znajdziesz tam moje wybrane projekty, które najlepiej prezentują moje umiejętności techniczne, zmysł estetyczny oraz różnorodność branż, dla których pracuję.",
    },
    {
      question:
        "Ile czasu zazwyczaj trwa realizacja profesjonalnej strony internetowej?",
      answer:
        "Standardowy czas produkcji wynosi od 2 do 3 tygodni. Termin ten jest jednak elastyczny i zależy od stopnia złożoności projektu oraz szybkości przepływu informacji – zawsze dążę do tego, by dostarczyć gotowy produkt w możliwie najkrótszym czasie.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FAQ_ITEMS.map((item, index) => (
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
