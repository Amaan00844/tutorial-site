'use client';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPromptModal({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-xl p-6 max-w-sm text-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <h2 className="text-lg font-semibold text-red-600 mb-4">Login Required</h2>
            <p className="text-gray-600 mb-6">Please login to access this feature.</p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
    