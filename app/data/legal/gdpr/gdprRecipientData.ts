import { Server, Scale, LucideIcon } from "lucide-react";

export interface GDPRRecipientItem {
  icon: LucideIcon;
  title: string;
  description: string;
  provider?: string;
}

export const gdprRecipientData: GDPRRecipientItem[] = [
  {
    icon: Server,
    title: "Hosting i Poczta",
    description:
      "Twoje dane są przechowywane u polskiego dostawcy infrastruktury:",
    provider: "Smarthost Sp. z o.o.",
  },
  {
    icon: Scale,
    title: "Księgowość",
    description:
      "Dane na fakturach mogą być przekazywane systemom fakturowym lub biurom rachunkowym wspierającym Administratora.",
  },
];
