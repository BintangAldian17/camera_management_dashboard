import React from "react";
import { cn } from "../../lib/utils";

export type InputProps = React.ComponentProps<"input">;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "flex h-12 w-full rounded-md border border-border bg-input px-4 py-3.5 text-base transition-colors placeholder:text-placeholder focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}
