"use client";

import { TextArea } from "@repo/ui-rc/button";
import { Button } from "@repo/ui/button";
import type { DemoProps } from "./components/demo";
import Demo from "./components/demo";
import { IconArrowLeft, IconArrowNext } from "./icons";

const themeData = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "default",
] as const;
const sizeData = ["sm", "md", "lg"] as const;
const variantData = ["outline", "solid"] as const;
const radiusData = ["sm", "md", "lg", 'full', 'none'] as const;

const themeOption = themeData.map((theme) => ({
  title: theme,
  theme,
}));

const sizeOption = sizeData.map((size) => ({
  title: size,
  size,
}));

const variantOption = variantData.map((variant, idx) => {
  const theme = themeData[idx];
  return {
    title: variant,
    variant,
    theme: variant === "solid" ? "success" : theme,
  };
});

const data: DemoProps["data"] = [
  {
    title: "Theme",
    items: [
      ...themeOption,
      {
        title: "Custom",
        custom: {
          className: "bg-cyan-600 text-white",
        },
      },
    ],
  },
  {
    title: "Size",
    items: sizeOption,
  },
  {
    title: "Variant",
    items: variantOption,
  },
  {
    title: "radius",
    items: radiusData.map((radius) => ({
      title: radius,
      radius,
    })),
  },
  {
    title: "With Icon",
    items: [
      {
        title: "Left Icon",
        variant: "outline",
        custom: {
          iconLeft: <IconArrowLeft />,
        },
      },
      {
        title: "Right Icon",
        variant: "outline",
        custom: {
          iconRight: <IconArrowNext />,
        },
      },
      {
        title: "Loading",
        variant: "solid",
        custom: {
          isAwait: true,
        },
      },
    ],
  },
];

const textAreaCls: DemoProps["data"] = [
  {
    title: "Theme",
    items: [
      ...themeOption,
      {
        title: "Custom",
        custom: {
          className: "bg-pink-100",
        },
      },
    ],
  },
  {
    title: "Size",
    items: [
      {
        title: "Row 3",
        custom: {
          rows: 3,
        },
      },
      {
        title: "Row 4",
        custom: {
          rows: 4,
        },
      },
    ],
  },
];

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center gap-4 min-h-screen p-24">
      <Demo comp={Button} data={data} title="Button" />
      <Demo comp={TextArea} data={textAreaCls} title="TextArea" />
    </main>
  );
}
