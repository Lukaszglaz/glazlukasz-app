import projectOneImage from "@/assets/images/showCaseCard/ProjectOne.jpg";
import projectTwoImage from "@/assets/images/showCaseCard/ProjectTwo.jpg";
import { StaticImageData } from "next/image";

export interface ShowcaseDataItem {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  reverse: boolean;
  href: string;
  cta: string;
}
export const showcaseData: ShowcaseDataItem[] = [
  {
    title: "Strony WWW Generujące Konwersje",
    description:
      "Portfolio prezentuje projekty, które łączą wyjątkowy design z perfekcyjną optymalizacją pod kątem konwersji i intuicyjnej obsługi (UX). Odkryj, jak szczegółowa dbałość o detale przekłada się na mierzalny sukces.",
    imageUrl: projectOneImage,
    reverse: false,
    href: "#",
    cta: "Zobacz moją ofertę",
  },
  {
    title: "Zaawansowane Aplikacje Web",
    description:
      "Przejrzyj nasze najnowsze realizacje, które wyróżniają się unikalnym podejściem do logiki biznesowej i skalowalnej architektury. Zobacz, jak profesjonalna wizja i techniczna solidność napędzają trwały rozwój.",
    imageUrl: projectTwoImage,
    reverse: true,
    href: "#",
    cta: "Zobacz moje aplikacje",
  },
];
