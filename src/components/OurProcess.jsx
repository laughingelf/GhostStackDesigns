import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContactChoiceModal from "./ContactChoiceModal";
import ContactFormModal from "./ContactFormModal";
import { useState } from "react";

const OurProcessSection = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showContactFormModal, setShowContactFormModal] = useState(false);

  return (
    <section className="w-full text-gray-800 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="blue-word text-2xl underline uppercase tracking-widest mb-3 header-font"
        >
          Our Web Design Process
        </motion.h3>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl text-white font-bold mb-6 header-font"
        >
          From Idea to Small Business Website Launch
        </motion.h2>

        <motion.p
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl leading-relaxed text-gray-100 mb-8 par-font"
        >
          We make getting your small business online simple. Once you’re on
          board, we’ll get to know your business—either through a quick
          questionnaire or a friendly meeting if you’re local. From there, we
          handle everything: writing content, designing the layout, and{" "}
          <strong>building your custom website</strong> so it’s ready to go live.
          Most projects are up and running in about 2 to 3 weeks, and we’ll keep
          you updated every step of the way. Our goal is to give you a{" "}
          <strong>professional small business website</strong> without the
          stress, confusion, or busywork.
        </motion.p>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <button
            className="inline-block blue-btn header-font px-6 py-3 rounded-xl font-medium text-2xl transition"
            title="Start the small business website process with GhostStack Designs"
            onClick={() => {
              setShowContactModal(true);
            }}
          >
            Start the Process
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
            <ContactFormModal
              onClose={() => setShowContactFormModal(false)}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcessSection;
