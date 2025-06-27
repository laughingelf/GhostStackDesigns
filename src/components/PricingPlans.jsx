import { useState } from "react";
import { motion } from "framer-motion";
import ExpressAddOnModal from "./ExpressModal";
import { useNavigate } from "react-router-dom";
import ContactChoiceModal from "./ContactChoiceModal";
import ContactFormModal from "./ContactFormModal";
import { FastField } from "formik";

const plans = [
  {
    title: "GhostStack Express",
    price: "$99 One-Time",
    description:
      "A fast, done-for-you one-pager delivered in 48 hours. Perfect for freelancers, hustlers, and small shops.",
    features: [
      "1 Custom Page",
      "Mobile-Responsive Design",
      "Includes Logo, Services & Contact Info",
      "Delivered as Live Link + Download",
      "Add-Ons Available (Gallery, Reviews, etc.)",
      "Optional Hosting: +$25/mo (Fully Managed)",
    ],
    cta: "Start Now",
  },
  {
    title: "Growth Plan",
    price: "$599 + $25/mo Hosting",
    description:
      "A 5-page custom site designed to grow with your business. Includes SEO and pro design tailored to your brand.",
    features: [
      "5 Custom Pages",
      "Branded Styling & Colors",
      "SEO Optimization",
      "Custom Contact Form",
      "Optional Blog (+$250)",
      "Flat-Rate Content Edits: $50/mo",
      "Fully Managed Hosting: $25/mo (Static) or $35/mo (With Blog/CMS Integration)",
    ],
    cta: "Get Started",
  },
  {
    title: "Monthly Plan",
    price: "$175/month",
    description:
      "No upfront cost. Hosting, updates, support, and a fully managed 5-page custom site. All-in-one solution.",
    features: [
      "Zero Upfront Cost",
      "5-Page Custom Website",
      "Hosting & Domain Included",
      "Unlimited Content Edits",
      "Ongoing Support & Updates",
      "6-Month Minimum Commitment",
    ],
    cta: "Subscribe Now",
  },
  {
    title: "Premium Build",
    price: "Starting at $1,500",
    description:
      "For businesses that need advanced functionality, booking systems, e-commerce, or a totally custom experience.",
    features: [
      "Fully Custom Design",
      "E-Commerce or Booking Integration",
      "Multi-Page Layouts & CMS Options",
      "Advanced Styling & Animation",
      "Creative Consultation",
      "Custom Quote Based on Needs",
      "Hosting: $35–$50/mo Based on Features",
    ],
    cta: "Request a Quote",
  },
];

const PricingPlansSection = () => {
  const [showExpressModal, setShowExpressModal] = useState(false);

  const [showContactModal, setShowContactModal] = useState(false);
  const [showContactFormModal, setShowContactFormModal] = useState(false)



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

  return (
    <section className="bg-white text-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-black/90 border border-gray-300 rounded-2xl shadow-lg p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl text-white underline font-bold header-font mb-2">{plan.title}</h3>
              <p className="blue-word text-3xl font-semibold mb-4 header-font">{plan.price}</p>
              <p className="text-gray-100 text-lg mb-6 header-font">{plan.description}</p>
              <ul className="space-y-2 mb-6 list-none list-inside text-gray-100">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="blue-btn mt-auto px-6 py-3 rounded-xl text-xl font-semibold hover:bg-blue-700 transition header-font"
              onClick={() => {
                if (plan.title === "GhostStack Express") {
                  setShowExpressModal(true);
                } else {
                  setShowContactModal(true)
                }
              }}
            >
              {plan.cta}
            </motion.button>
            {showContactModal && (
              <ContactChoiceModal
                onClose={() => setShowContactModal(false)}
                onScheduleClick={() => {
                  setShowContactModal(false);
                  // setShowCalendarModal(true); // Triggers calendar modal
                }}
                onShowContactForm={() => {
                  setShowContactModal(false);
                  setShowContactFormModal(true);
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {showContactFormModal && (
        <ContactFormModal
        onClose={() => setShowContactFormModal(false)}
        />
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
