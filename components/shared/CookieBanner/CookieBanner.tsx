"use client";

import { useState, useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (status: "granted" | "denied") => {
    localStorage.setItem("cookie_consent", status);
    sendGTMEvent({
      event: "consent_update",
      analytics_storage: status,
      ad_storage: status,
    });
    setIsVisible(false);
  };

  if (!mounted || !isVisible) return null;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 fixed right-4 bottom-4 left-4 z-100 m-auto max-w-3xl rounded-2xl border border-border bg-bg-card p-6 shadow-2xl">
      <div className="flex flex-col gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="text-left text-lg font-bold text-text-primary">
              Dbamy o Twoją prywatność
            </h3>
          </div>
          <p className="text-left text-sm leading-relaxed text-text-secondary">
            Używamy plików cookies, aby analizować ruch na stronie i
            dostosowywać treści. Klikając „Akceptuję”, wyrażasz zgodę na ich
            użycie zgodnie z naszymi dokumentami:
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium">
            <Link
              href="/legal/privacy-policy"
              className="text-accent hover:underline"
            >
              Polityka prywatności
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/legal/cookies-policy"
              className="text-accent hover:underline"
            >
              Polityka cookies
            </Link>
            <span className="text-border">|</span>
            <Link href="/legal/terms" className="text-accent hover:underline">
              Regulamin
            </Link>
            <span className="text-border">|</span>
            <Link href="/legal/gdpr" className="text-accent hover:underline">
              RODO
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/legal/how-to-disabled-cookies"
              className="text-accent hover:underline"
            >
              Jak wyłączyć pliki cookie
            </Link>
          </div>
        </div>
        <div className="flex justify-end gap-3 border-t border-border pt-4">
          <button
            onClick={() => handleConsent("denied")}
            className="rounded-xl border border-border px-4 py-2 text-sm text-text-primary transition-colors hover:bg-white/5"
          >
            Odrzuć
          </button>
          <button
            onClick={() => handleConsent("granted")}
            className="rounded-xl bg-accent px-6 py-2 text-sm font-bold text-black transition-opacity hover:opacity-90"
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
};
