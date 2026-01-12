import { ArrowRight } from "lucide-react";
import React, { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import { ButtonLink } from "../ButtonLink/ButtonLink";

type ContactCTAProps = {
  title: string;
  description: string;
  buttonLabel: string;
} & ComponentPropsWithoutRef<"div">;

export const ContactCTA: React.FC<ContactCTAProps> = ({
  title,
  description,
  buttonLabel,
  className,
  ...rest
}) => {
  const layoutClasses = "mx-auto max-w-6xl mx-4 py-8 lg:py-8";
  const styleClasses =
    "bg-color-bg-card rounded-xl dark:shadow-text-primary/10 p-8 text-center shadow-xl transition-all duration-300 md:p-12";
  const paragraphClasses =
    "mx-auto mt-2 text-base text-color-text-secondary/60";

  return (
    <div className={clsx(layoutClasses, styleClasses, className)} {...rest}>
      <h2 className="text-color-text-primary text-2xl font-bold md:text-3xl">
        {title}
      </h2>
      <p className={paragraphClasses}>{description}</p>
      <ButtonLink href="/contact" variant="primary" className="m-6">
        {buttonLabel}
        <ArrowRight className="mx-1 h-5 w-5" />
      </ButtonLink>
    </div>
  );
};
