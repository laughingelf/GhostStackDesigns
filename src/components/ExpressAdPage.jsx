import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import ExpressAddOnModal from "./ExpressModal";

const GhostStackExpressAdPage = () => {
    const [showExpressModal, setShowExpressModal] = useState(false);

      const handleCheckout = async (addOns) => {
            const selectedIds = addOns.map((item) => item.id);
            console.log('selected ids', selectedIds)
            const res = await fetch("/.netlify/functions/create-checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ addOns: selectedIds }),
            });

            const { url } = await res.json();
            window.location.href = url;
        };

  return (
    <section className="bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold header-font text-white mb-4">
            🚀 Launch Your Website in 48 Hours — No Headaches, No Hassle
          </h1>
          <p className="text-xl md:text-2xl par-font text-gray-300 mb-10 max-w-3xl mx-auto">
            GhostStack Express is a done-for-you one-pager built to get your business online fast, look professional, and attract customers — all for just <strong className="text-cyan-400">$99</strong>.
          </p>
          <button className="blue-btn header-font text-xl px-8  py-4 font-semibold rounded-xl shadow-md shadow-black hover:scale-105 transition"
            onClick={() => {
                setShowExpressModal(true);
            }}
          >
            Start Your Site Now
          </button>
        </motion.div>

        {/* PAIN POINTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 text-center"
        >
          {[
            "You’ve tried building it yourself — and it never quite feels finished.",
            "Hiring a designer costs thousands — and takes weeks.",
            "You just need something clean, fast, and professional... now.",
          ].map((text, idx) => (
            <div key={idx} className="bg-white/10 p-6 rounded-xl border border-white/10">
              <p className="text-lg text-gray-200">{text}</p>
            </div>
          ))}
        </motion.div>

        {/* SOLUTION */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 header-font text-white">That’s Why We Built GhostStack Express</h2>
          <p className="text-lg text-gray-300 par-font">
            Designed for small business owners, freelancers, and local hustlers who just need something that looks good, loads fast, and gets the job done — without wasting weeks or paying agency rates.
          </p>
        </div>

        {/* FEATURES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center"
        >
          {[
            "⚡ 1 custom-coded page with your branding",
            "📱 Mobile-ready, scrollable layout",
            "✏️ Includes logo, contact info, and services",
            "💬 Optional live chat, reviews, gallery, or social setup",
            "🔒 Delivered with SSL & domain config options",
            "📂 Assets stored in Google or OneDrive folder"
          ].map((feature, i) => (
            <div key={i} className="bg-white/10 p-5 rounded-lg border border-white/10 text-gray-200">
              {feature}
            </div>
          ))}
        </motion.div>

        {/* PACKAGE BREAKDOWN */}
        <div className="text-center">
          <h3 className="text-3xl blue-word font-bold mb-4 header-font">Everything You Need — For Just $99</h3>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Includes site build, revisions, final handoff, and hosting options.
          </p>
          <button className="blue-btn text-xl px-10 py-4 rounded-xl font-semibold hover:scale-105 transition"
            onClick={() => {
                setShowExpressModal(true);
            }}
          >
            Claim My Spot →
          </button>
          <p className="mt-8 text-sm text-gray-400">Delivered in 48 hours or less. Limited spots each week.</p>
        </div>

        {/* TRUST SECTION */}
        <div className="bg-white/5 rounded-xl p-10 text-center shadow-inner">
          <h4 className="text-2xl blue-word font-bold mb-2 header-font text-white">Built by GhostStack Designs</h4>
          <p className="text-gray-300 text-lg par-font">
            We’re a small team based in Texas focused on helping working-class business owners get online fast — without the runaround.
            We’ve built dozens of sites for contractors, detailers, lawn care pros, and more. We get it. We’re here to make you look good.
          </p>
        </div>
      </div>
          {showExpressModal && (
                <ExpressAddOnModal
                onClose={() => setShowExpressModal(false)}
                onCheckout={handleCheckout}
                />
            )}
    </section>
  );
};

export default GhostStackExpressAdPage;
