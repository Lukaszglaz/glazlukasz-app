import React, { ComponentPropsWithoutRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "clean" | "destructive";

type ButtonSize = "md" | "lg" | "sm";

type ButtonPros = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  asChild?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button: React.FC<ButtonPros> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  asChild = false,
  children,
  disabled = false,
  className,
  ...rest
}) => {
  const Component = asChild ? Slot : "button";

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-accent text-white hover:bg-accent-hover active:bg-accent-hover/90 focus:outline-2 focus:outline-offset-2 focus:outline-tertiary active:bg-tertiary",
    secondary:
      "bg-surface text-text-primary border border-accent hover:bg-text-secondary/20 active:bg-surface/80 focus:outline-2 focus:outline-offset-4 focus:outline-tertiary active:bg-tertiary",
    clean:
      "bg-transparent text-text-primary hover:text-accent active:text-accent-hover focus:outline-2 focus:outline-offset-2 focus:outline-tertiary active:bg-tertiary/30",
    destructive:
      "bg-destructive text-white hover:bg-destructive-hover focus:outline-2 focus:outline-offset-2 focus:outline-destructive  active:bg-destructive-hover/80",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    md: "h-11 py-3 px-4 text-base",
    lg: "h-12 py-3 px-5 text-lg",
    sm: "h-9 py-2 px-3 text-sm",
  };

  const disabledStyles =
    "opacity-50 !cursor-not-allowed shadow-inner shadow-surface/50 hover:blur-bg hover:text-current hover:border-current focus-visible:ring-0";

  const baseStyles =
    "font-semibold inline-flex items-center justify-center transition-all duration-150   rounded-full";
  return (
    <Component
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        disabled && disabledStyles,
        fullWidth && "w-full",
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Component>
  );
};
