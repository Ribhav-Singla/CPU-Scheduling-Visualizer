import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../(components)/footer";
import FeedbackButton from "../(components)/FeedbackButton";

export const metadata: Metadata = {
  title: "Privacy Policy - CPU Scheduling Visualizer",
  description: "Privacy policy for CPU Scheduling Visualizer. Learn how we collect, use, and protect your information when using our free CPU scheduling simulator.",
  alternates: {
    canonical: "https://cpu-scheduling-visualizer-ribhav.vercel.app/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cpu-scheduling-visualizer-ribhav.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://cpu-scheduling-visualizer-ribhav.vercel.app/privacy-policy" }
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
          <span className="text-foreground font-medium">Privacy Policy</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <section className="text-white py-16 rounded-2xl" style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Your privacy is important to us. This policy explains how we handle your data.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          
          <p className="text-sm text-muted-foreground mb-8">
            <strong>Last Updated:</strong> January 31, 2026
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p>
              Welcome to CPU Scheduling Visualizer (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to 
              protecting your privacy and ensuring you have a positive experience when using our website 
              and services. This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your information when you visit our website at cpu-scheduling-visualizer-ribhav.vercel.app.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this 
              privacy policy, please do not access the site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.1 Information You Provide</h3>
            <p>We may collect information you voluntarily provide when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit feedback through our feedback form</li>
              <li>Contact us via our contact form</li>
              <li>Interact with our website in any other way that requires input</li>
            </ul>
            <p>This information may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email address</li>
              <li>Name (if provided)</li>
              <li>Message content</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your 
              device and usage patterns, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages visited and time spent</li>
              <li>IP address (anonymized)</li>
              <li>Device information</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.3 Process Data</h3>
            <p>
              The CPU scheduling data you enter into our visualizer (arrival times, burst times, 
              priorities, etc.) is processed entirely in your browser and on our servers for 
              calculation purposes only. <strong>This data is not stored or logged.</strong> It is 
              processed temporarily to generate results and is discarded immediately after.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our visualization tool</li>
              <li>Respond to your inquiries and feedback</li>
              <li>Improve our website and services</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect and prevent technical issues</li>
              <li>Display relevant advertisements (via Google AdSense)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remember your preferences</li>
              <li>Analyze how you use our website</li>
              <li>Deliver personalized advertisements</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.1 Types of Cookies We Use</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Necessary for the website to function properly.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our 
                website (e.g., Google Analytics).
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Used by Google AdSense to display relevant 
                advertisements based on your interests.
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.2 Managing Cookies</h3>
            <p>
              You can control and manage cookies through your browser settings. Please note that 
              disabling cookies may affect the functionality of our website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Services</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.1 Google AdSense</h3>
            <p>
              We use Google AdSense to display advertisements on our website. Google AdSense uses 
              cookies to serve ads based on your prior visits to our website or other websites. 
              Google&apos;s use of advertising cookies enables it and its partners to serve ads based on 
              your visit to our site and/or other sites on the Internet.
            </p>
            <p>
              You may opt out of personalized advertising by visiting{" "}
              <a 
                href="https://www.google.com/settings/ads" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Google Ads Settings
              </a>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.2 Analytics</h3>
            <p>
              We may use third-party analytics services (such as Google Analytics) to help understand 
              use of our service. These services collect information sent by your browser, including 
              the pages you visit and other information that assists us in improving our service.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.3 Hosting</h3>
            <p>
              Our website is hosted on Vercel. Vercel may collect technical data about visitors to 
              help us improve our website performance and security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction. 
              However, please be aware that no method of transmission over the Internet or electronic 
              storage is 100% secure.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes 
              for which it was collected, including to satisfy any legal, accounting, or reporting 
              requirements. Feedback and contact form submissions may be retained to help us improve 
              our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access the personal data we hold about you</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to object to processing of your data</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us through our contact page.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect 
              personal information from children under 13. If you are a parent or guardian and believe 
              your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. 
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please 
              contact us through our{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact Page
              </a>.
            </p>
          </section>

        </div>
      </main>

      <FeedbackButton />
      <Footer />
    </div>
  );
}
