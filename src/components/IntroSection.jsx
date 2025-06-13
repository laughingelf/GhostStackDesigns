import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="w-full text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12">

        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h3
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="blue-word text-3xl tracking-wide uppercase mb-2 header-font"
          >
            Built for Small Business
          </motion.h3>

          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 header-font"
          >
            Designed to Work, Not Just Look Good
          </motion.h2>

          {/* Arrow Prompt */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center md:justify-start mb-4"
          >
            <ChevronDown size={36} className="blue-word animate-bounce" />
          </motion.div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed par-font"
          >
            At GhostStack Designs, we focus on building high-performance, custom-coded websites for small 
            businesses across the U.S. Our goal is to help local companies stay competitive in a world that's 
            shifting more and more toward online shopping. Every site we create is hand-coded for speed, SEO, 
            and long-term success—no page builders, no shortcuts. We handle updates for you, so you can focus 
            on running your business. As a growing company ourselves, we're investing in our future by helping 
            small businesses thrive alongside us.
          </motion.p>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/img/website.png"
            alt="Example"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
