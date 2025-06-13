import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PricingCTASection = () => {
  return (
    <section className="w-full bg-white text-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h3
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="blue-word text-3xl underline uppercase tracking-wide mb-2 header-font"
          >
            Straightforward Pricing
          </motion.h3>

          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl text-gray-800 font-bold mb-6 header-font"
          >
            PRICING PACKAGES FOR EVERY BUDGET
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              to="/pricing"
              className="inline-block blueon-white-btn px-6 py-3 text-lg rounded-xl font-medium header-font shadow-lg shadow-gray-800 hover:shadow-xl hover:scale-105 transition"
            >
              See Pricing Details
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/img/websites2.png" // Replace with your image path
            alt="Pricing Example"
            className="w-full max-w-xl rounded-xl shadow-lg shadow-gray-800"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCTASection;
