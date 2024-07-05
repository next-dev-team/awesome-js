"use client";

import { Button } from "@repo/ui/button";
import {  TextArea } from "@repo/ui-rc/button";
import type { DemoProps } from "./components/demo";
import Demo from "./components/demo";
import { IconArrowLeft, IconArrowNext } from "./icons";

const data: DemoProps["data"] = [
  {
    title: "Theme",
    items: [
      {
        title: "primary",
        theme: "primary",
      },
      {
        title: "secondary",
        theme: "secondary",
      },
      {
        title: "success",
        theme: "success",
      },
      {
        title: "warning",
        theme: "warning",
      },
      {
        title: "danger",
        theme: "danger",
      },
      {
        title: "default",
        theme: "default",
      },
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
    items: [
      {
        title: "Small",
        size: "sm",
      },
      {
        title: "Medium",
        size: "md",
      },
      {
        title: "Large",
        size: "lg",
      },
    ],
  },
  {
    title: "With Icon",
    comp: Button,
    items: [
      {
        title: "Left Icon",
        custom: {
          iconLeft: <IconArrowLeft />,
        },
      },
      {
        title: "Right Icon",
        custom: {
          iconRight: <IconArrowNext />,
        },
      },
    ],
  },
];

const textAreaCls: DemoProps["data"] = [
  {
    title: "Theme",
    items: [
      {
        title: "primary",
        theme: "primary",
      },
      {
        title: "secondary",
        theme: "secondary",
      },
      {
        title: "success",
        theme: "success",
      },
      {
        title: "warning",
        theme: "warning",
      },
      {
        title: "danger",
        theme: "danger",
      },
      {
        title: "default",
        theme: "default",
      },
      {
        title: "Custom",
        custom: {
          className: "bg-pink-100",
          
        },
      },
    ],
  },
  {
    title: "Resize",
    items: [
      {
        title: "Left Icon",
        custom: {
          rows: 3,
        },
      },
      {
        title: "Right Icon",
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
