import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContactChoiceModal from "./ContactChoiceModal";
import ContactFormModal from "./ContactFormModal";
import { useState } from "react";

const VideoOverlaySection = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showContactFormModal, setShowContactFormModal] = useState(false);

  return (
    <section className="relative w-full h-[50vh] overflow-hidden mt-12">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-label="Small business website design background video"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/img/get-website-bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-bold translate-y-10 text-white mb-4 header-font"
        >
          Isn’t It Time You Had the Professional Website Your Small Business Deserves?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg text-white max-w-2xl mx-auto mb-6 par-font translate-y-10"
        >
          GhostStack Designs builds fast, mobile-friendly websites for real small businesses that need to look legit online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            title="Build a professional small business website"
            className="inline-block blue-btn translate-y-10 text-white px-6 py-3 text-2xl rounded-xl font-medium header-font hover:scale-105 transition"
            onClick={() => setShowContactModal(true)}
          >
            Let’s Build Yours
          </button>

          {showContactModal && (
            <ContactChoiceModal
              onClose={() => setShowContactModal(false)}
              onScheduleClick={() => {
                setShowContactModal(false);
              }}
              onShowContactForm={() => {
                setShowContactModal(false);
                setShowContactFormModal(true);
              }}
            />
          )}

          {showContactFormModal && (
            <ContactFormModal
              onClose={() => setShowContactFormModal(false)}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoOverlaySection;
