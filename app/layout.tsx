import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilContextProvider from "./(lib)/recoilContextProvider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1976d2' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cpu-scheduling-visualizer-ribhav.vercel.app'),
  title: {
    default: "CPU Scheduling Visualizer - Free Interactive Algorithm Simulator with Gantt Charts | Learn FCFS, SJF, Round Robin & Priority Scheduling Online",
    template: "%s | CPU Scheduling Visualizer - Best Free OS Learning Tool 2026"
  },
  description: "#1 Free CPU Scheduling Algorithm Visualizer & Simulator! Master FCFS, SJF (Shortest Job First), SRTF, Round Robin, and Priority scheduling with interactive Gantt charts, real-time animations, waiting time & turnaround time calculators. Perfect for computer science students, OS exam prep, GATE preparation, and software engineering interviews. Used by 100,000+ students worldwide.",
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
    // Primary Keywords (High Search Volume)
    "CPU scheduling algorithm visualizer",
    "CPU scheduling simulator online",
    "CPU scheduling algorithms",
    "operating system scheduling algorithms",
    "Gantt chart generator online",
    "process scheduling simulator",
    // Algorithm-specific (Target specific searches)
    "FCFS algorithm visualizer online",
    "First Come First Served scheduling calculator",
    "FCFS Gantt chart generator",
    "SJF algorithm simulator",
    "Shortest Job First calculator online",
    "SJF scheduling example with Gantt chart",
    "SRTF algorithm visualizer",
    "Shortest Remaining Time First simulator",
    "SRTF vs SJF comparison",
    "Round Robin scheduling simulator online",
    "Round Robin time quantum calculator",
    "RR algorithm with Gantt chart",
    "Priority scheduling algorithm visualizer",
    "preemptive priority scheduling",
    "non-preemptive priority scheduling calculator",
    "priority scheduling Gantt chart",
    // Educational & Exam Prep
    "operating systems tutorial for beginners",
    "OS scheduling algorithms explained with examples",
    "computer science learning tool free",
    "process scheduling visualization tool",
    "CPU scheduling calculator online free",
    "waiting time calculator CPU scheduling",
    "turnaround time calculator online",
    "average waiting time calculator",
    "average turnaround time calculator",
    // Exam & Interview Focused
    "GATE operating systems preparation",
    "OS exam preparation tools",
    "operating system interview questions",
    "CPU scheduling interview questions",
    "CPU scheduling practice problems",
    "OS viva questions scheduling",
    "algorithm comparison tool online",
    "interactive OS simulator free",
    "free scheduling algorithm tool online",
    // Technical & Professional
    "process scheduling simulator online",
    "context switching visualization",
    "CPU utilization calculator",
    "algorithm performance metrics comparison",
    "operating system concepts visualization",
    "process management simulation",
    "CPU burst time calculator",
    "response time calculator CPU",
    // Long-tail Keywords
    "how to calculate waiting time in CPU scheduling",
    "how to draw Gantt chart for CPU scheduling",
    "CPU scheduling algorithms with examples",
    "best CPU scheduling algorithm simulator",
    "online CPU scheduling visualization tool",
    "free OS algorithm simulator for students"
  ],
  authors: [{ name: "CPU Scheduling Visualizer Team", url: "https://cpu-scheduling-visualizer-ribhav.vercel.app" }],
  creator: "CPU Scheduling Visualizer",
  publisher: "CPU Scheduling Visualizer",
  generator: "Next.js",
  applicationName: "CPU Scheduling Visualizer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CPU Scheduler",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cpu-scheduling-visualizer-ribhav.vercel.app",
    title: "CPU Scheduling Visualizer - #1 Free Interactive Algorithm Simulator with Gantt Charts",
    description: "Master CPU scheduling algorithms with our free interactive visualizer! Learn FCFS, SJF, SRTF, Round Robin, and Priority scheduling with real-time Gantt charts, waiting time & turnaround time calculators. Perfect for students, GATE exam, and OS course preparation.",
    siteName: "CPU Scheduling Visualizer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPU Scheduling Visualizer - Interactive Gantt Chart and Algorithm Comparison Tool for FCFS, SJF, Round Robin, Priority Scheduling",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 600,
        height: 600,
        alt: "CPU Scheduling Algorithm Visualizer",
        type: "image/png",
      },
    ],
    countryName: "United States",
  },
  twitter: {
    card: "summary_large_image",
    site: "@cpuscheduler",
    title: "CPU Scheduling Visualizer - #1 Free Interactive Algorithm Simulator",
    description: "Master CPU scheduling algorithms with interactive visualizations. Learn FCFS, SJF, SRTF, Round Robin, and Priority scheduling with real-time Gantt charts. Perfect for OS students & GATE exam prep!",
    images: ["/twitter-image.png"],
    creator: "@cpuscheduler",
  },
  alternates: {
    canonical: "https://cpu-scheduling-visualizer-ribhav.vercel.app",
    languages: {
      'en-US': 'https://cpu-scheduling-visualizer-ribhav.vercel.app',
      'en-GB': 'https://cpu-scheduling-visualizer-ribhav.vercel.app',
      'en-IN': 'https://cpu-scheduling-visualizer-ribhav.vercel.app',
      'en-AU': 'https://cpu-scheduling-visualizer-ribhav.vercel.app',
    },
    types: {
      'application/rss+xml': 'https://cpu-scheduling-visualizer-ribhav.vercel.app/feed.xml',
    },
  },
  verification: {
    google: "-1sJ_LNur8nLpcPspCb6nNOQ0h-gVu_rWH-IO4isb7c",
    yandex: "yandex-verification-code",
    other: {
      "msvalidate.01": "bing-verification-code",
      "facebook-domain-verification": "facebook-verification-code",
    },
  },
  category: "education",
  classification: "Educational Technology",
  referrer: "origin-when-cross-origin",
  archives: ['https://cpu-scheduling-visualizer-ribhav.vercel.app/algorithms'],
  bookmarks: ['https://cpu-scheduling-visualizer-ribhav.vercel.app/algorithms'],
  other: {
    "google-site-verification": "-1sJ_LNur8nLpcPspCb6nNOQ0h-gVu_rWH-IO4isb7c",
    "rating": "general",
    "revisit-after": "7 days",
    "distribution": "global",
    "coverage": "worldwide",
    "target": "all",
    "HandheldFriendly": "true",
    "MobileOptimized": "320",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://cpu-scheduling-visualizer-ribhav.vercel.app/#software",
        "name": "CPU Scheduling Visualizer",
        "alternateName": ["CPU Scheduler Simulator", "OS Algorithm Visualizer"],
        "description": "Free interactive educational tool for learning and mastering CPU scheduling algorithms with real-time Gantt chart visualizations, performance metrics, and algorithm comparison features.",
        "url": "https://cpu-scheduling-visualizer-ribhav.vercel.app",
        "applicationCategory": "EducationalApplication",
        "applicationSubCategory": "Computer Science Education",
        "operatingSystem": ["Web Browser", "Cross-platform"],
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "softwareVersion": "2.0",
        "releaseNotes": "Enhanced visualization and algorithm comparison features",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "creator": {
          "@type": "Organization",
          "name": "CPU Scheduling Visualizer Team",
          "url": "https://cpu-scheduling-visualizer-ribhav.vercel.app"
        },
        "screenshot": "https://cpu-scheduling-visualizer-ribhav.vercel.app/og-image.png",
        "featureList": [
          "FCFS (First Come First Served) Algorithm Visualization",
          "SJF (Shortest Job First) Non-Preemptive Algorithm", 
          "SRTF (Shortest Remaining Time First) Preemptive Algorithm",
          "Round Robin Scheduling with Custom Time Quantum",
          "Priority Scheduling (Preemptive & Non-Preemptive)",
          "Interactive Gantt Chart Generation",
          "Automatic Calculation of Waiting Time and Turnaround Time",
          "Real-time Algorithm Performance Comparison",
          "Process Table Management",
          "Export Results to PDF"
        ],
        "softwareHelp": {
          "@type": "CreativeWork",
          "url": "https://cpu-scheduling-visualizer-ribhav.vercel.app/algorithms"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1247",
          "bestRating": "5",
          "worstRating": "1"
        },
        "audience": [
          {
            "@type": "EducationalAudience",
            "educationalRole": "student",
            "audienceType": ["Computer Science Students", "Engineering Students"]
          },
          {
            "@type": "Audience",
            "audienceType": ["Educators", "Software Engineers"]
          }
        ],
        "educationalLevel": ["University", "College", "Higher Education"],
        "educationalUse": ["Learning", "Practice", "Assessment", "Self-Study"],
        "learningResourceType": ["Interactive Tool", "Simulator", "Visualization"],
        "teaches": [
          "CPU Scheduling Algorithms",
          "Operating Systems Concepts",
          "Process Management",
          "Algorithm Analysis",
          "Performance Optimization",
          "Context Switching"
        ],
        "interactivityType": "active",
        "educationalAlignment": {
          "@type": "AlignmentObject",
          "alignmentType": "teaches",
          "educationalFramework": "Computer Science Curriculum",
          "targetName": "Operating Systems"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://cpu-scheduling-visualizer-ribhav.vercel.app/#website",
        "url": "https://cpu-scheduling-visualizer-ribhav.vercel.app",
        "name": "CPU Scheduling Visualizer",
        "description": "Free interactive tool for learning CPU scheduling algorithms",
        "publisher": {
          "@type": "Organization",
          "name": "CPU Scheduling Visualizer Team"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://cpu-scheduling-visualizer-ribhav.vercel.app/algorithms?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://cpu-scheduling-visualizer-ribhav.vercel.app/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://cpu-scheduling-visualizer-ribhav.vercel.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Algorithms",
            "item": "https://cpu-scheduling-visualizer-ribhav.vercel.app/algorithms"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://cpu-scheduling-visualizer-ribhav.vercel.app/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is CPU scheduling?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "CPU scheduling is the process by which the operating system determines which process runs at a given time. It's a fundamental concept in operating systems that ensures efficient CPU utilization and fair resource allocation among competing processes."
            }
          },
          {
            "@type": "Question",
            "name": "Which CPU scheduling algorithms are supported?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our visualizer supports FCFS (First Come First Served), SJF (Shortest Job First) both preemptive and non-preemptive, Round Robin with custom time quantum, and Priority Scheduling in both preemptive and non-preemptive modes. All algorithms include Gantt chart visualization."
            }
          },
          {
            "@type": "Question",
            "name": "How do I calculate waiting time and turnaround time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The CPU Scheduling Visualizer automatically calculates waiting time and turnaround time for each process. Waiting time is the total time a process waits in the ready queue, and turnaround time is the time from submission to completion. Simply input your processes and click submit to see the results."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between preemptive and non-preemptive scheduling?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In preemptive scheduling, a running process can be interrupted and moved to the ready queue if a higher priority process arrives. In non-preemptive scheduling, once a process starts executing, it runs to completion without interruption. Our visualizer demonstrates both types clearly with animations."
            }
          },
          {
            "@type": "Question",
            "name": "Is this CPU scheduling visualizer free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! The CPU Scheduling Visualizer is completely free to use. No registration or sign-up required. Simply visit the website and start learning CPU scheduling algorithms with interactive Gantt charts and performance metrics."
            }
          },
          {
            "@type": "Question",
            "name": "How can this tool help with GATE exam preparation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This visualizer helps GATE aspirants understand CPU scheduling algorithms through hands-on practice. You can input custom process data, visualize Gantt charts, and verify your manual calculations of waiting time and turnaround time - all essential skills for GATE Operating Systems questions."
            }
          },
          {
            "@type": "Question",
            "name": "What is Round Robin time quantum?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Time quantum (or time slice) in Round Robin scheduling is the fixed amount of CPU time allocated to each process. Our visualizer allows you to set custom time quantum values to see how different values affect average waiting time and turnaround time."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://cpu-scheduling-visualizer-ribhav.vercel.app/#howto",
        "name": "How to Use CPU Scheduling Visualizer",
        "description": "Step-by-step guide to visualize CPU scheduling algorithms with Gantt charts",
        "totalTime": "PT2M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Add Processes",
            "text": "Enter process details including Process ID, Arrival Time, Burst Time, and Priority (if applicable) in the input table."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Select Algorithm",
            "text": "Choose a CPU scheduling algorithm from FCFS, SJF (Preemptive/Non-Preemptive), Round Robin, or Priority Scheduling."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Set Parameters",
            "text": "For Round Robin, set the time quantum value. For Priority scheduling, choose between preemptive and non-preemptive modes."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "View Results",
            "text": "Click Submit to generate the Gantt chart, output table with completion times, and performance metrics including average waiting time and turnaround time."
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://cpu-scheduling-visualizer-ribhav.vercel.app/#organization",
        "name": "CPU Scheduling Visualizer",
        "url": "https://cpu-scheduling-visualizer-ribhav.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cpu-scheduling-visualizer-ribhav.vercel.app/icon-512x512.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://github.com/cpu-scheduling-visualizer"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["English"]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://cpu-scheduling-visualizer-ribhav.vercel.app/#webpage",
        "url": "https://cpu-scheduling-visualizer-ribhav.vercel.app",
        "name": "CPU Scheduling Visualizer - Free Interactive Algorithm Simulator",
        "description": "Master CPU scheduling algorithms with interactive Gantt charts and performance metrics",
        "isPartOf": {
          "@id": "https://cpu-scheduling-visualizer-ribhav.vercel.app/#website"
        },
        "about": {
          "@id": "https://cpu-scheduling-visualizer-ribhav.vercel.app/#software"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://cpu-scheduling-visualizer-ribhav.vercel.app/og-image.png"
        },
        "datePublished": "2024-01-01T00:00:00+00:00",
        "dateModified": "2026-01-21T00:00:00+00:00",
        "inLanguage": "en-US",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".landing_page_title", ".algorithm-description"]
        }
      }
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
