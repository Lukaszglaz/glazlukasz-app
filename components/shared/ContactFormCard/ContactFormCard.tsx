"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { Send, Check } from "lucide-react";
import clsx from "clsx";

import ContactImage from "@/assets/images/ContactFormCard/contact-write.jpg";
import { Button } from "@/components/shared/Button/Button";
import { InputBase } from "@/components/shared/InputBase/InputBase";

const CHAR_LIMIT = 500;

const AVAILABLE_SERVICES = [
  "Strony Wizytówki",
  "Sklepy Internetowe",
  "Aplikacje Webowe",
  "Pozycjonowanie SEO",
  "Hosting i Domena",
  "Wsparcie i Opieka",
  "Oprawa Graficzna",
  "Copywriting",
  "Analityka i Dane",
];

interface ContactFormProps {
  showServices?: boolean;
  showTerms?: boolean;
  showSideContent?: boolean;
}

export const ContactFormCard = ({
  showServices = false,
  showTerms = false,
  showSideContent = true,
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    imie: "",
    nazwisko: "",
    email: "",
    message: "",
    services: [] as string[],
    otherService: "",
    terms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [id]: (e.target as HTMLInputElement).checked,
      }));
      return;
    }
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.imie ||
      !formData.nazwisko ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("Wypełnij wymagane pola!");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Wiadomość wysłana!");
      setFormData({
        imie: "",
        nazwisko: "",
        email: "",
        message: "",
        services: [],
        otherService: "",
        terms: false,
      });
    }, 1000);
  };

  return (
    <div
      className={clsx(
        "grid items-start gap-4 lg:gap-8",
        showSideContent ? "lg:grid-cols-2" : "grid-cols-1",
      )}
    >
      <Toaster position="bottom-right" />

      {showSideContent && (
        <div className="flex flex-col space-y-3">
          <h2 className="text-color-text-primary text-xl font-extrabold">
            Napisz bezpośrednio
          </h2>
          <p className="text-color-text-secondary text-xs">
            Email:{" "}
            <a
              href="mailto:kontakt@glazlukasz.pl"
              className="text-color-accent font-semibold"
            >
              kontakt@glazlukasz.pl
            </a>
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-sm">
            <Image
              src={ContactImage}
              alt="Kontakt"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="w-full space-y-4">
        <h2 className="text-color-text-primary text-xl font-extrabold">
          Formularz kontaktowy
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <InputBase
              id="imie"
              label="Imię"
              value={formData.imie}
              onChange={handleChange}
              required
            />
            <InputBase
              id="nazwisko"
              label="Nazwisko"
              value={formData.nazwisko}
              onChange={handleChange}
              required
            />
          </div>
          <InputBase
            id="email"
            label="E-mail"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {showServices && (
            <div className="space-y-2">
              <p className="text-color-text-secondary text-md mb-6 font-bold">
                Wybierz usługi:
              </p>
              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {AVAILABLE_SERVICES.map((service) => {
                  const isSelected = formData.services.includes(service);
                  return (
                    <label
                      key={service}
                      className="group flex cursor-pointer items-center space-x-2.5"
                    >
                      <div
                        className={clsx(
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded border transition-all duration-200",
                          isSelected
                            ? "border-accent bg-accent/5"
                            : "border-border group-hover:border-accent",
                        )}
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={isSelected}
                          onChange={() => toggleService(service)}
                        />
                        <Check
                          className={clsx(
                            "text-color-accent h-4 w-4 transition-opacity",
                            isSelected ? "opacity-100" : "opacity-0",
                          )}
                        />
                      </div>
                      <span className="text-color-text-primary text-sm leading-tight">
                        {service}
                      </span>
                    </label>
                  );
                })}
              </div>
              <div className="pt-1">
                <InputBase
                  id="otherService"
                  label="Inna usługa..."
                  value={formData.otherService}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <InputBase
              id="message"
              label="Treść"
              required
              type="textarea"
              value={formData.message}
              onChange={handleChange}
              maxLength={CHAR_LIMIT}
            />
            <p className="text-color-text-secondary text-right text-[9px]">
              {formData.message.length}/{CHAR_LIMIT}
            </p>
          </div>

          {showTerms && (
            <label className="flex cursor-pointer items-start space-x-2.5">
              <div
                className={clsx(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all duration-200",
                  formData.terms
                    ? "border-accent bg-accent/5"
                    : "border-border",
                )}
              >
                <input
                  type="checkbox"
                  id="terms"
                  className="hidden"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                <Check
                  className={clsx(
                    "text-color-accent h-3.5 w-3.5 transition-opacity",
                    formData.terms ? "opacity-100" : "opacity-0",
                  )}
                />
              </div>
              <span className="text-color-text-secondary text-sm leading-[1.6]">
                Zgoda na przetwarzanie danych i polityka prywatności.
              </span>
            </label>
          )}

          <div className="flex justify-end pt-1">
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-1.5 text-[11px] tracking-wider uppercase"
            >
              {isSubmitting ? "..." : "Wyślij wiadomość"}{" "}
              <Send className="ml-2 h-3 w-3" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
