import { useState } from "react";
import { motion } from "framer-motion";
import SuccessModal from "./SuccessModal";

const ContactFormModal = ({ onClose }) => {
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
    <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white max-w-xl w-full rounded-2xl shadow-xl p-8 relative text-gray-800"
      >
        <button
          className="absolute top-3 right-4 text-gray-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

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

        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg mb-1 font-medium header-font">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
        </form>
      </motion.div>
    </div>
  );
};

export default ContactFormModal;
