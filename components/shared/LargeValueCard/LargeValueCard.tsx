import { LucideIcon } from "lucide-react";
import React from "react";

interface LargeValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const LargeValueCard: React.FC<LargeValueCardProps> = ({
  title,
  description,
  icon: IconComponent,
}) => {
  return (
    <div className="mr-7 flex max-w-xs flex-col items-center rounded-xl bg-bg-card/70 p-6 text-center shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl">
      <IconComponent className="mb-6 h-10 w-10 text-accent" />
      <h3 className="mb-4 text-2xl font-extrabold">{title}</h3>
      <p className="grow text-base text-text-secondary">{description}</p>
    </div>
  );
};
