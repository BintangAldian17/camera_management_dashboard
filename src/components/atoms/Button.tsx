import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import SpinnerIcon from "@/components/atoms/icons/SpinnerIcon";

const buttonVariants = cva(
  "flex items-center justify-center rounded-[6px] bg-primary text-white font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        ghost: "bg-transparent text-link-inactive",
      },
      size: {
        default: "px-4 py-[7px] px-2.5",
        grow: "h-[50px] w-full",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export default function Button({
  variant,
  size,
  className,
  children,
  icon,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isLoading ? (
        <SpinnerIcon />
      ) : (
        <span className="flex items-center gap-4">
          {icon}
          {children}
        </span>
      )}
    </button>
  );
}
