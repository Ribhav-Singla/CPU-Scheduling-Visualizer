import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPU Scheduling Algorithm Simulator - Interactive Gantt Chart Visualizer",
  description: "Free online CPU scheduling simulator. Visualize FCFS, SJF, SRTF, Round Robin & Priority scheduling with interactive Gantt charts. Calculate waiting time, turnaround time, and compare algorithm performance instantly. Load preset examples for convoy effect, starvation, and quantum-size impact.",
  openGraph: {
    title: "CPU Scheduling Algorithm Simulator - Free Interactive Gantt Chart Tool",
    description: "Simulate FCFS, SJF, SRTF, Round Robin & Priority scheduling algorithms with Gantt charts. Calculate waiting time and turnaround time instantly.",
    url: "https://cpu-scheduling-visualizer-ribhav.vercel.app/algorithms",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CPU Scheduling Algorithm Simulator with Gantt Charts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPU Scheduling Simulator - Free Gantt Chart Generator",
    description: "Visualize CPU scheduling algorithms with interactive Gantt charts. Calculate metrics for FCFS, SJF, Round Robin & Priority scheduling.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://cpu-scheduling-visualizer-ribhav.vercel.app/algorithms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VisualizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
