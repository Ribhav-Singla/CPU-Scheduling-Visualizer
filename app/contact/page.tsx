"use client";
import Link from "next/link";
import Footer from "../(components)/footer";
import FeedbackButton from "../(components)/FeedbackButton";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-3 bg-card border-b border-border">
        <nav className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground font-medium">Contact Us</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <section className="text-white py-16 rounded-2xl" style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Have questions, suggestions, or feedback? We&apos;d love to hear from you!
            </p>
          </div>
        </section>
      </div>

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Quick Contact CTA */}
          <div className="mb-12 p-8 rounded-2xl text-center" style={{ background: 'linear-gradient(to right, rgba(18, 172, 238, 0.1), rgba(93, 244, 136, 0.1))' }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">Send Us Your Feedback</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Click the feedback button in the bottom-right corner of any page to send us your thoughts, 
              suggestions, or report any issues. We read every message!
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span className="text-2xl">👉</span>
              <span>Look for the</span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white" style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}>💬</span>
              <span>button</span>
            </div>
          </div>

          {/* Contact Info Cards */}
          <h2 className="text-2xl font-bold text-foreground mb-6">How Can We Help?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-muted/50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-foreground mb-3">📧 General Inquiries</h3>
              <p className="text-muted-foreground">
                For general questions about the CPU Scheduling Visualizer, how it works, 
                or how to use specific features, use the feedback button to reach us.
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                We typically respond within 24-48 hours.
              </p>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-foreground mb-3">💡 Feature Requests</h3>
              <p className="text-muted-foreground">
                Have an idea for a new feature or algorithm? We&apos;re always looking to improve! 
                Let us know what would make this tool more useful for your learning.
              </p>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-foreground mb-3">🐛 Bug Reports</h3>
              <p className="text-muted-foreground">
                Found something that&apos;s not working correctly? Please describe the issue 
                in detail, including the algorithm you were using and the process data 
                you entered. Screenshots are helpful too!
              </p>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-foreground mb-3">🎓 Educational Partnerships</h3>
              <p className="text-muted-foreground">
                Are you an educator interested in using this tool in your curriculum? 
                We&apos;d love to discuss how we can support your teaching goals.
              </p>
            </div>
          </div>

          {/* FAQ Link */}
          <div className="p-6 rounded-xl border-2 border-border">
            <h3 className="font-bold text-lg text-foreground mb-2">Have a quick question?</h3>
            <p className="text-muted-foreground mb-4">
              Check out our homepage for answers to frequently asked questions about 
              CPU scheduling algorithms and how to use the visualizer.
            </p>
            <Link
              href="/#faq"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              View FAQ <span>→</span>
            </Link>
          </div>
        </div>
      </main>

      <FeedbackButton />
      <Footer />
    </div>
  );
}
