import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContactChoiceModal from "./ContactChoiceModal";
import ContactFormModal from "./ContactFormModal";
import { useState } from "react";

const VideoOverlaySection = () => {
      const [showContactModal, setShowContactModal] = useState(false);
      const [showContactFormModal, setShowContactFormModal] = useState(false)
      
  return (
    <section className="relative w-full h-[50vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/img/get-website-bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div> */}

      {/* Content */}
      <div className="relative z-20  flex flex-col justify-center items-center text-center h-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-bold translate-y-10 text-white mb-6  header-font"
        >
          Isn’t It Time You Had the Website You Deserve?
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="inline-block blue-btn translate-y-10 text-white px-6 py-3 text-2xl rounded-xl font-medium header-font hover:scale-105 transition"
            onClick={() => {
                setShowContactModal(true)
              }}          
          >
            Let's Build Yours
          </button>

              {showContactModal && (
                    <ContactChoiceModal
                      onClose={() => setShowContactModal(false)}
                      onScheduleClick={() => {
                        setShowContactModal(false);
                        // setShowCalendarModal(true); // Triggers calendar modal
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
