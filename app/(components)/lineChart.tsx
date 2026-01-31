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
        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <div className="text-4xl mb-3">📈</div>
          <h3 className="font-semibold text-gray-800 mb-2">Algorithm Comparison Chart</h3>
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            This chart compares the performance of similar scheduling algorithms using the same process data. 
            You&apos;ll see average turnaround time and waiting time plotted for each algorithm, making it easy 
            to identify which performs best for your specific workload.
          </p>
          <p className="text-gray-500 text-xs mt-3">
            Click &quot;Compare similar algorithms&quot; button after adding processes to generate this comparison.
          </p>
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
