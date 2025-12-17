import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactChoiceModal from "./ContactChoiceModal";
import ContactFormModal from "./ContactFormModal";

const HeroMain = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showContactFormModal, setShowContactFormModal] = useState(false);

  return (
    <section className="w-full text-white mt-25 py-10 px-6" id="hero">
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
            AFFORDABLE SMALL BUSINESS WEB DESIGN IN TEXAS
          </motion.h1>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-2xl md:text-3xl mb-4 header-font blue-word"
          >
            Websites that work as hard as you do.
          </motion.p>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            className="text-base md:text-lg mb-6 max-w-xl mx-auto md:mx-0 text-slate-200"
          >
            GhostStack Designs builds clean, custom, mobile-friendly websites for
            real small businesses across Texas - from trades and shops to local
            services. No agency fluff, just web design that makes your business
            look legit online.
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
                setShowContactModal(true);
              }}
            >
              Get Started
            </button>

            {showContactModal && (
              <ContactChoiceModal
                onClose={() => setShowContactModal(false)}
                onScheduleClick={() => {
                  setShowContactModal(false);
                  // setShowCalendarModal(true);
                }}
                onShowContactForm={() => {
                  setShowContactModal(false);
                  setShowContactFormModal(true);
                }}
              />
            )}

            {showContactFormModal && (
              <ContactFormModal onClose={() => setShowContactFormModal(false)} />
            )}

            <Link
              to="/services"
              className="white-btn text-2xl px-6 py-3 rounded-xl font-medium header-font hover:scale-105 transition"
            >
              Services
            </Link>
          </motion.div>

          {/* Soft mention of free sites */}
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            className="mt-4 text-sm md:text-base text-slate-300"
          >
            Now offering{" "}
            <span className="font-semibold">
              free 3-page starter websites
            </span>{" "}
            (Home, Services, About + Contact form) for small businesses until the
            end of the year. You only cover hosting at $30/month.
          </motion.p>
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
            alt="GhostStack Designs – small business web design in Texas"
            className="w-[38rem] h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroMain;
