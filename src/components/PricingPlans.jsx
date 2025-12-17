import { useState } from "react";
import { motion } from "framer-motion";
import ExpressAddOnModal from "./ExpressModal";
import ContactChoiceModal from "./ContactChoiceModal";
import ContactFormModal from "./ContactFormModal";

const websitePlans = [
  {
    key: "express",
    title: "GhostStack Express",
    price: "$99 One-Time",
    badge: "Fastest",
    description:
      "A done-for-you one-page site delivered in 48 hours. Perfect for freelancers, hustlers, and small shops that need a clean online presence now.",
    features: [
      "1 Custom Page",
      "Mobile-Responsive",
      "Logo + Services + Contact Info",
      "Live Link + Download",
      "Add-Ons Available (Gallery, Reviews, etc.)",
    ],
    cta: "Start Express",
    action: "express",
  },
  {
    key: "build-once",
    title: "Build Once (5-Page Website)",
    price: "From $599",
    badge: "Most Popular",
    description:
      "A 5-page small business website built to look professional, load fast, and convert—without a high monthly payment.",
    features: [
      "5 Custom Pages",
      "Branded Styling & Colors",
      "Custom Contact Form",
      "SEO-Friendly Structure",
      "Optional Blog/CMS Add-On",
    ],
    cta: "Get a Quote",
    action: "contact",
  },
  {
    key: "zero-down",
    title: "$0 Down Monthly Website",
    price: "$129/mo",
    badge: "No Upfront Cost",
    description:
      "Get a full 5-page website with no money down. Hosting included during your term—perfect if you want predictable payments.",
    features: [
      "5-Page Custom Website",
      "Hosting Included During Term",
      "2 Content Updates / Month",
      "Support & Maintenance Included",
      "12-Month Minimum Term",
    ],
    cta: "Start $0 Down",
    action: "contact",
    finePrint:
      "*Best for small businesses that want a website now without paying upfront.",
  },
  {
    key: "premium",
    title: "Premium Build",
    price: "Starting at $1,500",
    badge: "Custom",
    description:
      "For businesses that need advanced features like booking, e-commerce, memberships, or a totally custom experience.",
    features: [
      "Fully Custom Design",
      "Booking / E-Commerce Integrations",
      "CMS + Multi-Page Layouts",
      "Advanced Styling & Animation",
      "Custom Quote Based on Scope",
    ],
    cta: "Request a Quote",
    action: "contact",
  },
];

const hostingPlans = [
  {
    key: "basic",
    title: "Basic Hosting",
    price: "$25/mo",
    badge: "Best Value",
    description:
      "Fast, secure hosting with the essentials handled. Great if you don’t need constant changes.",
    features: [
      "Managed Hosting + SSL",
      "Uptime Monitoring",
      "Email Support",
      "Best for static sites",
    ],
    cta: "Choose Basic",
  },
  {
    key: "care",
    title: "Care Plan",
    price: "$50/mo",
    badge: "Most Common",
    description:
      "Hosting + a little help each month. Great for occasional updates without a big bill.",
    features: [
      "Everything in Basic",
      "1–2 Content Updates / Month",
      "Image + Text Swaps",
      "Priority Support",
    ],
    cta: "Choose Care",
  },
  {
    key: "growth",
    title: "Growth Plan",
    price: "$99/mo",
    badge: "Hands-Off",
    description:
      "For businesses that want it handled. Ongoing updates + support over time.",
    features: [
      "Everything in Care",
      "Unlimited Small Edits",
      "SEO / Meta Updates",
      "Quarterly Improvements",
    ],
    cta: "Choose Growth",
  },
];

const PricingPlansSection = () => {
  const [showExpressModal, setShowExpressModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showContactFormModal, setShowContactFormModal] = useState(false);

  const handleCheckout = async (addOns) => {
    const selectedIds = addOns.map((item) => item.id);
    const res = await fetch("/.netlify/functions/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ addOns: selectedIds }),
    });

    const { url } = await res.json();
    window.location.href = url;
  };

  const openContact = () => setShowContactModal(true);

  return (
    <section className="bg-white text-gray-900 py-24 px-6">
      {/* Intro */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 header-font text-gray-900">
          Pricing That Fits Small Business Reality
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto par-font">
          Pick your build option first (Express, Build Once, or $0 Down). Then choose
          a hosting & care plan that matches how hands-on you want to be.
        </p>
      </div>

      {/* A) Website Builds */}
      <div className="max-w-7xl mx-auto mb-16">
        <h3 className="text-3xl md:text-4xl font-bold header-font mb-6 text-gray-900">
          Website Builds
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {websitePlans.map((plan, i) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-black/90 border border-gray-300 rounded-2xl shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-2xl text-white underline font-bold header-font">
                    {plan.title}
                  </h4>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200 header-font">
                    {plan.badge}
                  </span>
                </div>

                <p className="blue-word text-3xl font-semibold mb-4 header-font">
                  {plan.price}
                </p>

                <p className="text-gray-100 text-lg mb-5 header-font">
                  {plan.description}
                </p>

                <ul className="space-y-2 mb-4 list-none text-gray-100">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>

                {plan.finePrint && (
                  <p className="text-xs text-gray-300 header-font">{plan.finePrint}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="blue-btn mt-6 px-6 py-3 rounded-xl text-xl font-semibold transition header-font"
                onClick={() => {
                  if (plan.action === "express") setShowExpressModal(true);
                  else openContact();
                }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* B) Hosting & Care Plans */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold header-font mb-2 text-gray-900">
          Hosting & Website Care Plans
        </h3>
        <p className="text-gray-700 par-font mb-6 max-w-3xl mx-auto">
          If you build once, you choose your monthly level of support. Start with hosting,
          then upgrade if you want ongoing edits and priority help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hostingPlans.map((plan, i) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-2xl font-bold header-font text-gray-900">
                    {plan.title}
                  </h4>
                  <span className="text-xs px-3 py-1 rounded-full bg-black/5 text-gray-800 header-font">
                    {plan.badge}
                  </span>
                </div>

                <p className="blue-word text-3xl font-semibold mb-4 header-font">
                  {plan.price}
                </p>

                <p className="text-gray-700 text-lg mb-5 par-font">
                  {plan.description}
                </p>

                <ul className="space-y-2 mb-6 list-none text-gray-800 par-font">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="blue-btn mt-auto px-6 py-3 rounded-xl text-xl font-semibold transition header-font"
                onClick={openContact}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-gray-600 mt-6 par-font max-w-3xl mx-auto">
          *If you choose the <strong>$0 Down Monthly Website</strong>, hosting is included during your term.
          After your term ends, you can stay hosted on any plan above.
        </p>
      </div>

      {/* Modals */}
      {showContactModal && (
        <ContactChoiceModal
          onClose={() => setShowContactModal(false)}
          onScheduleClick={() => {
            setShowContactModal(false);
          }}
          onShowContactForm={() => {
            setShowContactModal(false);
            setShowContactFormModal(true);
          }}
        />
      )}

      {showContactFormModal && (
        <ContactFormModal onClose={() => setShowContactFormModal(false)} />
      )}

      {showExpressModal && (
        <ExpressAddOnModal
          onClose={() => setShowExpressModal(false)}
          onCheckout={handleCheckout}
        />
      )}
    </section>
  );
};

export default PricingPlansSection;
