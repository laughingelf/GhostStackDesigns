import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = ({
  title = "We Build Sites That Work",
  primaryText = "Get Started",
  primaryLink = "/contact",
  secondaryText = "See Services",
  secondaryLink = "/services",
  backgroundImage = "/img/heroImg.png",
}) => {
  return (
    <section className="md:mt-20 relative w-full h-[60vh] overflow-hidden flex items-center justify-center text-center">
      
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover translate-y-20 md:translate-y-0 md:object-scale-down z-0"
      />

      {/* Animated Retro Image */}
      <Link to='/ghoststack-express'>
        <motion.img
          src="/img/ghoststack-express.png"
          alt="GhostStack Express"
          className="absolute top-28 right-2 md:top-8 md:right-14 w-24 md:w-36 z-40"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </Link>

      {/* Content */}
      <div className="relative z-20 px-6 translate-y-20 md:translate-y-0">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-4 header-font"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Need help getting your business online?{" "}
          <Link
            to="/contact"
            className="text-green-400 hover:underline font-semibold"
          >
            Let’s talk.
          </Link>
        </motion.p>

        <motion.div
          className="flex header-font flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to={primaryLink}
            className="blue-btn shadow-lg shadow-black hover:shadow-xl hover:scale-105 px-6 py-3 rounded-xl font-medium text-lg transition"
          >
            {primaryText}
          </Link>
          <Link
            to={secondaryLink}
            className="white-btn shadow-lg shadow-black hover:shadow-xl hover:scale-105 px-6 py-3 rounded-xl font-medium text-lg transition"
          >
            {secondaryText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
