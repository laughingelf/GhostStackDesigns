import { motion } from "framer-motion";
import { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#222222";
  }, []);

  return (
    <section className="w-full py-24 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Logo Section */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 text-center"
        >
          <img
            src="/img/ghost-only-logo.png"
            alt="GhostStack Designs Logo"
            className="mx-auto w-96 h-auto" // Larger logo
          />
        </motion.div>

        {/* Form Section */}
        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="w-full lg:w-1/2 bg-white p-8 rounded-xl text-gray-800 shadow-lg"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Netlify Hidden Fields */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <h2 className="text-3xl font-bold mb-6 header-font text-center">
            Let’s Talk About Your Project
          </h2>

          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-lg mb-1 font-medium header-font">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg mb-1 font-medium header-font">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg mb-1 font-medium header-font">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="w-full text-gray-800 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg mb-1 font-medium header-font">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="header-font blueon-white-btn shadow-lg shadow-gray-800 hover:shadow-xl hover:scale-105 px-6 py-3 rounded-xl font-medium text-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
