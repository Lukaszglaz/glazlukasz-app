import React, { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";

type PartnerBenefitCardVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary";

const variantPartnerBenefitCard: Record<PartnerBenefitCardVariant, string> = {
  primary: "bg-gradient-to-br from-[#48166e] to-[#492e35]",
  secondary: "bg-gradient-to-br from-[#944854] to-[#461420]",
  tertiary: "bg-gradient-to-br from-[#383938] to-[#1c1231]",
  quaternary: "bg-gradient-to-br from-[#553f67] to-[#150e2f]",
};

type PartnerBenefitCardProps = {
  stepNumber: number;
  title: string;
  description: string;
  variant?: PartnerBenefitCardVariant;
};

const baseStyles = " flex flex-col rounded-xl shadow-2xl overflow-hidden  ";

export const PartnerBenefitCard: React.FC<PartnerBenefitCardProps> = ({
  stepNumber,
  title,
  description,
  variant = "primary",
}) => {
  const gradientClass = variantPartnerBenefitCard[variant];

  return (
    <div className={clsx(baseStyles, "px-8 py-8", gradientClass)}>
      <div className="mb-auto flex items-center justify-center text-[8rem] font-extrabold opacity-50">
        {stepNumber}
      </div>

      <div className="mt-auto">
        <h3 className="mb-2 text-base font-semibold uppercase">{title}</h3>

        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
