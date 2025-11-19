import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area
} from "recharts";

// Dummy Data (Future me API se aayega)
const earningsGrowthData = [
  { month: "Jan", earnings: 10000 },
  { month: "Feb", earnings: 18000 },
  { month: "Mar", earnings: 25000 },
  { month: "Apr", earnings: 22000 },
  { month: "May", earnings: 32000 },
  { month: "Jun", earnings: 30000 },
  { month: "Jul", earnings: 42000 },
  {month: "Aug", earnings: 48000 },
];

const ActivityOverview = () => {
  return (
    <div className="card p-4 shadow-sm my-4">
      <h4 className="mb-4">Yearly Earnings</h4>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={earningsGrowthData}>
            <defs>
              <linearGradient id="colorEarn" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4}/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="earnings"
              stroke="#3b82f6"
              fill="url(#colorEarn)"
              strokeWidth={4}
            />
            <Line
              type="monotone"
              dataKey="earnings"
              stroke="#2563eb"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityOverview;
