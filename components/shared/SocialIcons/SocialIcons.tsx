import React, { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import { LucideIcon } from "lucide-react";
import { ButtonLink } from "../ButtonLink/ButtonLink";

export type SocialItem = {
  id: number;
  icon: LucideIcon;
  href: string;
};

type SocialIconsProps = {
  items: SocialItem[];
  iconSize?: "sm" | "md" | "lg";
} & ComponentPropsWithoutRef<"div">;

const sizeMap = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

export const SocialIcons: React.FC<SocialIconsProps> = ({
  items,
  className,
  iconSize = "md",
  ...props
}) => {
  return (
    <div className={clsx("flex items-center gap-1", className)} {...props}>
      {items.map((item) => (
        <ButtonLink
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Link to Social Media.`}
          variant="clean"
          size="sm"
        >
          <item.icon className={sizeMap[iconSize]} />
        </ButtonLink>
      ))}
    </div>
  );
};
