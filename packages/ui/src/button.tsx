import React, { forwardRef } from "react";
import { tv } from "tailwind-variants";
import type { ButtonProps as BaseButtonProps } from "@mui/base";
import { useButton } from "@mui/base";
import { colorVariants, getVariants } from "./helper";

type ButtonProps = BaseButtonProps & {
  theme?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "default"
    | "warning";
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "solid" | "ghost";
  iconRight?: React.ReactElement;
  iconLeft?: React.ReactElement;
  iconCls?: string;
};

const buttonCls = tv({
  // base cls
  slots: {
    base: "rounded-lg shadow-sm hover:shadow-md text-white inline-flex items-center hover:bg-opacity-90 transition-colors",
    icon: "w-4 h-4 inline-flex items-center",
  },
  variants: {
    variant: {
      outline: false,
      solid: false,
      ghost: false,
    },
    theme: {
      primary: false,
      secondary: false,
      danger: false,
      success: false,
      default: false,
      warning: false,
    },
    size: {
      sm: {
        base: "text-sm h-7 px-1.5",
        icon: "w-4 h-4",
      },
      md: {
        base: "text-md h-9 px-2.5",
        icon: "w-5 h-5",
      },
      lg: {
        base: "text-lg h-10 px-3",
        icon: "w-6 h-6",
      },
    },
    disabled: {
      true: {
        base: "opacity-50 cursor-not-allowed pointer-events-none",
        icon: "opacity-50",
      },
    },
  },
  compoundVariants: [
    {
      variant: "outline",
      className: "border border-primary text-primary",
    },
    {
      variant: "outline",
      theme: "secondary",
      className: "border-secondary text-secondary",
    },
    {
      variant: "outline",
      theme: "danger",
      className: "border-danger text-danger",
    },
    {
      variant: "outline",
      theme: "success",
      className: "border-success text-success",
    },
    {
      variant: "outline",
      theme: "default",
      className: "border-default text-default-700",
    },
    {
      variant: "outline",
      theme: "warning",
      className: "border-warning text-warning",
    },
    ...getVariants(colorVariants.solidCls, 'solid')
    
   
  ],
});

type IconsProps = {
  icon?: React.ReactElement;
  className?: string;
};

const IconComp = ({ className, icon }: IconsProps) => {
  if (!icon) return null;
  return <div className={className}>{icon}</div>;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = "md",
      theme = "default",
      disabled,
      className,
      iconRight,
      iconLeft,
      iconCls,
      variant = "solid",
      ...props
    },
    ref
  ) => {
    const { getRootProps } = useButton({
      ...props,
      rootRef: ref,
    });
    const rootProps = getRootProps();
    const { base, icon } = buttonCls({
      size,
      theme,
      disabled,
      variant,
    });
    const buttonCss = base({ className });
    const iconCss = icon({ className: iconCls });

    return (
      <button type="button" {...rootProps} className={buttonCss}>
        <IconComp className={iconCss} icon={iconLeft} />
        {children}
        <IconComp className={iconCss} icon={iconRight} />
      </button>
    );
  }
);

Button.displayName = "Button";
