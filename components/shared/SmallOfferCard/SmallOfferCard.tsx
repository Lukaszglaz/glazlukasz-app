import { LucideIcon } from "lucide-react";
import React from "react";

interface SmallOfferCardProps {
  offerName: string;
  offerDescription: string;
  icon: LucideIcon;
}

export const SmallOfferCard: React.FC<SmallOfferCardProps> = ({
  offerName,
  offerDescription,
  icon: IconComponent,
}) => {
  return (
    <div className="mr-5 flex flex-col items-center justify-between rounded-xl bg-bg-card/70 p-6 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
      <IconComponent className="mb-3 h-10 w-10 text-[--color-tertiary]" />
      <h3 className="mb-2 text-lg font-semibold">{offerName}</h3>
      <p className="text-sm font-semibold text-gray-500">{offerDescription}</p>
    </div>
  );
};
