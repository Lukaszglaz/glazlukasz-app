import comingSoon from "@/assets/images/showCaseCard/comingSoon.jpg";
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
    title: "Pojawi się Wkrótce: Realizacje Premium",
    description:
      "Nadchodzi kolekcja moich najlepszych projektów. Od innowacyjnego designu po bezbłędną funkcjonalność – przygotuj się na inspirujące przykłady naszej pracy.",
    imageUrl: comingSoon,
    reverse: false,
    href: "#",
    cta: "Zobacz moją ofertę",
  },
  {
    title: "Pojawi się Wkrótce: Realizacje Premium",
    description:
      "Nadchodzi kolekcja moich najlepszych projektów. Od innowacyjnego designu po bezbłędną funkcjonalność – przygotuj się na inspirujące przykłady naszej pracy.",
    imageUrl: comingSoon,
    reverse: true,
    href: "#",
    cta: "Zobacz moje aplikacje",
  },
];
