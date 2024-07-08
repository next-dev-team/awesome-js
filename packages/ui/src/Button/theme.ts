import { tv } from "tailwind-variants";
import { colorVariants } from "../helper";

export const buttonTheme = tv({
  // base cls
  slots: {
    base: "inline-flex items-center justify-center transition-colors",
    icon: "w-4 h-4 inline-flex items-center",
  },
  variants: {
    variant: {
      outline: false,
      solid: false,
    },
    theme: {
      primary: false,
      secondary: false,
      error: false,
      success: false,
      default: false,
      warning: false,
    },
    size: {
      sm: {
        base: "text-sm h-7 px-1.5 min-w-[70px]",
        icon: "w-4 h-4",
      },
      md: {
        base: "text-md h-9 px-2.5 min-w-[80px]",
        icon: "w-5 h-5",
      },
      lg: {
        base: "text-lg h-10 px-3 min-w-[90px]",
        icon: "w-6 h-6",
      },
    },
    disabled: {
      true: {
        base: "opacity-50 pointer-events-none cursor-not-allowed",
        icon: "opacity-50",
      },
    },
    radius: colorVariants.radiusCls,
  },
  compoundVariants: [
    {
      variant: "solid",
      theme: "primary",
      className: colorVariants.solidCls.primary,
    },
    {
      variant: "solid",
      theme: "secondary",
      className: colorVariants.solidCls.secondary,
    },
    {
      variant: "solid",
      theme: "error",
      className: colorVariants.solidCls.error,
    },
    {
      variant: "solid",
      theme: "success",
      className: colorVariants.solidCls.success,
    },
    {
      variant: "solid",
      theme: "default",
      className: colorVariants.solidCls.default,
    },
    {
      variant: "solid",
      theme: "warning",
      className: colorVariants.solidCls.warning,
    },
    {
      variant: "outline",
      theme: "primary",
      className: colorVariants.borderedCls.primary,
    },
    {
      variant: "outline",
      theme: "secondary",
      className: colorVariants.borderedCls.secondary,
    },
    {
      variant: "outline",
      theme: "error",
      className: colorVariants.borderedCls.error,
    },
    {
      variant: "outline",
      theme: "success",
      className: colorVariants.borderedCls.success,
    },
    {
      variant: "outline",
      theme: "default",
      className: colorVariants.borderedCls.default,
    },
    {
      variant: "outline",
      theme: "warning",
      className: colorVariants.borderedCls.warning,
    },
  ],
});
