import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";

const ContactChoiceModal = ({ onClose, onShowContactForm }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        layout: "month_view",
        hideEventTypeDetails: false,
        cssVarsPerTheme: {
          light: { "cal-brand": "#0db6cc" },
          dark: { "cal-brand": "#0db6cc" },
        },
      });
    })();
  }, []);

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 text-center relative"
      >
        <button
          className="absolute top-3 right-4 text-gray-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-3xl header-font font-bold mb-4 text-gray-900">
          Let’s Get Started
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          How would you like to move forward?
        </p>

        <div className="flex flex-col gap-4">
          {/* Cal.com Button */}
          <button
            data-cal-link="ghoststack/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view"}'
            onClick={onClose}
            className="bg-cyan-600 hover:bg-cyan-700 text-white text-xl py-3 rounded-xl font-semibold transition header-font"
          >
            📞 Schedule a Phone Call
          </button>

          {/* Open contact form modal instead of mailto */}
          <button
            onClick={() => {
              onClose();
              onShowContactForm(); // <- trigger contact modal
            }}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 text-xl py-3 rounded-xl font-semibold transition header-font"
          >
            ✉️ Send an Email
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactChoiceModal;
