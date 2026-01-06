"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Send } from "lucide-react";
import clsx from "clsx";

import ContactImage from "@/assets/images/ContactFormCard/contact-write.jpg";
import { Button } from "@/components/shared/Button/Button";
import { InputBase } from "@/components/shared/InputBase/InputBase";

const CHAR_LIMIT = 500;

export const ContactFormCard = () => {
  type FormData = {
    imie: string;
    nazwisko: string;
    email: string;
    message: string;
  };

  const [formData, setFormData] = useState<FormData>({
    imie: "",
    nazwisko: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toastShownRef = useRef(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;

    if (id === "message") {
      const currentLength = value.length;

      if (currentLength >= CHAR_LIMIT && !toastShownRef.current) {
        toast.error(`Przekroczono limit ${CHAR_LIMIT} znaków!`);
        toastShownRef.current = true;
      } else if (currentLength < CHAR_LIMIT && toastShownRef.current) {
        toastShownRef.current = false;
      }
    }

    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.imie || !formData.email || !formData.message) {
      toast.error("Wypełnij wymagane pola!");
      setIsSubmitting(false);
      return;
    }

    if (formData.message.length > CHAR_LIMIT) {
      toast.error(`Wiadomość przekracza limit ${CHAR_LIMIT} znaków!`);
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Wiadomość wysłana!");
      setFormData({ imie: "", nazwisko: "", email: "", message: "" });
    }, 1000);
  };

  const messageCharCount = formData.message.length;

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="flex flex-col justify-start">
        <h2 className="text-color-text-primary mb-4 text-2xl font-extrabold sm:text-3xl">
          Kontakt
        </h2>
        <p className="text-color-text-secondary mb-6 max-w-md text-sm leading-relaxed">
          Jeśli chcesz się ze mną skontaktować, możesz wysłać wiadomość na adres
          <a
            href="mailto:kontakt@glazlukasz.pl"
            className="text-color-accent hover:text-color-accent-hover ml-1 font-semibold transition-colors duration-300"
          >
            kontakt@glazlukasz.pl
          </a>
          &nbsp;lub skorzystać z formularza kontaktowego.
        </p>

        <div className="mx-auto mt-2 w-full max-w-sm overflow-hidden rounded-xl lg:mx-0">
          <div className="relative h-0 w-full pb-[56.25%]">
            <Image
              src={ContactImage}
              alt="Kontakt"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute inset-0 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:mt-0">
        <h2 className="text-color-text-primary mb-8 text-2xl font-extrabold sm:text-3xl">
          Formularz zgłoszeniowy
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
            <div className="w-full sm:w-1/2">
              <InputBase
                id="imie"
                label="Imię"
                value={formData.imie}
                onChange={handleChange}
              />
            </div>
            <div className="w-full sm:w-1/2">
              <InputBase
                id="nazwisko"
                label="Nazwisko"
                value={formData.nazwisko}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-8">
            <InputBase
              id="email"
              label="E-mail"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <InputBase
              id="message"
              label="Treść Wiadomości: np. Zapytanie o Współpracę"
              type="textarea"
              value={formData.message}
              onChange={handleChange}
              maxLength={CHAR_LIMIT}
            />
            <p
              className={clsx(
                "mt-1 text-right text-xs",
                messageCharCount >= CHAR_LIMIT
                  ? "text-text-destructive"
                  : "text-color-text-secondary",
              )}
            >
              {messageCharCount}/{CHAR_LIMIT} znaków
            </p>
          </div>

          <div className="mt-8 flex justify-end pt-4">
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting || messageCharCount > CHAR_LIMIT}
              className="px-6 py-2 text-sm"
            >
              {isSubmitting ? "Wysyłanie..." : "Wyślij Wiadomość"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
