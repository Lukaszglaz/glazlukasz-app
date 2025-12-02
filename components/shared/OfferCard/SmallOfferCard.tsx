import { LucideIcon } from "lucide-react";
import React, { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";

type CardSize = "small" | "large";

type OfferCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  size?: CardSize;
} & ComponentPropsWithoutRef<"div">;

const CARD_SIZE_STYLES: Record<
  CardSize,
  {
    card: string;
    icon: string;
    title: string;
    description: string;
  }
> = {
  small: {
    card: "max-w-xs justify-end px-9 py-6",
    icon: "mb-3",
    title: "text-lg font-semibold mb-1 ",
    description: "text-sm  text-gray-500",
  },
  large: {
    card: "max-w-xs text-center p-8",
    icon: "text-accent mb-6",
    title: "text-xl font-semibold mb-4",
    description: "text-sm  text-gray-500",
  },
};

export const OfferCard: React.FC<OfferCardProps> = ({
  title,
  description,
  icon: IconComponent,
  size = "small",
  className,
  ...rest
}) => {
  const baseCardStyles =
    "flex flex-col items-center rounded-xl  text-center bg-bg-card/70 shadow-sm hover:shadow-accent-hover/60 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover: text-text-primary cursor-pointer";

  const baseIconStyles = "h-10 w-10";
  const styles = CARD_SIZE_STYLES[size];

  return (
    <div className={clsx(baseCardStyles, styles.card, className)} {...rest}>
      <IconComponent className={clsx(baseIconStyles, styles.icon)} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
