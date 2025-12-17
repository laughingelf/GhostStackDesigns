import { Briefcase, Code, Rocket, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Briefcase size={32} className="blue-word mb-3" />,
    title: "Small Business Focused",
    text: "Every website is built for real, working-class small businesses — not generic templates or big corporate brands.",
  },
  {
    icon: <Code size={32} className="blue-word mb-3" />,
    title: "Clean, Custom Code",
    text: "No bloated themes or drag-and-drop builders — just handcrafted, responsive code that’s easy to scale and update.",
  },
  {
    icon: <Rocket size={32} className="blue-word mb-3" />,
    title: "Fast, Mobile-Friendly & SEO-Ready",
    text: "Speed matters. We optimize your small business website for fast load times, mobile devices, and better search visibility.",
  },
  {
    icon: <ThumbsUp size={32} className="blue-word mb-3" />,
    title: "Easy to Maintain",
    text: "We build it right from day one, so ongoing updates, content changes, and small tweaks are simple and stress-free.",
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
          $0 Down Small Business Website – Custom 5-Page Design for $175/mo
        </motion.h2>

        <motion.p
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-gray-800 max-w-3xl mx-auto par-font mb-8"
        >
          Get a professionally built, fully responsive{" "}
          <strong>5-page small business website</strong> with no upfront costs.
          For <strong>$175/month</strong>, you get custom design, development,
          secure hosting, and monthly content updates, all under a simple
          6-month agreement. Need more than 5 pages or extra functionality?
          We’ll create a custom web design package based on your business goals.
          You’ll also get reliable support and ongoing improvements to keep
          your site fast, modern, and looking legit online.
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
            View Website Pricing & Plans
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
