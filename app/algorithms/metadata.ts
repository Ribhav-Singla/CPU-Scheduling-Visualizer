import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPU Scheduling Algorithms Simulator | Interactive Gantt Chart Visualizer - Practice FCFS, SJF, Round Robin Online",
  description: "Simulate and visualize CPU scheduling algorithms including FCFS, SJF (Shortest Job First), SRTF, Round Robin with time quantum, and Priority scheduling. Generate interactive Gantt charts with automatic waiting time, turnaround time, and response time calculations. Perfect for OS exam preparation and GATE practice.",
  keywords: [
    "CPU scheduling simulator online",
    "algorithm visualization tool",
    "Gantt chart generator free",
    "process scheduling calculator",
    "FCFS simulation online",
    "FCFS Gantt chart generator",
    "SJF algorithm calculator",
    "Shortest Job First simulator",
    "SRTF visualization online",
    "Shortest Remaining Time First calculator",
    "Round Robin scheduler online",
    "Round Robin time quantum calculator",
    "Priority scheduling simulator",
    "preemptive scheduling visualization",
    "non-preemptive scheduling tool",
    "operating systems simulator",
    "computer science tools free",
    "interactive learning OS",
    "waiting time calculator CPU",
    "turnaround time calculator online",
    "CPU scheduling practice problems",
    "GATE OS preparation tool",
    "OS exam scheduler practice"
  ],
  openGraph: {
    title: "CPU Scheduling Algorithms Simulator - Interactive Gantt Chart & Performance Calculator",
    description: "Practice CPU scheduling with interactive simulations. Input processes, select algorithms (FCFS, SJF, SRTF, Round Robin, Priority), and visualize execution with Gantt charts. Calculate waiting time and turnaround time instantly.",
    type: "website",
    url: "https://cpu-scheduling-visualizer-ribhav.vercel.app/algorithms",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPU Scheduling Algorithms Simulator with Gantt Chart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPU Scheduling Algorithms Simulator - Free Online Tool",
    description: "Practice CPU scheduling with interactive simulations. Input processes, select algorithms, and visualize execution with Gantt charts.",
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
