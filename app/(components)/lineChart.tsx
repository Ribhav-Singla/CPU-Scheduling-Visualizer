"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useRecoilValue } from "recoil";
import { lineChartState } from "../(recoil)/store";

const config = {
  att: { label: "Avg Turnaround Time", color: "#4F46E5" },
  awt: { label: "Avg Waiting Time", color: "#E53E3E" },
};

export default function LineChartComponent() {
  const data = useRecoilValue(lineChartState);

  if (data.length === 0) {
    return (
      <div className="max-w-xl h-[350px] mx-auto pt-10">
        {/* Small box explaining the purpose */}
        <div className="bg-gray-100 p-4 border border-gray-300 rounded-md text-center text-gray-600">
          <p>No data available to display. Please ensure that the data has been correctly loaded or generated.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-5">
      <ChartContainer config={config} className="w-full">
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} className="p-2">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" dy={15} tick={{ fontSize: 14 }} />
              <YAxis
                label={{
                  value: "Time (units)",
                  angle: -90,
                  position: "left",
                  dx: 10,
                }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend
                content={<ChartLegendContent />}
                verticalAlign="top" // Position legend at the top
                align="center"
              />
              <Line
                type="monotone"
                dataKey="att"
                stroke="var(--color-att)"
                strokeWidth={2}
                dot={{ r: 5 }}
                animationDuration={1500} // Progressive animation
              />
              <Line
                type="monotone"
                dataKey="awt"
                stroke="var(--color-awt)"
                strokeWidth={2}
                dot={{ r: 5 }}
                strokeDasharray="2 2" // Dashed line for distinction
                animationDuration={2000} // Slight delay for effect
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </ChartContainer>
    </div>
  );
}
