import { Briefcase, Code, Rocket, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Briefcase size={32} className="blue-word mb-3" />,
    title: "Small Business Focused",
    text: "Everything we build is tailored to the needs of real, working-class businesses.",
  },
  {
    icon: <Code size={32} className="blue-word mb-3" />,
    title: "Clean, Custom Code",
    text: "No bloated themes or shortcuts — just handcrafted, responsive design.",
  },
  {
    icon: <Rocket size={32} className="blue-word mb-3" />,
    title: "Fast & Optimized",
    text: "Speed matters. We make sure your site loads quickly and ranks well.",
  },
  {
    icon: <ThumbsUp size={32} className="blue-word mb-3" />,
    title: "Easy to Maintain",
    text: "We build it right the first time, so updates and edits are a breeze.",
  },
];

const FeatureOverview = () => {
  return (
    <section className="w-full bg-gray-50 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="blue-word text-3xl uppercase tracking-wide mb-2 header-font underline"
        >
          What We Offer
        </motion.h3>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl text-gray-900 mb-6 header-font"
        >
          $0 DOWN – CUSTOM WEBSITE & ONGOING SUPPORT FOR $175/mo
        </motion.h2>

        <motion.p
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-gray-800 max-w-3xl mx-auto par-font mb-8"
        >
          Get a professionally built, fully responsive 5-page website with no upfront costs. For $175/month, 
          you'll receive design, development, hosting, and content updates each month — all backed by a 6-month 
          agreement. Need more than 5 pages? No problem — we’ll provide custom pricing based on your project’s 
          size and needs. You’ll also get reliable support and ongoing updates to keep your site sharp and running 
          smoothly.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <Link
            to="/pricing"
            className="blueon-white-btn inline-block text-white px-6 py-3 text-lg rounded-xl font-medium header-font shadow-lg shadow-gray-800 hover:shadow-xl hover:scale-105 transition"
          >
            View Pricing Options
          </Link>
        </motion.div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            style={{ backgroundColor: "#222222" }}
            className="p-6 rounded-xl shadow-md"
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h4 className="text-xl font-semibold mb-2 header-font">
              {feature.title}
            </h4>
            <p className="text-sm text-gray-300 par-font">
              {feature.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureOverview;
