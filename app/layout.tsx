import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilContextProvider from "./(lib)/recoilContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CPU Scheduling Visualizer - Interactive OS Algorithm Learning Tool",
    template: "%s | CPU Scheduling Visualizer"
  },
  description: "Interactive CPU scheduling algorithm visualizer with Gantt charts. Learn FCFS, SJF, SRTF, Round Robin, and Priority scheduling algorithms. Perfect for computer science students and OS course study.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.svg', color: '#1976d2' },
    ],
  },
  keywords: [
    "CPU scheduling",
    "operating systems",
    "algorithm visualization",
    "Gantt chart",
    "FCFS",
    "SJF",
    "SRTF",
    "Round Robin",
    "Priority scheduling",
    "computer science",
    "OS algorithms",
    "process scheduling",
    "educational tool",
    "interactive learning"
  ],
  authors: [{ name: "CPU Scheduling Visualizer Team" }],
  creator: "CPU Scheduling Visualizer",
  publisher: "CPU Scheduling Visualizer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cpu-scheduling-visualizer-ribhav.vercel.app",
    title: "CPU Scheduling Visualizer - Interactive OS Algorithm Learning Tool",
    description: "Master CPU scheduling algorithms with interactive visualizations. Learn FCFS, SJF, SRTF, Round Robin, and Priority scheduling with real-time Gantt charts.",
    siteName: "CPU Scheduling Visualizer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPU Scheduling Visualizer - Interactive Algorithm Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPU Scheduling Visualizer - Interactive OS Algorithm Learning Tool",
    description: "Master CPU scheduling algorithms with interactive visualizations. Learn FCFS, SJF, SRTF, Round Robin, and Priority scheduling with real-time Gantt charts.",
    images: ["/twitter-image.png"],
    creator: "@cpuscheduler",
  },
  verification: {
    google: "-1sJ_LNur8nLpcPspCb6nNOQ0h-gVu_rWH-IO4isb7c",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CPU Scheduling Visualizer",
    "description": "Interactive educational tool for learning CPU scheduling algorithms with real-time Gantt chart visualizations",
    "url": "https://cpu-scheduling-visualizer-ribhav.vercel.app",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "CPU Scheduling Visualizer Team"
    },
    "featureList": [
      "FCFS (First Come First Served) Algorithm",
      "SJF (Shortest Job First) Algorithm", 
      "SRTF (Shortest Remaining Time First) Algorithm",
      "Round Robin Algorithm",
      "Priority Scheduling (Preemptive & Non-Preemptive)",
      "Interactive Gantt Chart Visualization",
      "Performance Metrics Calculation",
      "Real-time Algorithm Comparison"
    ],
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "educationalLevel": "University",
    "learningResourceType": "Interactive Tool",
    "teaches": [
      "CPU Scheduling Algorithms",
      "Operating Systems Concepts",
      "Process Management",
      "Algorithm Analysis"
    ]
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RecoilContextProvider>
          {children}
        </RecoilContextProvider>
      </body>
    </html>
  );
}
