import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl space-y-6"
      >
        <h1 className="text-6xl font-bold header-font blue-word">404</h1>
        <h2 className="text-4xl header-font">Page Not Found</h2>
        <p className="text-xl text-gray-300 par-font">
          Looks like this page doesn’t exist — or maybe it ghosted you. 🫥<br />
          Let’s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            to="/"
            className="blue-btn px-6 py-3 rounded-xl text-lg font-semibold hover:bg-cyan-600 transition header-font"
          >
            👻 Return Home
          </Link>
          <Link
            to="/contact"
            className="bg-white text-black px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-200 transition header-font"
          >
            💬 Contact Support
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default NotFoundPage;
