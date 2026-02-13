"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toast, ToastContainer } from "@/components/ui/toast";

interface FeedbackForm {
  email: string;
  message: string;
}

interface ToastData {
  title: string;
  description: string;
  variant: "success" | "error";
}

export default function FeedbackButton() {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState<FeedbackForm>({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [toast, setToast] = useState<ToastData | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFeedbackForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showToast = (toastData: ToastData) => {
    setToast(toastData);
    setTimeout(() => setToast(null), 5000);
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
        showToast({
          title: "Success!",
          description: "Thank you! Your feedback has been sent successfully. We'll get back to you soon!",
          variant: "success"
        });
        setShowFeedbackModal(false);
      } else {
        setSubmitStatus("error");
        showToast({
          title: "Failed to send feedback",
          description: data.error || 'Please try again later.',
          variant: "error"
        });
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus("error");
      showToast({
        title: "Connection Error",
        description: "An error occurred. Please check your connection and try again.",
        variant: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Feedback Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.3 },
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
              className="fixed bottom-6 right-6 w-[90vw] max-w-md bg-card rounded-2xl shadow-2xl z-50 overflow-hidden"
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
                    <label htmlFor="feedback-email" className="block text-sm font-medium mb-2 text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="feedback-email"
                      name="email"
                      value={feedbackForm.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 border border-border bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="feedback-message" className="block text-sm font-medium mb-2 text-foreground">
                      Your Feedback
                    </label>
                    <textarea
                      id="feedback-message"
                      name="message"
                      value={feedbackForm.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Share your suggestions, ideas, or report any issues..."
                      className="w-full px-4 py-2.5 border border-border bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
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
                    className="w-full py-3 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: isSubmitting ? '#9ca3af' : 'linear-gradient(to right, #12acee, #5df488)' }}
                  >
                    {isSubmitting ? "Sending..." : "Send Feedback"}
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toast Notifications */}
      <ToastContainer>
        <AnimatePresence>
          {toast && (
            <Toast
              title={toast.title}
              description={toast.description}
              variant={toast.variant}
              onClose={() => setToast(null)}
            />
          )}
        </AnimatePresence>
      </ToastContainer>
    </>
  );
}
