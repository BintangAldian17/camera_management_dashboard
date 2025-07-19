import { useMemo } from "react";
import Card from "@/components/atoms/Card";
import { AreaChart, Area, Tooltip } from "recharts";
import type { GraphData } from "@/types/graph-type";
import { useResizeObserver } from "@/lib/hooks/use-resize-observer";
import SkeletonBox from "@/components/atoms/Skeleton";
import ChartTooltip from "@/components/atoms/ChartTooltip";

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
          <SkeletonBox className="w-full h-full" />
        ) : (
          <>
            {rect.width > 0 && rect.height > 0 && (
              <AreaChart
                data={chartData}
                width={rect.width}
                height={rect.height}
              >
                <defs>
                  <linearGradient id="fillColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2DAA63" stopOpacity={1} />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <Tooltip content={ChartTooltip} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#004820"
                  strokeWidth={3}
                  fill="url(#fillColor)"
                />
              </AreaChart>
            )}
          </>
        )}
      </div>
    </Card>
  );
}
