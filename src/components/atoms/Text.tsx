import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("text-base", {
  variants: {
    variant: {
      display: "text-4xl md:text-[64px] font-extrabold",
      headline: "text-3xl md:text-[40px] font-bold",
      title: "text-2xl md:text-[32px] font-bold",
      subtitle: "text-lg md:text-[20px] font-semibold",
      body: "text-base font-normal",
      caption: "text-sm",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
    align: "left",
  },
});

type TextProps = VariantProps<typeof textVariants> & {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

export default function Text({
  as: Component = "p",
  variant,
  align,
  children,
  className,
}: TextProps) {
  return (
    <Component className={cn(textVariants({ variant, align }), className)}>
      {children}
    </Component>
  );
}
