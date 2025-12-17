import { motion } from "framer-motion";
import { useState } from "react";
import FlatRateAddOnModal from "./FlatRateAddOnModal";

const services = [
  {
    id: "businessProfile",
    title: "Google Business Profile Setup",
    price: "$50",
    desc: "Boost your local visibility with a fully optimized Google Business Profile. This flat-rate local SEO service helps your small business show up in Google Search and Google Maps.",
  },
  {
    id: "seo",
    title: "Basic SEO Boost",
    price: "$50",
    desc: "Lay the foundation for search engine visibility with optimized meta tags, alt text, headings, and improved page structure to help your website get noticed.",
  },
  {
    id: "socialMedia",
    title: "Social Media Setup",
    price: "$50",
    desc: "We’ll create branded, professional profiles on Facebook, Instagram, or your preferred platform — set up and ready for you to post, stay consistent, and grow your audience.",
  },
  {
    id: "domain",
    title: "Domain Setup / Configuration",
    price: "$50",
    desc: "Own your domain and connect it with confidence. We handle setup, DNS configuration, SSL, and email routing so your website launches smoothly and securely.",
  },
  {
    id: "logo",
    title: "Basic Logo Design",
    price: "$99",
    desc: "A simple, clean logo to give your small business a professional identity. Includes 1–2 initial concepts and basic revisions to get it right.",
  },
  {
    id: "graphics",
    title: "Branded Launch Graphics",
    price: "$59",
    desc: "Make your website launch look sharp with professionally designed social media graphics that match your site and branding across platforms.",
  },
];

const FlatRateServicesSection = () => {
  const [showFlatRateModal, setShowFlatRateModal] = useState(false);
  const [selectedBaseProduct, setSelectedBaseProduct] = useState(null);

  const handleFlatRateCheckout = async (items) => {
    const res = await fetch("/.netlify/functions/create-flatrate-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }), // send array
    });

    const { url } = await res.json();
    if (url) {
      window.location.href = url;
    } else {
      console.error("No URL returned from Stripe session:", res);
    }
  };

  return (
    <section className="w-full text-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl blue-word underline font-bold mb-4 header-font"
        >
          Flat-Rate Website & Branding Services
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl text-gray-100 header-font max-w-3xl mx-auto"
        >
          Affordable, one-time website add-ons and branding services to help your small
          business show up online, look professional, and support your main website package.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h4 className="text-3xl font-semibold mb-1 header-font">{service.title}</h4>
            <p className="text-2xl blue-word header-font font-bold mb-3">
              {service.price}
            </p>
            <p className="text-gray-800 mb-6 text-lg par-font">{service.desc}</p>

            <button
              onClick={() => {
                setSelectedBaseProduct(service.id);
                setShowFlatRateModal(true);
              }}
              className="inline-block blueon-white-btn header-font shadow-lg shadow-gray-800 hover:shadow-lg hover:scale-105 px-5 py-2 rounded-xl font-medium text-lg hover:bg-blue-700 transition"
            >
              Start Now
            </button>

            {showFlatRateModal && selectedBaseProduct && (
              <FlatRateAddOnModal
                baseProductId={selectedBaseProduct}
                onClose={() => {
                  setSelectedBaseProduct(null);
                  setShowFlatRateModal(false);
                }}
                onCheckout={handleFlatRateCheckout}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FlatRateServicesSection;
