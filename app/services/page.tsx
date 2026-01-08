import { ServicesExplorer } from "@/components/offer/ServicesExplorer/ServicesExplorer";
import { ButtonLink } from "@/components/shared/ButtonLink/ButtonLink";
import { HeadlineGroup } from "@/components/shared/HeadlineGroup/HeadlineGroup";

export default function ServicesPage() {
  return (
    <div className="xl:max-w-8xl mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <HeadlineGroup
          header="Twoja oferta w zasięgu jednego kliknięcia!"
          description="Nie musisz błądzić po podstronach. Poniżej znajdziesz interaktywną listę moich usług – kliknij w wybraną kartę, aby poznać szczegóły i technologie, w których pracuję."
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

      <div className="mt-16">
        <ServicesExplorer />
      </div>
    </div>
  );
}
