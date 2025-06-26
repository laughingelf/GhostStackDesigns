import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const SuccessPage = () => {
  const [params] = useSearchParams();
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const MotionLink = motion(Link)

  const sessionId = params.get("session_id");

  useEffect(() => {
    if (sessionId) {
      fetch(`/.netlify/functions/get-checkout-session?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setSessionData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching session:", err);
          setLoading(false);
        });
    }
  }, [sessionId]);

  if (loading)
    return (
      <div className="p-10 text-center text-2xl blue-word header-font">
        Loading...
      </div>
    );

  if (!sessionData)
    return (
      <div className="p-10 text-center blue-word header-font">
        Something went wrong.
      </div>
    );

  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 py-16 text-center mt-40"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-5xl font-bold mb-4 blue-word header-font"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Payment Successful!
      </motion.h1>

        <motion.p
        className="text-lg text-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        >
        Thanks for your purchase — we’re excited to help you elevate your business!
        </motion.p>

        <motion.p
        className="mb-6 text-lg text-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        >
        Your payment has been received, and we’ll be reaching out shortly via email and phone to gather any details we need to get started.
        If your service includes assets (like logos or brand info), keep an eye on your inbox — we’ll send a secure link for uploading via{" "}
        <strong>{sessionData.metadata?.uploadPreference || "Google Drive / OneDrive"}</strong>.
        </motion.p>


      <motion.div
        className="text-left mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h2 className="text-2xl text-center font-semibold mb-2 header-font">Items Purchased:</h2>
        <ul className="list-disc text-center list-inside text-gray-100 text-lg">
          {sessionData.line_items.data?.map((item, idx) => (
            <li key={idx}>
              {item.description} – ${item.amount_total / 100}
            </li>
          ))}
        </ul>
      </motion.div>

      <MotionLink
        to='/'
        className="inline-block blue-btn text-white py-3 px-6 rounded-xl transition header-font text-xl"
        initial={{ y: 0 }}
        animate={{
          y: [0, -8, 0], // bounce animation
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.1,
          y: 0,
          transition: { duration: 0.2 },
        }}
      >
        Back to Home
      </MotionLink>
    </motion.div>
  );
};

export default SuccessPage;
