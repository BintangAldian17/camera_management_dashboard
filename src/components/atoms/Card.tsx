import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  as: Tag = "section",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <Tag className={cn("shadow-card rounded-[20px]", className)}>
      {children}
    </Tag>
  );
}
