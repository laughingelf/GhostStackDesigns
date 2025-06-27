import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CancelPage = () => {
  return (
    <section className="min-h-screen flex items-center -translate-y-50 justify-center px-6">
      <motion.div
        className="bg-white rounded-xl shadow-lg p-10 text-center max-w-md w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4 header-font">
          Payment Canceled
        </h1>
        <p className="text-gray-800 mb-6 text-xl par-font">
          No worries — your payment wasn’t completed. If you changed your mind or something went wrong, you can always try again.
        </p>

        <div className="space-y-3">
          <Link
            to="/pricing"
            className="blueon-white-btn header-font block w-full py-3 rounded-lg font-semibold text-xl hover:bg-blue-700 transition"
          >
            Return to Plans
          </Link>
          <Link
            to="/contact"
            className="text-blue-600 hover:underline font-medium block text-md"
          >
            Need help? Contact us.
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CancelPage;
