import { ServicesExplorer } from "@/components/offer/ServicesExplorer/ServicesExplorer";
import { ButtonLink } from "@/components/shared/ButtonLink/ButtonLink";
import { HeadlineGroup } from "@/components/shared/HeadlineGroup/HeadlineGroup";
import { Pricing } from "@/components/offer/Pricing/Pricing";
import { Suspense } from "react";

export default function ServicesPage() {
  return (
    <div className="xl:max-w-8xl mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <HeadlineGroup
          header="Moja oferta w zasięgu jednego kliknięcia!"
          description="Nie musisz błądzić po podstronach. Poniżej znajdziesz interaktywną listę moich usług – kliknij w wybraną kartę, aby poznać szczegóły i technologie, w których pracuję."
          className="mt-24"
        />
        <div className="ml-4">
          <ButtonLink variant="primary" href={"#services-box"} className="mr-4">
            Zobacz moją ofertę!
          </ButtonLink>
          <ButtonLink variant="clean" href={"/contact"}>
            Napisz do mnie!
          </ButtonLink>
        </div>
      </div>

      <div id="services-box" className="mt-16">
        <Suspense
          fallback={
            <div className="h-96 animate-pulse rounded-2xl bg-white/5" />
          }
        >
          <ServicesExplorer />
        </Suspense>
      </div>

      <div>
        <Pricing />
      </div>
    </div>
  );
}
