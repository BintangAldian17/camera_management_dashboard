import { Area, AreaChart, Tooltip } from "recharts";
import ChartTooltip from "@/components/atoms/ChartTooltip";
import type { ObserverRect } from "@/lib/hooks/use-resize-observer";

type GraphChartprops = {
  rect: ObserverRect;
  chartData: { date: string; value: number }[] | undefined;
};

export default function GraphChart({ chartData, rect }: GraphChartprops) {
  return (
    <AreaChart data={chartData} width={rect.width} height={rect.height}>
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
  );
}
