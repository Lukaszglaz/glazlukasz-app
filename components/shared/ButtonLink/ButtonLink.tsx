import React, { ComponentPropsWithoutRef } from "react";
import Link, { LinkProps } from "next/link";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "clean" | "destructive";
type ButtonSize = "md" | "lg" | "sm";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover active:bg-accent-hover/90 focus:outline-2 focus:outline-offset-2 focus:outline-tertiary active:bg-tertiary",
  secondary:
    "bg-surface border border-accent hover:bg-text-secondary/20 active:bg-surface/80 focus:outline-2 focus:outline-offset-4 focus:outline-tertiary active:bg-tertiary",
  clean:
    "bg-transparent focus:outline-2 focus:outline-offset-2 focus:outline-tertiary active:bg-tertiary/30",
  destructive:
    "bg-destructive text-white hover:bg-destructive-hover focus:outline-2 focus:outline-offset-2 focus:outline-destructive active:bg-destructive-hover/80",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-11 py-3 px-4 text-base",
  lg: "h-12 py-3 px-5 text-lg",
  sm: "h-9 py-2 px-3 text-sm",
};

const baseStyles =
  "font-semibold inline-flex items-center justify-center transition-all duration-150 rounded-full";

type ButtonLinkProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isActive?: boolean;
} & LinkProps &
  ComponentPropsWithoutRef<"a">;

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  isActive = false,
  children,
  className,
  href,
  ...rest
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        isActive
          ? "text-accent"
          : (variant === "clean" || variant === "secondary") &&
              "text-text-primary hover:text-accent",
        fullWidth && "w-full",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
