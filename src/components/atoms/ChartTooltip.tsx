import React from "react";
import { type TooltipProps } from "recharts";

export default function ChartTooltip(
  props: TooltipProps<(string | number)[], string | number>
) {
  const { active, payload } = props;
  if (!active || !payload || payload.length === 0) {
    return null;
  }
  const { date, value } = payload[0].payload;
  return (
    <div className="bg-white p-2 rounded shadow">
      <p>{date}</p>
      <p>{value}</p>
    </div>
  );
}
