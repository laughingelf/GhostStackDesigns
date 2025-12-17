import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const GhostStackExpressPromo = () => {
  const features = [
    "Delivered in 48 Hours",
    "Mobile-Responsive Design",
    "Includes Logo, Services & Contact Info",
    "Live Link + Downloadable Files",
    "Optional Add-Ons: Gallery, Reviews, More",
  ];

  return (
    <section className="bg-white py-20 px-6 text-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 header-font">
            Fast, Affordable One-Page Websites for Small Businesses
          </h2>

          <p className="text-lg text-gray-700 mb-6 par-font">
            <span className="text-xl blue-word underline">GhostStack Express</span> is our 
            rapid-build option, perfect for small businesses that need a clean, 
            professional one-page website <strong>in just 48 hours</strong>. 
            It’s ideal for trades, freelancers, side hustlers, local shops, and 
            anyone needing an online presence without the cost or long timelines 
            of a full custom build.
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center text-lg text-gray-800 par-font">
                <CheckCircle className="text-cyan-600 mr-3 w-6 h-6" />
                {feature}
              </li>
            ))}
          </ul>

          <Link
            to="/ghoststack-express"
            className="inline-block blueon-white-btn px-8 py-4 rounded-xl text-lg font-semibold header-font shadow-md hover:scale-105 transition"
          >
            Learn More & Get Started →
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/img/ghostexpress-ex2.png"
            alt="One-page website design example from GhostStack Express - fast 48-hour build for small businesses"
            className="w-full max-w-md mx-auto rounded-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default GhostStackExpressPromo;
