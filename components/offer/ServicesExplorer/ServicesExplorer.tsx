"use client";

import * as Icons from "lucide-react";
import { LucideIcon, X, CheckCircle2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { servicesData } from "@/app/data/services/servicesExplorerData";
import { Button } from "@/components/shared/Button/Button";
import { ButtonLink } from "@/components/shared/ButtonLink/ButtonLink";

export const ServicesExplorer = () => {
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
              <Button
                variant="clean"
                size="sm"
                onClick={() => setActiveId(null)}
                className="rounded-full p-2 text-text-secondary hover:bg-accent/10"
              >
                <X size={28} />
              </Button>
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

              <ButtonLink
                href="/contact"
                variant="primary"
                size="lg"
                fullWidth
                className="mt-4 py-5 font-extrabold uppercase shadow-lg"
              >
                Porozmawiajmy o projekcie!
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
