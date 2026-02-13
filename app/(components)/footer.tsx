import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white mb-4">
              <span style={{ background: 'linear-gradient(to right, #12acee, #5df488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>CPU</span> Scheduling Visualizer
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              A free, interactive tool for learning and understanding CPU scheduling algorithms. 
              Perfect for students, educators, and anyone preparing for technical interviews.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 list-none">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/algorithms" className="text-gray-400 hover:text-white transition-colors">
                  Visualizer Tool
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Algorithms */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Algorithms</h4>
            <ul className="space-y-2 text-sm list-none">
              <li className="text-gray-400">First Come First Served (FCFS)</li>
              <li className="text-gray-400">Shortest Job First (SJF)</li>
              <li className="text-gray-400">Shortest Remaining Time First</li>
              <li className="text-gray-400">Round Robin (RR)</li>
              <li className="text-gray-400">Priority Scheduling</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 list-none">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-gray-500">
              © {currentYear} CPU Scheduling Visualizer. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built with ❤️ for computer science students worldwide
            </p>
            <a
              href="https://www.linkedin.com/in/ribhav-singla"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
