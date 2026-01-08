"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { HeadlineGroup } from "@/components/shared/HeadlineGroup/HeadlineGroup";
import { ContactFormCard } from "@/components/shared/ContactFormCard/ContactFormCard";
import { OfferCard } from "@/components/shared/OfferCard/SmallOfferCard";
import { ButtonLink } from "@/components/shared/ButtonLink/ButtonLink";
import { FAQSection } from "@/components/shared/FAQSection/FAQSection";

export default function ContactPage() {
  const Map = useMemo(
    () =>
      dynamic(
        () =>
          import("@/components/shared/Map/Map").then((mod) => mod.MapComponent),
        {
          ssr: false,
          loading: () => (
            <div className="bg-bg-surface border-color-border flex h-full w-full animate-pulse items-center justify-center rounded-2xl border">
              <p className="text-text-secondary">Ładowanie mapy... ⏳</p>
            </div>
          ),
        },
      ),
    [],
  );

  const contactDetails = [
    {
      title: "Napisz do mnie",
      description: "kontakt@glazlukasz.pl",
      icon: Mail,
    },
    {
      title: "Zadzwoń",
      // description: "+48 504-527-956",
      description: "+48 XXX-XXX-XXX",
      icon: Phone,
    },
    {
      title: "Lokalizacja",
      description: "Lublin, Polska",
      icon: MapPin,
    },
  ];

  return (
    <div className="xl:max-w-8xl mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <HeadlineGroup
          header="Skontaktuj się ze mną!"
          description="Masz pytania? Chcesz omówić projekt lub potrzebujesz więcej informacji na temat moich usług? Nie wahaj się skontaktować ze mną! Jestem tutaj, aby pomóc Ci w realizacji Twoich celów."
          className="mt-24"
        />
        <div className="ml-4">
          <ButtonLink variant="primary" href={"#"} className="mr-4">
            Napisz do mnie!
          </ButtonLink>
          <ButtonLink variant="clean" href={"/contact"}>
            Zobacz moją ofertę!
          </ButtonLink>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-3">
          {contactDetails.map((item, index) => (
            <OfferCard
              size="small"
              key={index}
              title={item.title}
              description={
                Array.isArray(item.description)
                  ? item.description.join(", ")
                  : item.description
              }
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2">
        <div className="bg-bg-surface border-color-border rounded-2xl border p-8 shadow-sm">
          <ContactFormCard
            showServices={true}
            showTerms={true}
            showSideContent={false}
          />
        </div>

        <div className="border-color-border relative isolate min-h-[500px] w-full overflow-hidden rounded-2xl border lg:h-auto">
          <h2 className="text-color-text-primary bg-bg-surface/70 pointer-events-none absolute top-6 right-6 z-999 rounded-lg px-4 py-2 text-xl font-semibold shadow-xl backdrop-blur-md">
            Mapa mojej lokalizacji
          </h2>

          <Map center={[51.2465, 22.5684]} zoom={11} />
        </div>
      </div>

      <div>
        <HeadlineGroup
          header="Oto najczęściej pojawiające się pytania dotyczące mojego procesu twórczego:"
          description=" Zapoznaj się z moim starannie przemyślanym procesem łączącym talent
          artystyczny z technologiczną precyzją. Każdy krok jest realizowany z
          pasją, aby dostarczyć witrynę, która wykracza poza oczekiwania."
          className="mt-24"
        />
        <FAQSection />
      </div>
    </div>
  );
}
