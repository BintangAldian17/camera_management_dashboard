import { cn } from "../../lib/utils";
import Card from "../atoms/Card";
import CameraCardSkeleton from "./skeleton/CameraCardSkeleton";

type CameraCardProps = {
  total: number;
  desc: string;
  accent: "yellow" | "red" | "green";
  icon: React.ReactNode;
  className?: string;
  isLoading?: boolean;
};

export default function CameraCard({
  desc,
  total,
  accent,
  icon,
  className,
  isLoading = false,
}: CameraCardProps) {
  const getAccent = () => {
    switch (accent) {
      case "yellow":
        return "bg-warning";
      case "red":
        return "bg-destructive";
      case "green":
        return "bg-primary";
    }
  };

  return (
    <Card
      as="template"
      className={cn("flex items-center px-5 w-full", className)}
    >
      {isLoading ? (
        <CameraCardSkeleton />
      ) : (
        <>
          <div
            className={cn(
              "size-[60px] rounded-full flex items-center justify-center",
              getAccent()
            )}
          >
            {icon}
          </div>
          <div className="flex flex-col justify-center gap-2.5 p-5">
            <h2 className="font-bold text-primary text-[32px] ">{total}</h2>
            <p className="text-muted-foreground text-[20px]">{desc}</p>
          </div>
        </>
      )}
    </Card>
  );
}
