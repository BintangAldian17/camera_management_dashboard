import { lazy, Suspense, useMemo } from "react";
import Card from "@/components/atoms/Card";
import type { GraphData } from "@/types/graph-type";
import { useResizeObserver } from "@/lib/hooks/use-resize-observer";
import SkeletonBox from "@/components/atoms/Skeleton";

const GraphChart = lazy(() => import("@/components/atoms/GraphChart"));

type GraphCardProps = {
  title: string;
  data: GraphData | undefined;
  isLoading: boolean;
};

export default function GraphCard({ data, title, isLoading }: GraphCardProps) {
  const [ref, rect] = useResizeObserver();

  const chartData = useMemo(() => {
    return data?.labels.map((label, index) => ({
      date: label,
      value: data.values[index],
    }));
  }, [data]);

  return (
    <Card as="template" className="flex flex-col p-[30px] gap-5 h-fit">
      <h2 className="text-2xl xl:text-[32px] font-bold">{title}</h2>
      <div className=" xl:h-[197px] h-40" ref={ref}>
        {isLoading ? (
          <SkeletonBox className="w-full h-full animate-pulse" />
        ) : (
          <>
            {rect.width > 0 && rect.height > 0 && (
              <Suspense
                fallback={
                  <SkeletonBox className="animate-pulse w-full h-full" />
                }
              >
                <GraphChart chartData={chartData ?? []} rect={rect} />
              </Suspense>
            )}
          </>
        )}
      </div>
    </Card>
  );
}
