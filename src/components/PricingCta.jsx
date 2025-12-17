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
            Simple, Transparent Pricing
          </motion.h3>

          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl text-gray-800 font-bold mb-6 header-font"
          >
            Small Business Website Packages for Every Budget
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 max-w-xl mb-6 par-font"
          >
            Whether you’re starting fresh or upgrading an existing site, our
            affordable web design plans make it easy for small businesses to get 
            online with professional, high-quality results.
          </motion.p>

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
              View Small Business Pricing →
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
            src="/img/websites2.png"
            alt="Small business website design pricing packages by GhostStack Designs"
            className="w-full max-w-xl rounded-xl shadow-lg shadow-gray-800"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCTASection;
