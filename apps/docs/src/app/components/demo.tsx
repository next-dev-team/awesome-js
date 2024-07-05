
"use client";

type Data = {
  comp?: any;
  title: string;
  items: {
    title: string;
    custom?: {
      className?: string;
      iconRight?: JSX.Element;
      iconLeft?: JSX.Element;
    } & Record<string, any>;
    size?: "sm" | "md" | "lg";
    theme?:
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger"
      | "default";
  }[];
  
}[];

export interface DemoProps {
  data: Data;
  title: string;
  comp?: any;
}

export default function Demo({ data, title, comp }: DemoProps): JSX.Element {
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
              <div className="flex gap-2 items-center py-2">
                {dataItem.items.map(({ title: titleItem, custom, ...rest }) => {
                  const Comp = comp || dataItem.comp;
                  return (
                    <Comp key={titleItem} {...rest} {...custom}>
                      {titleItem}
                    </Comp>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
