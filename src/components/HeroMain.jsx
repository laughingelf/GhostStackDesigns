import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactChoiceModal from "./ContactChoiceModal";
import ContactFormModal from "./ContactFormModal";

const HeroMain = () => {
    const [showContactModal, setShowContactModal] = useState(false);
    const [showContactFormModal, setShowContactFormModal] = useState(false)


  return (
    <section className="w-full text-white mt-25 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">

         

        {/* Left Content with staggered animation */}
        <div className="md:w-2/3 text-center md:text-left mb-10 md:mb-0">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
            className="text-5xl md:text-8xl font-bold mb-4 header-font"
          >
            AFFORDABLE WEB DESIGN FOR SMALL BUSINESS
          </motion.h1>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-2xl md:text-3xl mb-6 header-font blue-word"
          >
            Websites that work as hard as you do.
          </motion.p>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button
              className="text-2xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium header-font blue-btn transition hover:scale-105"
              onClick={() => {
                setShowContactModal(true)
              }}
              >
              Get Started
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
            <Link to='/services' className="white-btn text-2xl px-6 py-3 rounded-xl font-medium header-font hover:scale-105 transition">
              Services
            </Link>
          </motion.div>
        </div>

        {/* Right Logo (optional animation) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/img/ghost-logo.png"
            alt="GhostStack Designs Logo"
            className="w-[38rem] h-auto"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroMain;
