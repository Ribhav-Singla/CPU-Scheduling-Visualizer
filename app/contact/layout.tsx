import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - CPU Scheduling Visualizer",
  description: "Get in touch with the CPU Scheduling Visualizer team. Send feedback, report bugs, request new scheduling algorithm features, or discuss educational partnerships.",
  openGraph: {
    title: "Contact CPU Scheduling Visualizer Team",
    description: "Send feedback, report bugs, or request features for the free CPU scheduling simulator.",
    url: "https://cpu-scheduling-visualizer-ribhav.vercel.app/contact",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact CPU Scheduling Visualizer" }],
  },
  twitter: {
    card: "summary",
    title: "Contact CPU Scheduling Visualizer",
    description: "Send feedback, report bugs, or request features.",
  },
  alternates: {
    canonical: "https://cpu-scheduling-visualizer-ribhav.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
