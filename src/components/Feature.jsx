import { Briefcase, Code, Rocket, ThumbsUp, Zap, Wallet, Hammer } from "lucide-react";
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
    text: "No bloated themes — just handcrafted, responsive code that’s fast, reliable, and easy to scale.",
  },
  {
    icon: <Rocket size={32} className="blue-word mb-3" />,
    title: "Fast, Mobile-Friendly & SEO-Ready",
    text: "Speed matters. We optimize for fast load times, mobile devices, and better search visibility.",
  },
  {
    icon: <ThumbsUp size={32} className="blue-word mb-3" />,
    title: "Easy to Maintain",
    text: "Start simple and upgrade anytime. Hosting & care plans available if you want it fully managed.",
  },
];

const offerCards = [
  {
    icon: <Zap size={28} className="blue-word mb-3" />,
    title: "GhostStack Express",
    price: "$99 one-time",
    text: "A clean one-page site delivered in 48 hours. Best for side hustles, freelancers, and “I need something now.”",
  },
  {
    icon: <Hammer size={28} className="blue-word mb-3" />,
    title: "Build Once (5 Pages)",
    price: "from $599",
    text: "Pay once, own the build. Then choose hosting & care starting at $25/mo — upgrade only if you want support.",
  },
  {
    icon: <Wallet size={28} className="blue-word mb-3" />,
    title: "$0 Down Monthly Website",
    price: "$129/mo",
    text: "No upfront cost. Get a 5-page site with hosting included during the term — predictable payments, built for small business.",
  },
];

const FeatureOverview = () => {
  return (
    <section className="w-full bg-gray-50 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
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
          Pick Your Path: Fast • Build Once • $0 Down
        </motion.h2>

        <motion.p
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-800 max-w-3xl mx-auto par-font"
        >
          GhostStack Designs builds websites for small businesses that need to look legit online
          without getting trapped in confusing plans. Choose a fast one-pager, a build-once site, or a
          $0 down monthly option. Either way, you get clean design, strong performance, and a setup
          that’s built to grow with you.
        </motion.p>
      </div>

      {/* Offer Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        {offerCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            style={{ backgroundColor: "#222222" }}
            className="p-6 rounded-2xl shadow-md text-left"
          >
            <div className="flex items-start justify-between">
              <div>
                {card.icon}
                <h4 className="text-2xl font-semibold header-font text-white mb-1">
                  {card.title}
                </h4>
              </div>
              <p className="blue-word text-xl font-bold header-font">{card.price}</p>
            </div>
            <p className="text-gray-300 par-font mt-3">{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <Link
          to="/pricing"
          className="blueon-white-btn inline-block text-white px-6 py-3 text-lg rounded-xl font-medium header-font shadow-lg shadow-gray-800 hover:shadow-xl hover:scale-105 transition"
        >
          View Website Pricing & Plans
        </Link>

        <p className="text-sm text-gray-600 mt-3 par-font">
          Hosting & website care plans start at <strong>$25/mo</strong>.
        </p>
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
