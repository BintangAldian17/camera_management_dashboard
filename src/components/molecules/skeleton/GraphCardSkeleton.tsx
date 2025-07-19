import Card from "../../atoms/Card";
import SkeletonBox from "../../atoms/Skeleton";

export default function ChartCardSkeleton() {
  return (
    <Card as="span" className="p-[30px]">
      <SkeletonBox className="w-full h-full" />
    </Card>
  );
}
