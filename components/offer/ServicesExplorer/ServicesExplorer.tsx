"use client";

import * as Icons from "lucide-react";
import { LucideIcon, X, CheckCircle2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export const ServicesExplorer = () => {
  const servicesData = [
    {
      id: "strony-www",
      title: "Strony WWW",
      icon: "Monitor",
      shortDescription:
        "Tworzę nowoczesne i responsywne strony internetowe, które stają się Twoją najlepszą wizytówką w sieci.",
      fullDescription:
        "Projektuję witryny skrojone pod Twoje potrzeby – od prostych stron wizytówkowych po rozbudowane portale. Skupiam się na szybkości działania, intuicyjnej nawigacji (UX) oraz pełnej responsywności.",
      features: [
        "Projektowanie UI/UX",
        "Responsywność",
        "Optymalizacja szybkości",
      ],
    },
    {
      id: "seo",
      title: "Pozycjonowanie SEO",
      icon: "TrendingUp",
      shortDescription:
        "Zwiększam widoczność Twojej marki w wyszukiwarkach, przyciągając realnych klientów.",
      fullDescription:
        "SEO to nie tylko słowa kluczowe. To kompleksowa optymalizacja techniczna i treściowa, która pozwoli Ci wyprzedzić konkurencję w Google i zbudować trwały autorytet strony.",
      features: [
        "Audyt techniczny",
        "Link Building",
        "Analiza słów kluczowych",
      ],
    },
    {
      id: "hosting",
      title: "Hosting i Domeny",
      icon: "Server",
      shortDescription:
        "Zapewniam stabilne fundamenty dla Twojego biznesu: niezawodny hosting i bezpieczne domeny.",
      fullDescription:
        "Oferuję pomoc w wyborze i konfiguracji serwerów oraz rejestracji domen. Dbamy o to, aby Twoja strona była dostępna 24/7 i posiadała certyfikat SSL.",
      features: ["Certyfikat SSL", "Backup 24h", "Wsparcie techniczne"],
    },
    {
      id: "aplikacje",
      title: "Aplikacje Internetowe",
      icon: "Smartphone",
      shortDescription:
        "Tworzę dedykowane narzędzia online, które automatyzują procesy i rozwijają Twój biznes.",
      fullDescription:
        "Projektuję i wdrażam zaawansowane aplikacje webowe dostosowane do specyfiki Twojej firmy – od systemów rezerwacji po panele zarządzania danymi.",
      features: [
        "Systemy dedykowane",
        "Automatyzacja",
        "Bezpieczeństwo danych",
      ],
    },
    {
      id: "bazy-danych",
      title: "Bazy danych i E-mailing",
      icon: "Mail",
      shortDescription:
        "Skuteczne zarządzanie danymi i profesjonalne kampanie mailingowe w jednym miejscu.",
      fullDescription:
        "Pomagam uporządkować informacje dzięki wydajnym bazom danych oraz wdrażam systemy e-mailingowe do budowania relacji z klientami.",
      features: ["Kampanie Newsletter", "Zarządzanie bazami", "Analiza danych"],
    },
    {
      id: "grafika",
      title: "Oprawa graficzna",
      icon: "Palette",
      shortDescription:
        "Buduję spójny i profesjonalny wizerunek Twojej marki, który przyciąga wzrok.",
      fullDescription:
        "Tworzę design, który sprzedaje. Od nowoczesnych layoutów stron, przez logotypy, aż po materiały promocyjne i identyfikację wizualna.",
      features: [
        "Logotypy",
        "Identyfikacja wizualna",
        "Materiały Social Media",
      ],
    },
    {
      id: "wsparcie",
      title: "Wsparcie techniczne",
      icon: "Headphones",
      shortDescription:
        "Kompleksowa opieka nad Twoimi projektami, abyś mógł skupić się na rozwoju firmy.",
      fullDescription:
        "Szybka pomoc w nagłych wypadkach, regularne aktualizacje systemów oraz stały monitoring bezpieczeństwa Twojej infrastruktury IT.",
      features: ["Monitoring 24/7", "Aktualizacje", "Szybka reakcja"],
    },
  ];

  const searchParams = useSearchParams();
  const [activeId, setActiveId] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const serviceFromUrl = searchParams.get("service");
    if (serviceFromUrl) {
      setActiveId(serviceFromUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    if (activeId) {
      const headerOffset = 120;
      const element = detailsRef.current;

      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [activeId]);

  const activeService = servicesData.find((s) => s.id === activeId);

  return (
    <section
      className="mx-auto flex min-h-[1000px] max-w-7xl flex-col items-start gap-8 p-4 lg:flex-row lg:p-8"
      id="oferta"
    >
      <div
        className={`grid shrink-0 grid-cols-1 gap-4 transition-all duration-500 ${activeId ? "lg:sticky lg:top-32 lg:w-[400px]" : "w-full md:grid-cols-2 lg:grid-cols-3"}`}
      >
        {servicesData.map((service) => {
          const IconComponent = (Icons as any)[service.icon] as LucideIcon;
          const isActive = activeId === service.id;

          return (
            <div
              key={service.id}
              onClick={() => setActiveId(service.id)}
              className={`group cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
                isActive
                  ? "border-accent bg-accent/5 shadow-lg ring-1 ring-accent/20"
                  : "hover:bg-bg-page border-border bg-bg-card hover:border-accent/40"
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`shrink-0 rounded-lg p-2 transition-colors ${isActive ? "bg-accent text-black" : "bg-bg-page text-accent group-hover:bg-accent/10"}`}
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </div>
                  <h3
                    className={`text-lg leading-tight font-bold transition-colors ${isActive ? "text-accent" : "text-text-primary"}`}
                  >
                    {service.title}
                  </h3>
                </div>
                <p
                  className={`line-clamp-2 text-sm leading-relaxed transition-colors ${isActive ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"}`}
                >
                  {service.shortDescription}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        ref={detailsRef}
        className={`w-full flex-1 transition-all duration-500 ${activeId ? "translate-x-0 opacity-100 lg:sticky lg:top-32" : "pointer-events-none hidden translate-x-4 opacity-0 lg:block"}`}
      >
        {activeService && (
          <div className="animate-in fade-in slide-in-from-right-8 rounded-3xl border border-accent/20 bg-bg-card p-8 shadow-2xl lg:p-10">
            <div className="mb-8 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-accent/10 p-3 text-accent">
                  {React.createElement(
                    (Icons as any)[activeService.icon] as LucideIcon,
                    { size: 32 },
                  )}
                </div>
                <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
                  {activeService.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveId(null)}
                className="rounded-full p-2 text-text-secondary transition-colors hover:bg-accent/10 hover:text-accent"
              >
                <X size={28} />
              </button>
            </div>

            <div className="space-y-6">
              <p className="text-xl leading-snug font-semibold text-accent">
                {activeService.shortDescription}
              </p>
              <p className="border-l-2 border-accent/30 pl-6 text-lg leading-relaxed text-text-secondary italic">
                {activeService.fullDescription}
              </p>

              <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2">
                {activeService.features.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-bg-page/50 group flex items-center gap-3 rounded-xl border border-border/50 p-4 transition-colors hover:border-accent/30"
                  >
                    <CheckCircle2 size={18} className="shrink-0 text-accent" />
                    <span className="text-sm font-bold text-text-primary">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-4 w-full rounded-2xl bg-accent py-5 font-extrabold text-black uppercase shadow-lg transition-all hover:scale-[1.01] hover:bg-accent-hover active:scale-[0.99]">
                Porozmawiajmy o projekcie!
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
