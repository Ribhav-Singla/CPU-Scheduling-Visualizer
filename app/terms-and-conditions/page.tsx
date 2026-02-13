import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../(components)/footer";
import FeedbackButton from "../(components)/FeedbackButton";

export const metadata: Metadata = {
  title: "Terms and Conditions - CPU Scheduling Visualizer",
  description: "Terms and conditions for using CPU Scheduling Visualizer — the free interactive CPU scheduling algorithm simulator and educational tool.",
  alternates: {
    canonical: "https://cpu-scheduling-visualizer-ribhav.vercel.app/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cpu-scheduling-visualizer-ribhav.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "Terms and Conditions", "item": "https://cpu-scheduling-visualizer-ribhav.vercel.app/terms-and-conditions" }
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
          <span className="text-foreground font-medium">Terms and Conditions</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <section className="text-white py-16 rounded-2xl" style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Please read these terms carefully before using our service.
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
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              Welcome to CPU Scheduling Visualizer. By accessing or using our website at 
              cpu-scheduling-visualizer-ribhav.vercel.app (&quot;Service&quot;), you agree to be bound by these 
              Terms and Conditions (&quot;Terms&quot;). If you disagree with any part of these terms, you may 
              not access the Service.
            </p>
            <p>
              These Terms apply to all visitors, users, and others who access or use the Service. 
              By using the Service, you also agree to our Privacy Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
            <p>
              CPU Scheduling Visualizer is a free, online educational tool that allows users to 
              visualize and understand various CPU scheduling algorithms used in operating systems. 
              The Service includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Interactive visualization of CPU scheduling algorithms</li>
              <li>Gantt chart generation for process scheduling</li>
              <li>Calculation of scheduling metrics (waiting time, turnaround time, etc.)</li>
              <li>Algorithm comparison features</li>
              <li>PDF export functionality</li>
              <li>Educational content about CPU scheduling</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Service</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.1 Permitted Use</h3>
            <p>You may use our Service for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal educational purposes</li>
              <li>Academic study and research</li>
              <li>Teaching and classroom demonstrations</li>
              <li>Preparing for exams and interviews</li>
              <li>Any other lawful, non-commercial purpose</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.2 Prohibited Use</h3>
            <p>You agree NOT to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the intellectual property rights of others</li>
              <li>Transmit any malicious code, viruses, or harmful software</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use automated systems to access the Service without permission</li>
              <li>Collect or harvest user information without consent</li>
              <li>Use the Service for any fraudulent or deceptive purposes</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.1 Our Content</h3>
            <p>
              The Service and its original content, features, and functionality are owned by 
              CPU Scheduling Visualizer and are protected by international copyright, trademark, 
              and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.2 Your Rights</h3>
            <p>
              You may use, download, and print content from our Service for personal, non-commercial, 
              educational purposes only. You may share links to our Service and reference our 
              educational content with proper attribution.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.3 Restrictions</h3>
            <p>You may NOT:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reproduce, distribute, or create derivative works of our Service</li>
              <li>Remove any copyright or proprietary notices</li>
              <li>Use our branding, logos, or trademarks without permission</li>
              <li>Claim our content as your own</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. User Submissions</h2>
            <p>
              When you submit feedback, suggestions, or other communications to us through our 
              contact form or feedback system, you grant us a non-exclusive, royalty-free, 
              perpetual, and worldwide license to use, reproduce, modify, and distribute such 
              submissions for the purpose of improving our Service.
            </p>
            <p>
              You represent that you have the right to submit such content and that it does not 
              violate any third-party rights or applicable laws.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT ANY WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED.
            </p>
            <p>We do not warrant that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Service will be uninterrupted, secure, or error-free</li>
              <li>The results obtained from using the Service will be accurate or reliable</li>
              <li>Any errors in the Service will be corrected</li>
              <li>The Service will meet your specific requirements</li>
            </ul>
            <p className="mt-4">
              While we strive to provide accurate calculations and visualizations, the Service is 
              intended for educational purposes only. You should verify results independently for 
              any critical applications.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, CPU SCHEDULING VISUALIZER SHALL NOT BE LIABLE 
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY 
              LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF 
              DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your access to or use of (or inability to access or use) the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any content obtained from the Service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless CPU Scheduling Visualizer and its 
              operators from and against any claims, damages, obligations, losses, liabilities, 
              costs, or debt, and expenses arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use of and access to the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party right, including intellectual property rights</li>
              <li>Any claim that your submissions caused damage to a third party</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Links and Services</h2>
            <p>
              Our Service may contain links to third-party websites or services that are not owned 
              or controlled by us. We have no control over, and assume no responsibility for, the 
              content, privacy policies, or practices of any third-party websites or services.
            </p>
            <p>
              We may display advertisements provided by third parties (such as Google AdSense). 
              These advertisements are subject to the third party&apos;s terms and privacy policies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Modifications to Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue the Service (or any part 
              thereof) at any time, with or without notice. We shall not be liable to you or any 
              third party for any modification, suspension, or discontinuance of the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any 
              material changes by posting the new Terms on this page and updating the &quot;Last Updated&quot; 
              date. Your continued use of the Service after any changes constitutes acceptance of 
              the new Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, 
              without regard to conflict of law principles. Any disputes arising from these Terms 
              or your use of the Service shall be resolved through appropriate legal channels.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that 
              provision shall be limited or eliminated to the minimum extent necessary so that 
              these Terms shall otherwise remain in full force and effect.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between 
              you and CPU Scheduling Visualizer regarding the use of the Service and supersede any 
              prior agreements between you and us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">15. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us through our{" "}
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
