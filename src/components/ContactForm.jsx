import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SuccessModal from "./SuccessModal";

const ContactForm = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#222222";
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name,
        email,
        phone,
        message,
      }),
    })
      .then(() => {
        setShowModal(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <section className="w-full py-20 px-6 text-gray-100 bg-[#111827]">
      <SuccessModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="GhostStack Designs"
      >
        <p>
          Thanks for reaching out to GhostStack Designs! We got your message and we’ll get back to
          you within 24 hours. Talk soon!
        </p>
      </SuccessModal>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-12 items-start">
        {/* Left: Info / Contact Details */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-3">
            <h2 className="text-sm tracking-[0.25em] uppercase text-blue-300 header-font">
              Contact GhostStack Designs
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold header-font">
              Ready to get your business online (or fix what’s not working)?
            </h3>
            <p className="text-gray-300 header-font text-base md:text-lg leading-relaxed">
              Whether you need a brand new site, a rebuild of something that’s not doing its job,
              or you&apos;re just trying to figure out where to start, drop a message below. We
              typically reply within <span className="font-semibold">one business day</span>.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-5 space-y-2">
              <p className="text-xs font-semibold tracking-wide text-blue-300 uppercase">
                What can we help with?
              </p>
              <ul className="text-sm text-gray-300 space-y-1 header-font">
                <li>• New website or one-page build</li>
                <li>• Redesign or performance issues</li>
                <li>• GhostStack Express questions</li>
                <li>• Ongoing updates & hosting</li>
              </ul>
            </div>

            <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-5 space-y-3">
              <p className="text-xs font-semibold tracking-wide text-blue-300 uppercase">
                Direct contact
              </p>
              <div className="text-sm text-gray-300 space-y-1 header-font">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:ghoststackdesigns@gmail.com"
                    className="text-blue-300 hover:text-blue-200 underline-offset-2 hover:underline"
                  >
                    ghoststackdesigns@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone / Text:</span>{" "}
                  <a
                    href="tel:+1-000-000-0000"
                    className="text-blue-300 hover:text-blue-200 underline-offset-2 hover:underline"
                  >
                    (972) 338-0991
                  </a>
                </p>
              </div>
              <div className="text-xs text-gray-400 header-font">
                <p className="font-semibold text-gray-300">Open 24/7</p>
                <p>GhostStack Designs is available around the clock. Send a message anytime—day or night—and we’ll respond as quickly as possible.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="/img/ghost-only-logo.png"
              alt="GhostStack Designs Logo"
              className="w-16 h-16 rounded-full bg-slate-900 border border-slate-700 p-2"
            />
            <div className="text-sm text-gray-300 header-font">
              <p className="font-semibold text-gray-100">Websites for the working man.</p>
              <p>Custom, no-template builds that actually move the needle for small businesses.</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="w-full bg-white p-8 rounded-2xl text-gray-800 shadow-2xl shadow-black/40"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-2 header-font text-center">
            Start the conversation
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-center header-font">
            Tell us a bit about your business and what you&apos;re trying to build. We&apos;ll
            review your message and follow up with next steps and a clear game plan.
          </p>

          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm md:text-base mb-1 font-medium header-font"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-base mb-1 font-medium header-font"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm md:text-base mb-1 font-medium header-font"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-gray-800 border border-gray-300 px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm md:text-base mb-1 font-medium header-font"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="header-font blueon-white-btn shadow-lg shadow-gray-800 hover:shadow-xl hover:scale-105 px-6 py-3 rounded-xl font-medium text-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            <p className="mt-3 text-xs text-gray-500 header-font">
              By submitting this form, you agree to be contacted by GhostStack Designs about your
              project. No spam, ever.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
