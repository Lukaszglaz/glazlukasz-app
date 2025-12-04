"use client";

import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
  useCallback,
  useMemo,
  FocusEvent,
  useRef,
  useEffect,
} from "react";
import clsx from "clsx";

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputFocusEvent = FocusEvent<InputElement>;

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export type InputBaseProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
  className?: string;
  onFocus?: (e: InputFocusEvent) => void;
  onBlur?: (e: InputFocusEvent) => void;
} & Omit<
  InputProps,
  "type" | "placeholder" | "className" | "onFocus" | "onBlur"
> &
  Omit<TextareaProps, "placeholder" | "className" | "onFocus" | "onBlur">;

export const InputBase: React.FC<InputBaseProps> = ({
  id,
  label,
  type = "text",
  onChange,
  onFocus,
  onBlur,
  value,
  className,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const hasContent = useMemo(
    () => ((value as string) || "").trim().length > 0,
    [value],
  );

  const isActive = isFocused || hasContent;

  const handleFocus = useCallback(
    (e: InputFocusEvent) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e: InputFocusEvent) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    },
    [onBlur],
  );

  const adjustHeight = useCallback(() => {
    if (type === "textarea" && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [type]);

  useEffect(() => {
    adjustHeight();
  }, [value, adjustHeight]);

  const labelClasses = clsx(
    "absolute left-3 transition-all duration-200 ease-in-out pointer-events-none ",
    {
      "transform -translate-y-[28px] text-[11px] font-semibold text-accent":
        isActive,

      "top-1/2 -translate-y-1/2 text-base text-text-secondary":
        !isActive && type !== "textarea",

      "top-6 -translate-y-1/2 text-base text-text-secondary":
        !isActive && type === "textarea",
    },
  );

  const inputBaseClasses = clsx(
    "w-full px-3 pt-6 border-b bg-transparent outline-none transition-all duration-200 ease-in-out rounded-sm",
    {
      "border-accent": isActive,
      "border-color-border": !isActive,
    },
  );

  const textareaMinHeight = type === "textarea" ? "min-h-[75px]" : "";

  const inputElement =
    type === "textarea" ? (
      <textarea
        ref={textareaRef}
        id={id}
        required
        rows={1}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={clsx(
          inputBaseClasses,
          "resize-none sm:p-3",
          className,
          textareaMinHeight,
        )}
        {...(rest as TextareaProps)}
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        required
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={clsx(inputBaseClasses, className, "h-[50px]")}
        {...(rest as InputProps)}
      />
    );

  return (
    <div
      className={clsx(
        "relative mt-8 w-full",
        type === "textarea" ? "h-auto" : "h-[50px]",
      )}
    >
      {inputElement}
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    </div>
  );
};
