import { motion } from "framer-motion";

const plans = [
  {
    title: "Starter Plan",
    price: "$300",
    description: "Perfect for startups and small businesses that need a professional online presence fast.",
    features: [
      "Template-Based Starter Site",
      "1–3 Pages Included",
      "Basic Contact Form",
      "Mobile-Responsive Design",
      "Basic SEO Setup",
      "Flat-Rate Content Edits: $50/mo",
      "Email Support",
    ],
  },
  {
    title: "Pro Plan",
    price: "$900",
    description: "Ideal for growing businesses that want a custom-coded website with more features and flexibility.",
    features: [
      "Custom Design & Development",
      "5 Pages Included ($75/page after 5)",
      "Flat-Rate Content Edits: $50/mo",
      "Optional Blog Integration: $250",
      "Custom Contact Form",
      "Email Support",
    ],
  },
  {
    title: "Monthly Plan — Wix or Custom-Coded",
    price: "$175/mo",
    description: "Perfect for businesses that prefer a predictable monthly payment and ongoing support.",
    features: [
      "Design & Development (Custom or Wix)",
      "Hosting Included",
      "5 Pages Included ($75/page after 5)",
      "Unlimited Edits",
      "Optional Blog: $250",
      "24/7 Support",
      "Lifetime Updates",
    ],
  },
  {
    title: "Ecommerce Solutions",
    price: "Starting at $2,500",
    description: "Custom-built online stores designed for performance and secure payment integration.",
    features: [
      "Custom E-Commerce Store Design",
      "Flexible, Customizable Solutions",
      "Easy Product Management",
      "Secure Payment Integration",
    ],
  },
];

const PricingPlansSection = () => {
  return (
    <section className="bg-white text-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border bg-black/80 border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl text-white underline font-bold header-font mb-2">{plan.title}</h3>
              <p className="blue-word header-font text-3xl font-semibold text-blue-600 mb-4">{plan.price}</p>
              <p className="text-gray-100 par-font text-lg mb-6">{plan.description}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-100 text-md">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-auto blue-btn px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlansSection;
