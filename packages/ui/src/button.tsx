import React, { forwardRef } from "react";
import { tv } from "tailwind-variants";
import type { ButtonProps as BaseButtonProps } from "@mui/base";
import { useButton } from "@mui/base";

type ButtonProps = BaseButtonProps & {
  theme?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "default"
    | "warning";
  size?: "sm" | "md" | "lg";
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
    theme: {
      primary: "bg-primary",
      secondary: "bg-secondary text-default-50",
      danger: "bg-error",
      success: "bg-success",
      default: {
        base: "bg-default text-default-700",
        icon: "text-black",
      },
      warning: "bg-warning",
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
        base: "opacity-50 cursor-not-allowed",
        icon: "opacity-50",
      },
    },
  },
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
      ...props
    },
    ref
  ) => {
    const { getRootProps } = useButton({
      ...props,
      rootRef: ref,
    });
    const rootProps = getRootProps();
    const { base, icon } = buttonCls({ size, theme, disabled });
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
