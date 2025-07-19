import React from "react";
import Card from "../../atoms/Card";
import SkeletonBox from "../../atoms/Skeleton";

export default function ChartCardSkeleton() {
  return (
    <Card className="p-[30px]">
      <SkeletonBox className="w-full h-full" />
    </Card>
  );
}
