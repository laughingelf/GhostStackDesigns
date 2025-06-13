import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Google My Business Creation",
    price: "$50",
    desc: "Boost your local visibility with a fully optimized Google Business Profile. Attract more customers and make it easier for people to find you in search results and on Google Maps.",
  },
  {
    title: "Single Page Portfolio (Hosting $10/mo)",
    price: "$150",
    desc: "Showcase your work beautifully with a simple, mobile-friendly single-page site. Perfect for freelancers, artists, and tradespeople who need a quick, effective online presence.",
  },
  {
    title: "Single Page Website (Hosting $10/mo)",
    price: "$150",
    desc: "Highlight your services, contact info, and business details all in one place. A great option for small businesses looking for an affordable, professional digital home.",
  },
  {
    title: "Basic SEO Setup",
    price: "$50",
    desc: "Lay the groundwork for higher search engine rankings. We set up essential SEO elements like meta tags, alt attributes, and page speed checks to help your site get found.",
  },
  {
    title: "Social Media Account Setup",
    price: "$50",
    desc: "Establish a consistent, professional brand on social media. We’ll set up your profiles with optimized bios, contact links, and branding so you can start connecting with customers.",
  },
  {
    title: "Domain Setup",
    price: "$50",
    desc: "Secure your own domain name and connect it seamlessly to your website and email. We handle DNS, SSL, and email routing so everything works smoothly from day one.",
  },
];

const FlatRateServicesSection = () => {
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
          Flat-Rate Services
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl text-gray-100 header-font max-w-3xl mx-auto"
        >
          Affordable add-ons to help your small business thrive online.
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
            <p className="text-2xl blue-word header-font font-bold mb-3">{service.price}</p>
            <p className="text-gray-800 mb-6 text-lg par-font">{service.desc}</p>
            <Link
              to="/contact"
              className="inline-block blueon-white-btn header-font shadow-lg shadow-gray-800 hover:shadow-lg hover:scale-105 px-5 py-2 rounded-xl font-medium text-md hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FlatRateServicesSection;
