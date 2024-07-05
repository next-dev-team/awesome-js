import { forwardRef } from "react";
import { tv } from "tailwind-variants";
import type {
  TextAreaRef,
  TextAreaProps as BaseTextAreaProps,
} from "rc-textarea";
import RcTextarea from "rc-textarea";

type TextAreaProps = BaseTextAreaProps & {
  theme?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "default"
    | "warning";
};

const textAreaCls = tv({
  slots: {
    base: "rounded border px-2 py-1 bg-white border-gray-300",
    clearIcon: "absolute top-0 right-1",
    suffixCls: "text-default-300",
    countCls: "absolute -bottom-4 right-0 text-sm",
  },
  variants: {
    theme: {
      primary: "border-primary-200 focus:outline-primary-300",
      secondary: "border-secondary-200 focus:outline-secondary-300",
      danger: "border-error-200 focus:outline-error-300",
      success: "border-success-200 focus:outline-success-300",
      default: "border-default-200 focus:outline-default-300",
      warning: "border-warning-200 focus:outline-warning-300",
    },
  },
});

export const TextArea = forwardRef<TextAreaRef, TextAreaProps>(
  (
    {
      theme = "default",
      className,
      showCount,
      maxLength,
      minLength,
      allowClear,
      ...rest
    },
    ref
  ) => {
    const { base, clearIcon, countCls, suffixCls } = textAreaCls({});
    const nextShowCount = showCount ?? Boolean(maxLength || minLength);
    const textAreaCss = base({ className, theme });
    const clearIconCss = clearIcon();
    const countCss = countCls();
    const suffixCss = suffixCls();

    return (
      <RcTextarea
        {...{
          minLength,
          maxLength,
          showCount: nextShowCount,
          ...rest,
        }}
        allowClear={
          allowClear
            ? {
                clearIcon: <span className={clearIconCss}>x</span>,
              }
            : false
        }
        className="relative"
        classNames={{
          textarea: textAreaCss,
          count: countCss,
          suffix: suffixCss,
        }}
        ref={ref}
      />
    );
  }
);

TextArea.displayName = "TextArea";
