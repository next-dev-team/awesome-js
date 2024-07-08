"use client";
import { toCapitalize } from "../utils";

type Data = {
  comp?: any;
  title: string;
  items: {
    title: string;
    children?: JSX.Element;
    custom?: {
      className?: string;
      iconRight?: JSX.Element;
      iconLeft?: JSX.Element;
    } & Record<string, any>;
    size?: "sm" | "md" | "lg";
    variant?: "outline" | "solid" | "ghost" | "link";
    theme?:
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "error"
      | "default";
  }[];
}[];

export interface DemoProps {
  data: Data;
  title: string;
  comp?: any;
  itemLabelCapitalize?: boolean;
}

export default function Demo({
  data,
  title,
  comp,
  itemLabelCapitalize = true,
}: DemoProps): JSX.Element {
  const isTextArea = title.includes("TextArea");
  return (
    <div>
      <h1 className="uppercase">{title}</h1>
      <hr className="mb-4 mt-1" />
      <div className="space-y-4">
        {data.map((dataItem) => {
          return (
            <div className="flex flex-col gap-2" key={dataItem.title}>
              <h3>{dataItem.title}</h3>
              <hr />
              <div
                className={`flex gap-2 flex-wrap py-2 ${isTextArea ? "items-start" : "items-center"}`}
              >
                {dataItem.items.map(
                  ({ title: titleItem, children, custom, ...rest }, idx) => {
                    const Comp = comp || dataItem.comp;
                    return (
                      <Comp
                        key={idx}
                        placeholder={titleItem}
                        {...rest}
                        {...custom}
                        // eslint-disable-next-line react/no-children-prop
                        children={
                          isTextArea
                            ? null
                            : children || (itemLabelCapitalize
                              ? toCapitalize(titleItem)
                              : titleItem)
                        }
                      />
                    );
                  }
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
