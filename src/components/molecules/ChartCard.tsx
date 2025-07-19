import Card from "../atoms/Card";
import { AreaChart, Area } from "recharts";
import type { GraphData } from "../../types/graph-type";
import { useResizeObserver } from "../../lib/hooks/use-resize-observer";
import SkeletonBox from "../atoms/Skeleton";
import { useMemo } from "react";

type ChartCardProps = {
  title: string;
  data: GraphData | undefined;
  isLoading: boolean;
};

export default function ChartCard({ data, title, isLoading }: ChartCardProps) {
  const [ref, rect] = useResizeObserver();

  const chartData = useMemo(() => {
    return data?.labels.map((label, index) => ({
      date: label,
      value: data.values[index],
    }));
  }, [data]);

  return (
    <Card className="flex flex-col p-[30px] gap-5 h-[300px]">
      <h2 className="text-[32px] font-bold">{title}</h2>
      <div className="flex-1" ref={ref}>
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
                    <stop offset="0%" stopColor="#2DAA63" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.2} />
                  </linearGradient>
                </defs>

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
