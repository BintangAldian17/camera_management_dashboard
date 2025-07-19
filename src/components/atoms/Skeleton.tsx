import { cn } from "../../lib/utils";

type SkeletonBoxProps = {
  className?: string;
  rounded?: "sm" | "md" | "lg" | "full";
};

export default function SkeletonBox({
  className,
  rounded = "md",
}: SkeletonBoxProps) {
  const radius = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <div
      className={cn(
        "bg-muted-foreground/50 animate-pulse",
        radius[rounded],
        className
      )}
    />
  );
}
