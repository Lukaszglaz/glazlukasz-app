import React, { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";

type PartnerBenefitCardVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary";

type CardHeightVariant = "very-low" | "low" | "medium" | "medium-max";

const VARIANT_GRADIENT_STYLES: Record<PartnerBenefitCardVariant, string> = {
  primary:
    "bg-gradient-to-br from-[#f7d9ff] to-[#ffc9db] dark:from-[#48166e] dark:to-[#492e35]",
  secondary:
    "bg-gradient-to-br from-[#ffc4c2] to-[#ffccc4] dark:from-[#944854] dark:to-[#461420]",
  tertiary:
    "bg-gradient-to-br from-[#d1e9f7] to-[#e9f6ff] dark:from-[#383938] dark:to-[#1c1231]",
  quaternary:
    "bg-gradient-to-br from-[#f1d0ff] to-[#fff1ff] dark:from-[#553f67] dark:to-[#150e2f]",
};

const HEIGHT_VARIANT_STYLES: Record<
  CardHeightVariant,
  { height: string; marginTop: string }
> = {
  "very-low": { height: "min-h-[19rem]", marginTop: "mt-24" },
  low: { height: "min-h-[22rem]", marginTop: "mt-16" },
  medium: { height: "min-h-[25rem]", marginTop: "mt-8" },
  "medium-max": { height: "min-h-[28rem]", marginTop: "mt-0" },
};

type PartnerBenefitCardProps = {
  stepNumber: number;
  title: string;
  description: string;
  variant?: PartnerBenefitCardVariant;
  heightVariant?: CardHeightVariant;
} & ComponentPropsWithoutRef<"div">;

const BASE_CARD_STYLES =
  "flex flex-col rounded-xl shadow-2xl overflow-hidden text-text-primary";
export const PartnerBenefitCard: React.FC<PartnerBenefitCardProps> = ({
  stepNumber,
  title,
  description,
  variant = "primary",
  heightVariant = "medium-max",
  className,
  ...rest
}) => {
  const gradientClass = VARIANT_GRADIENT_STYLES[variant];
  const { height: heightClass, marginTop: marginClass } =
    HEIGHT_VARIANT_STYLES[heightVariant];
  return (
    <div
      className={clsx(
        BASE_CARD_STYLES,
        "px-8 py-8",
        gradientClass,
        heightClass,
        marginClass,
        className,
      )}
      {...rest}
    >
      <div className="mb-auto flex items-center justify-center text-[8rem] font-extrabold opacity-50">
        {stepNumber}
      </div>
      <div className="mt-auto">
        <h3 className="mb-3 text-base font-semibold uppercase">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
