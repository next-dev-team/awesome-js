import React, { forwardRef } from "react";
import type { ButtonProps as BaseButtonProps } from "@mui/base";
import { useButton } from "@mui/base";
import { Spinning } from "../Spinning";
import { buttonTheme } from "./theme";

type ButtonProps = BaseButtonProps & {
  theme?: "primary" | "secondary" | "error" | "success" | "default" | "warning";
  size?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg" | "full" | "none";
  variant?: "outline" | "solid";
  iconRight?: React.ReactElement;
  iconLeft?: React.ReactElement;
  iconCls?: string;
  isAwait?: boolean;
};

type IconsProps = {
  icon?: React.ReactElement;
  className?: string;
  isAwait?: boolean;
};

const IconComp = ({ className, icon, isAwait }: IconsProps) => {
  return (
    <div className={className}>
      {isAwait ? <Spinning className="ml-0.5" size="sm" /> : icon}
    </div>
  );
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = "md",
      theme = "default",
      disabled: isDisabled,
      className,
      iconRight,
      iconLeft,
      iconCls,
      variant = "solid",
      radius = "md",
      isAwait,
      ...props
    },
    ref
  ) => {
    const { getRootProps } = useButton({
      ...props,
      rootRef: ref,
    });
    
    const disabled = isDisabled || isAwait;
    const rootProps = getRootProps();
    const { base, icon } = buttonTheme({
      size,
      theme,
      disabled,
      variant,
      radius
    });
    const buttonCss = base({ className });
    const iconCss = icon({ className: iconCls, size });

    return (
      <button type="button" {...rootProps} className={buttonCss}>
        {iconLeft ? <IconComp className={iconCss} icon={iconLeft} /> : null}
        {children}
        {iconRight || isAwait ? (
          <IconComp className={iconCss} icon={iconRight} isAwait={isAwait} />
        ) : null}
      </button>
    );
  }
);

Button.displayName = "Button";
