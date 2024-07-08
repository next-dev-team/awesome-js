import { cnBase } from "tailwind-variants";

export const Spinning = ({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) => {
  const sizeMap = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };
  const baseCls = cnBase(
    `${sizeMap[size]} border-2 border-current border-t-transparent animate-spin rounded-full`,
    className
  );
  return (
    <div className={baseCls}>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
