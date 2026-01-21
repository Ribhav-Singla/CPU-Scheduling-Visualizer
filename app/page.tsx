"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface FeedbackForm {
  email: string;
  message: string;
}

export default function Home() {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState<FeedbackForm>({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFeedbackForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackForm),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFeedbackForm({ email: "", message: "" });
        alert("✅ Thank you! Your feedback has been sent successfully. We'll get back to you soon!");
      } else {
        setSubmitStatus("error");
        alert(`❌ Failed to send feedback: ${data.error || 'Please try again later.'}`);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus("error");
      alert("❌ Network error! Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <>
      <div className="landing_page_cont max-w-[1280px] w-full mx-auto">
        <div className="flex flex-col justify-center items-center landing_container pt-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5 },
            }}
            className="landing_page_title font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-5 w-full text-center"
          >
            <span className="cpu">CPU</span> Scheduling Visualizer
          </motion.h1>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-5"
          >
            <Link
              href="/algorithms"
              className="landing_page_btn_start font-bold text-lg"
            >
              Get started <span className="right_arrow">&#8594;</span>
            </Link>
          </motion.div>
        </div>

        <div
          className="p-2 sm:p-5 md:p-8 lg:p-12 xl:p-16 mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 text-justify gap-x-12 gap-y-5"
          style={{ backgroundColor: "rgb(238, 238, 238)" }}
        >
          {[
            {
              title: "First-Come, First-Served (FCFS):",
              description:
                "Processes are executed in the order they arrive, with no preemption. Once a process starts, it runs to completion. This is the simplest scheduling algorithm.",
            },
            {
              title: "Priority Scheduling (Preemptive):",
              description:
                "Processes are assigned a priority, and the CPU is allocated to the process with the highest priority. If a new process with a higher priority arrives, it preempts the current process.",
            },
            {
              title: "Shortest Job First (SJF) Preemptive:",
              description:
                "Also known as Shortest Remaining Time First (SRTF). The process with the shortest remaining execution time is selected next. If a new process arrives with a shorter burst time, the current process is preempted.",
            },
            {
              title: "Priority Scheduling (Non-Preemptive):",
              description:
                "Similar to preemptive priority scheduling, but once a process starts, it runs to completion, regardless of any higher-priority processes that may arrive.",
            },
            {
              title: "Shortest Job First (SJF) Non-Preemptive:",
              description:
                "The process with the shortest burst time is selected and runs to completion before the next process is chosen. Once a process starts, it is not preempted until it finishes.",
            },
            {
              title: "Round Robin (RR):",
              description:
                "Each process is assigned a fixed time quantum. The CPU cycles through the processes in a circular order, giving each process a turn. If a process doesn’t complete within its time quantum, it is placed back in the queue to await its next turn.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="col-span-1 px-5 sm:px-8 md:px-4 lg:px-0"
            >
              <ul>
                <li>
                  <strong>{item.title}</strong> {item.description}
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Floating Feedback Button */}
        <motion.button
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.5, duration: 0.5 },
          }}
          onClick={() => setShowFeedbackModal(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform duration-200 z-40"
          style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}
          aria-label="Open feedback form"
        >
          💬
        </motion.button>

        {/* Feedback Modal */}
        <AnimatePresence>
          {showFeedbackModal && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowFeedbackModal(false)}
                className="fixed inset-0 bg-black bg-opacity-50 z-50"
              />
              
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed bottom-6 right-6 w-[90vw] max-w-md bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
              >
                {/* Modal Header */}
                <div className="p-6 pb-4" style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}>
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                      💬 Feedback
                    </h2>
                    <button
                      onClick={() => setShowFeedbackModal(false)}
                      className="text-white hover:text-gray-200 transition-colors text-3xl leading-none"
                      aria-label="Close feedback modal"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-white text-sm mt-2 opacity-90">
                    We&apos;d love to hear your thoughts!
                  </p>
                </div>

                {/* Modal Content */}
                <div className="p-6 max-h-[60vh] overflow-y-auto">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={feedbackForm.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#12acee] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                        Your Feedback
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={feedbackForm.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Share your suggestions, ideas, or report any issues..."
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#12acee] focus:border-transparent transition-all resize-none"
                      />
                    </div>
                    
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-lg text-sm font-medium ${
                          submitStatus === "success" 
                            ? "bg-green-50 text-green-700 border border-green-200" 
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        {submitStatus === "success" 
                          ? "✓ Thank you! Your feedback has been submitted." 
                          : "✗ Something went wrong. Please try again."}
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      style={{
                        background: isSubmitting
                          ? '#9ca3af'
                          : 'linear-gradient(to right, #12acee, #5df488)',
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Feedback"}
                    </button>
                  </form>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
