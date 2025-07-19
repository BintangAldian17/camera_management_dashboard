import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 25 },
  { month: "Mar", value: 60 },
  { month: "Apr", value: 45 },
  { month: "May", value: 75 },
  { month: "Jun", value: 50 },
  { month: "Jul", value: 80 },
];

const containerStyle = {
  width: "100%",
  aspectRatio: "16/9", // Rasio aspek 16:9 (video)
};

export default function Chart() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        padding: "24px",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#1f2937",
          marginBottom: "16px",
        }}
      >
        CPU Utilization
      </h2>

      {/* Container dengan rasio aspek */}
      <div style={containerStyle}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={197}
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 12 }} />
            <YAxis
              tick={{ fill: "#6b7280", fontSize: 12 }}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          marginTop: "16px",
          display: "flex",
          alignItems: "center",
          fontSize: "0.875rem",
          color: "#4b5563",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "16px" }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#8884d8",
              borderRadius: "2px",
              marginRight: "8px",
            }}
          ></div>
          <span>CPU Utilization</span>
        </div>
        <span>Last 7 months</span>
      </div>
    </div>
  );
}
