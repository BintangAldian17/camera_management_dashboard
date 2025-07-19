import React from "react";
import { cn } from "../../lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("shadow-card rounded-[20px]", className)}>
      {children}
    </div>
  );
}
