import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

export interface ToastProps {
  title?: string
  description?: string
  variant?: "default" | "success" | "error"
  onClose?: () => void
}

export function Toast({ title, description, variant = "default", onClose }: ToastProps) {
  const variantStyles = {
    default: "bg-gray-900 text-white",
    success: "bg-green-600 text-white",
    error: "bg-red-600 text-white"
  }

  const variantIcons = {
    default: "ℹ️",
    success: "✅",
    error: "❌"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      className={`${variantStyles[variant]} rounded-lg shadow-2xl p-4 min-w-[300px] max-w-md`}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{variantIcons[variant]}</span>
        <div className="flex-1">
          {title && <h3 className="font-semibold mb-1">{title}</h3>}
          {description && <p className="text-sm opacity-90">{description}</p>}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors ml-2 text-xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>
    </motion.div>
  )
}

export function ToastContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 items-end">
      <AnimatePresence mode="popLayout">
        {children}
      </AnimatePresence>
    </div>
  )
}
