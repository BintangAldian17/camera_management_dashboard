import SkeletonBox from "../../atoms/Skeleton";

export default function GraphCardSkeleton() {
  return (
    <div className="flex items-center px-5 w-full animate-pulse">
      <SkeletonBox className="shrink-0 size-[60px]" rounded="full" />
      <div className="flex flex-col justify-center gap-2.5 p-5 w-full">
        <SkeletonBox className=" h-5 w-20" />
        <SkeletonBox className="h-5 w-full bg-muted-foreground/50" />
      </div>
    </div>
  );
}
