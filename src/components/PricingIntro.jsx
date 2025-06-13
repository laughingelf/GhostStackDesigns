import { motion } from "framer-motion";

const PricingIntroSection = () => {
  return (
    <section className="w-full text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="blue-word text-5xl md:text-7xl font-bold mb-6 header-font"
        >
          Simple, Transparent Pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-300 par-font"
        >
          At GhostStack Designs, we know that every small business has unique needs and budgets — and 
          your website should reflect that. That’s why we offer flexible website pricing that fits your 
          goals, timeline, and budget. Whether you’re looking for a custom-coded website for blazing 
          speed and top-tier SEO, a Wix website for easy management, or a secure e-commerce store, we 
          have a plan for you.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingIntroSection;
