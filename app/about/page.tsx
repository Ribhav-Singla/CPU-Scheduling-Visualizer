import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../(components)/footer";
import FeedbackButton from "../(components)/FeedbackButton";

export const metadata: Metadata = {
  title: "About Us - CPU Scheduling Visualizer",
  description: "Learn about CPU Scheduling Visualizer — our mission to make operating system scheduling concepts accessible through free interactive visualization, Gantt charts, and algorithm comparison tools.",
  openGraph: {
    title: "About CPU Scheduling Visualizer - Free OS Learning Tool",
    description: "Our mission is making operating system concepts accessible through interactive visualization. Used by thousands of CS students, GATE aspirants, and educators worldwide.",
    url: "https://cpu-scheduling-visualizer-ribhav.vercel.app/about",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About CPU Scheduling Visualizer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CPU Scheduling Visualizer",
    description: "Our mission is making OS concepts accessible through interactive visualization tools.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://cpu-scheduling-visualizer-ribhav.vercel.app/about",
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cpu-scheduling-visualizer-ribhav.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://cpu-scheduling-visualizer-ribhav.vercel.app/about" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-3 bg-card border-b border-border">
        <nav className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground font-medium">About Us</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <section className="text-white py-16 rounded-2xl" style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Making operating system concepts accessible through interactive visualization
            </p>
          </div>
        </section>
      </div>

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              The CPU Scheduling Visualizer was born out of a simple observation: many computer science students
              struggle to understand CPU scheduling algorithms when taught through traditional textbooks and lectures alone.
              These algorithms are fundamental to operating systems, yet their abstract nature makes them difficult to grasp.
            </p>
            <p>
              We believed there had to be a better way. What if students could see these algorithms in action?
              What if they could input their own process data and watch the scheduling unfold in real-time?
              That&apos;s the vision that drove us to create this tool.
            </p>
            <p>
              Today, our CPU Scheduling Visualizer is used by thousands of students, educators, and professionals
              worldwide. Whether you&apos;re preparing for your operating systems exam, studying for GATE, or reviewing
              concepts for a technical interview, our tool provides an intuitive way to understand and compare
              different scheduling algorithms.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-16 bg-muted/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Our mission is to make computer science education more accessible and engaging through
              interactive visualization tools. We believe that:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Visual learning accelerates understanding:</strong> Seeing an algorithm work step-by-step
                is far more effective than reading about it in a textbook.
              </li>
              <li>
                <strong>Education should be free:</strong> Quality learning resources should be available to
                everyone, regardless of their financial situation.
              </li>
              <li>
                <strong>Practice makes perfect:</strong> By allowing users to experiment with different inputs
                and algorithms, we enable deeper learning through hands-on experience.
              </li>
              <li>
                <strong>Technology should simplify, not complicate:</strong> Our tool is designed to be
                intuitive and user-friendly, requiring no prior setup or technical knowledge.
              </li>
            </ul>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl shadow-md p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}></div>
              <h3 className="font-bold text-xl mb-3">🖥️ Interactive Visualization</h3>
              <p className="text-muted-foreground">
                Watch CPU scheduling algorithms execute in real-time with animated Gantt charts
                that clearly show process execution order and timing.
              </p>
            </div>
            <div className="bg-card rounded-xl shadow-md p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}></div>
              <h3 className="font-bold text-xl mb-3">📊 Multiple Algorithms</h3>
              <p className="text-muted-foreground">
                Support for FCFS, SJF (preemptive and non-preemptive), Round Robin, and Priority
                Scheduling (preemptive and non-preemptive).
              </p>
            </div>
            <div className="bg-card rounded-xl shadow-md p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}></div>
              <h3 className="font-bold text-xl mb-3">📈 Performance Metrics</h3>
              <p className="text-muted-foreground">
                Automatic calculation of average waiting time, turnaround time, and other
                key performance metrics for each process.
              </p>
            </div>
            <div className="bg-card rounded-xl shadow-md p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}></div>
              <h3 className="font-bold text-xl mb-3">🔄 Algorithm Comparison</h3>
              <p className="text-muted-foreground">
                Compare the performance of different algorithms side-by-side using the same
                process data to understand trade-offs.
              </p>
            </div>
            <div className="bg-card rounded-xl shadow-md p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}></div>
              <h3 className="font-bold text-xl mb-3">📄 PDF Export</h3>
              <p className="text-muted-foreground">
                Export your results as professional PDF documents, perfect for assignments,
                study notes, or documentation.
              </p>
            </div>
            <div className="bg-card rounded-xl shadow-md p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}></div>
              <h3 className="font-bold text-xl mb-3">💰 Completely Free</h3>
              <p className="text-muted-foreground">
                No registration, no hidden fees, no premium features locked behind a paywall.
                Our tool is 100% free for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section className="mb-8 rounded-2xl p-8" style={{ background: 'linear-gradient(to right, rgba(18, 172, 238, 0.1), rgba(93, 244, 136, 0.1))' }}>
          <h2 className="text-3xl font-bold text-foreground mb-6">Who We Help</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>Our CPU Scheduling Visualizer is designed to support:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Computer science and IT students studying operating systems</li>
              <li>GATE and other competitive exam aspirants</li>
              <li>Software engineers preparing for technical interviews</li>
              <li>University professors and teachers creating course materials</li>
              <li>Self-learners exploring computer science fundamentals</li>
              <li>Researchers comparing scheduling algorithm performance</li>
            </ul>
          </div>
        </section>

      </main>

      <FeedbackButton />
      <Footer />
    </div>
  );
}
