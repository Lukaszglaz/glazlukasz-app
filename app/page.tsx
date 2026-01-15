import { ButtonLink } from "@/components/shared/ButtonLink/ButtonLink";
import { ContactCTA } from "@/components/shared/ContactCTA/ContactCTA";
import { HeadlineGroup } from "@/components/shared/HeadlineGroup/HeadlineGroup";
import { OfferCard } from "@/components/shared/OfferCard/SmallOfferCard";
import { PartnerBenefitCard } from "@/components/shared/PartnerBenefitCard/ParterBenefitCard";
import { ShowcaseCard } from "@/components/shared/ShowcaseCard/ShowcaseCard";
import { ContactFormCard } from "@/components/shared/ContactFormCard/ContactFormCard";
import { offerData } from "./data/homePage/offerData";
import { offerDataLarge } from "./data/homePage/offerDataLarge";
import { benefitData } from "./data/homePage/benefitData";
import { showcaseData } from "./data/homePage/showcaseData";
import { processData } from "./data/homePage/processData";
import { LegalWrapper } from "@/components/shared/LegalWrapper/LegalWrapper";

export default function Home() {
  return (
    <div className="xl:max-w-8xl mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <HeadlineGroup
          header="Buduję strony i aplikacje, które uwalniają Twój czas i wyróżniają Twój biznes."
          description="Wiem, że technologia potrafi przytłoczyć. Dlatego biorę Twój pomysł i zmieniam go w gotową stronę, pilnując każdego szczegółu. Ty dajesz wizję, ja przejmuję całą resztę. Bez kopiowania od innych i bez zbędnego stresu."
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
          Moje wsparcie dla Twojego biznesu
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
          header="Strony, które pracują na Twój sukces."
          description="Łączę nowoczesny design z konkretnymi wynikami. Tworzę narzędzia, które przyciągają klientów i pozwalają Ci skupić się na prowadzeniu biznesu, podczas gdy technologia działa dla Ciebie."
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
          header="Konkretne korzyści dla Twojego biznesu."
          description="Skupiam się na Twoich celach biznesowych, dostarczając gotowe i działające rozwiązania. Od pierwszego szkicu po opiekę techniczną – dbam o wszystko, byś Ty mógł zająć się prowadzeniem biznesu."
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
            "Zacznijmy od krótkiej konsultacji. Opisz, czego potrzebujesz, a ja podpowiem Ci, jak najlepiej podejść do realizacji. Zyskasz jasny plan i pewność, że technologia będzie pracować na Twoje cele biznesowe."
          }
          buttonLabel={"Omówmy Twój Projekt"}
        />
      </div>

      <div className="mt-20">
        <HeadlineGroup
          header="Spójrz na moje ostatnie realizacje"
          description="Zobacz realizacje, które przyniosły moim klientom faktyczne rezultaty. To praktyczne przykłady tego, jak przemyślany design i solidna technologia podnoszą realną wartość Twojego biznesu."
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
          description="Przekonaj się, jak krok po kroku zamieniam Twoją wizję w gotowy produkt. Łączę analizę potrzeb z nowoczesnym designem, aby dostarczyć narzędzia, które realnie angażują Twoich klientów."
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
          header="Porozmawiajmy o Twoim projekcie."
          description="Masz pytania lub chcesz omówić współpracę? Napisz do mnie, a chętnie pomogę Ci dobrać rozwiązania, które najlepiej zrealizują Twoje cele biznesowe."
        />
      </div>

      <div className="mt-4 mb-10 p-4">
        <ContactFormCard />
      </div>
    </div>
  );
}
