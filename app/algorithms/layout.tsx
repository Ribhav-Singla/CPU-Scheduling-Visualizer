import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algorithm Simulator - Interactive Gantt Charts",
  description: "Simulate CPU scheduling algorithms with interactive Gantt charts. Calculate waiting time, turnaround time for FCFS, SJF, Round Robin & Priority.",
};

export default function VisualizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
