import { ButtonLink } from "@/components/shared/ButtonLink/ButtonLink";
import { ContactCTA } from "@/components/shared/ContactCTA/ContactCTA";
import { HeadlineGroup } from "@/components/shared/HeadlineGroup/HeadlineGroup";
import { OfferCard } from "@/components/shared/OfferCard/SmallOfferCard";
import { PartnerBenefitCard } from "@/components/shared/PartnerBenefitCard/ParterBenefitCard";
import { ShowcaseCard } from "@/components/shared/ShowcaseCard/ShowcaseCard";
import { Handshake, Layout, Palette, Zap } from "lucide-react";
import { ContactFormCard } from "@/components/shared/ContactFormCard/ContactFormCard";
import { offerData } from "./data/homePage/offerData";
import { offerDataLarge } from "./data/homePage/offerDataLarge";
import { benefitData } from "./data/homePage/benefitData";
import { showcaseData } from "./data/homePage/showcaseData";

export default function Home() {
  const processData = [
    {
      stepNumber: 1,
      title: "Strategia i Weryfikacja Koncepcji",
      description:
        "Rozpoczynamy od głębokiej analizy celu i weryfikacji pomysłów. Odkrywam unikalne perspektywy i podejścia, które strategicznie wzmocnią Twój projekt na rynku.",
      variant: "primary",
      heightVariant: "mediumMax",
    },
    {
      stepNumber: 2,
      title: "Projektowanie UI/UX i Wyróżnianie Marki",
      description:
        "Ożywiam Twoją wizję przy pomocy kreatywnego designu i wizualnej narracji. Tworzę dzieła, które nie tylko oddają wartości Twojej marki, ale angażują odbiorców i wybijają się na tle konkurencji.",
      variant: "secondary",
      heightVariant: "medium",
    },
    {
      stepNumber: 3,
      title: "Skalowalne Wdrożenie i Solidność Kodu",
      description:
        "Wykorzystuję najnowsze technologie do przeniesienia projektu na nowy poziom. Zapewniam zaawansowane narzędzia, tworząc interaktywne efekty i wydajną, skalowalną strukturę kodu.",
      variant: "tertiary",
      heightVariant: "low",
    },
    {
      stepNumber: 4,
      title: "Optymalizacja, Wdrożenie i Stałe Wsparcie",
      description:
        "Dokładnie analizuję i dopasowuję projekt do Twoich oczekiwań. Otrzymujesz gotową stronę WWW/aplikację, a także kompleksowe wsparcie techniczne i opiekę po wdrożeniu.",
      variant: "quaternary",
      heightVariant: "veryLow",
    },
  ] as const;

  return (
    <div className="xl:max-w-8xl mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <HeadlineGroup
          header="Stworzę stronę internetową dla Ciebie!"
          description="Specjalizuję się w tworzeniu nowoczesnych stron WWW i aplikacji. Zapewniam kompleksowe wsparcie, od strategii SEO po pełną obsługę techniczną, aby Twój projekt odniósł sukces."
          className="mt-24"
        />
        <div className="ml-4">
          <ButtonLink variant="primary" href={"/services"} className="mr-4">
            Zobacz moją ofertę!
          </ButtonLink>
          <ButtonLink variant="clean" href={"/contact"}>
            Napisz do mnie!
          </ButtonLink>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-extrabold md:text-3xl">
          Co oferuję
        </h2>
        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-3">
          {offerData.map((offer, index) => (
            <OfferCard
              size="small"
              key={index}
              title={offer.title}
              description={offer.description}
              icon={offer.icon}
            />
          ))}
        </div>
      </div>

      <div>
        <HeadlineGroup
          header="Wyróżnij Swój Biznes. Zaprojektujmy Sukces Online."
          description="Tworzę nowoczesne strony i aplikacje, które nie tylko przyciągają wzrok, ale przede wszystkim generują wyniki. Zainspirujmy Twoich klientów i przekształćmy ich w lojalne grono odbiorców."
        />
      </div>

      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {offerDataLarge.map((offer, index) => (
            <OfferCard
              size="large"
              key={index}
              title={offer.title}
              description={offer.description}
              icon={offer.icon}
            />
          ))}
        </div>
      </div>

      <div>
        <HeadlineGroup
          header="Gwarantowane Korzyści: Konkretne Rezultaty, Trwały Wzrost."
          description="Od pierwszego kontaktu koncentruję się wyłącznie na Twoich celach biznesowych. Otrzymujesz efektywne strategie i kompletne wsparcie online: od profesjonalnego projektu strony, przez wdrożenie, po opiekę techniczną. Twój rozwój jest moim priorytetem."
        />
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap justify-center gap-6 lg:justify-between">
          {benefitData.map((benefit, index) => (
            <PartnerBenefitCard
              key={index}
              stepNumber={benefit.stepNumber}
              title={benefit.title}
              description={benefit.description}
              variant={benefit.variant}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
            />
          ))}
        </div>
      </div>

      <div className="mt-20">
        <ContactCTA
          title={"Masz Pytania? Zróbmy Pierwszy Krok!"}
          description={
            "Zacznijmy od bezpłatnej konsultacji. Opisz swój projekt, a ja wskażę najbardziej efektywne rozwiązania. Otrzymujesz pewność, że projekt będzie dopasowany do Twoich celów biznesowych."
          }
          buttonLabel={"Omówmy Twój Projekt"}
        />
      </div>

      <div className="mt-20">
        <HeadlineGroup
          header="Zobacz, Jak Rozwijam Biznesy. Moje Najnowsze Projekty."
          description="Przejrzyj wybrane projekty, które przyniosły klientom konkretne i mierzalne rezultaty. To praktyczne przykłady tego, jak efektywny design i solidne wdrożenie mogą podnieść wartość Twojej marki."
        />
      </div>

      <div>
        <div className="pb-16 md:pb-24">
          {showcaseData.map((item, index) => (
            <ShowcaseCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              reverse={item.reverse}
              href={item.href}
            />
          ))}
        </div>
      </div>

      <div>
        <HeadlineGroup
          header=" Proces Tworzenia Stron i Aplikacji Skrojony na Miarę Sukcesu"
          description="Odkryj iteracyjny proces, który zamienia wizję w funkcjonalny sukces. Łączymy precyzyjną analizę potrzeb użytkowników z najwyższą jakością designu, aby dostarczyć cyfrowe doświadczenia, które angażują, konwertują i inspirują do działania."
        />
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap justify-center gap-6 lg:justify-between">
          {processData.map((process, index) => (
            <PartnerBenefitCard
              key={index}
              stepNumber={process.stepNumber}
              title={process.title}
              description={process.description}
              variant={process.variant}
              heightVariant={process.heightVariant}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <HeadlineGroup
          header="Skontaktuj się ze mną!"
          description="Masz pytania lub chcesz omówić swój projekt? Skontaktuj się ze mną, a chętnie pomogę Ci w realizacji Twoich celów online."
        />
      </div>

      <div className="mt-4 mb-10 p-4">
        <ContactFormCard />
      </div>
    </div>
  );
}
