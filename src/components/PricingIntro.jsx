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
          Small Business Website Pricing Made Simple
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-300 par-font"
        >
          At GhostStack Designs, we know every small business has unique needs,
          goals, and budgets — and your website should reflect that. That’s why
          we offer flexible, transparent pricing for{" "}
          <strong>custom small business websites</strong>, including
          hand-coded designs for top performance,{" "}
          <strong>Wix website development</strong> for easy management, and{" "}
          <strong>secure e-commerce builds</strong> for businesses ready to sell
          online. No hidden fees, no surprise costs — just clean, fast, SEO-ready
          websites built to help your business grow.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingIntroSection;
