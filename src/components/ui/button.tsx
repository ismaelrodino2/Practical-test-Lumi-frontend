"use client";
import { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { LoaderIcon } from "lucide-react";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "filled" | "outlined" | "filledDark";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  loading?: boolean;
}

const buttonSizeClasses: Record<ButtonSize, string> = {
  small: "p-1",
  medium: "p-2",
  large: "px-6 py-1",
};

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  filled: "bg-gray-100 border border-[transparent] text-gray-600 font-medium",
  filledDark: "bg-gray-900 border border-[transparent] text-white",
  outlined: "text-gray-600 border border-gray-600",
};

export function Button({
  children,
  size = "medium",
  variant = "filled",
  className,
  loading = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`flex rounded-md items-center justify-center h-fit w-fit relative ${clsx(
        buttonSizeClasses[size],
        buttonVariantClasses[variant],
        className
      )}`}
    >
      {loading ? (
        <LoaderIcon
          size={24}
          strokeWidth={1.5}
          className="text-gray-600 animate-spin"
        />
      ) : (
        children
      )}
    </button>
  );
}
