import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesSection = () => {
    const MotionLink = motion(Link); // create motion-enhanced Link

  return (
    <section className=" text-gray-800 py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-white uppercase tracking-widest text-4xl md:text-6xl mb-2 header-font">Custom Website Design & Wix Website Development</h3>
          <h2 className="blue-word text-2xl md:text-4xl font-bold mb-6 header-font">
            Custom-Coded Websites and Wix Builds — Tailored to Your Business
          </h2>
          <p className="text-xl leading-relaxed text-gray-100 header-font">
            At GhostStack Designs, we believe every business deserves a professional online presence that’s both effective and uniquely theirs.
            That’s why we offer custom website design—hand-coded with clean HTML and CSS—for unbeatable speed, security, and performance.
            For small businesses who prefer a drag-and-drop builder, we also offer Wix website development. No matter your choice, we build
            SEO-friendly websites that work hard for your business.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="space-y-16">
          {/* Each Benefit Block */}
          {[
            {
              title: "⚡ Lightning-Fast Website Performance",
              text: "Custom-coded websites are naturally fast, helping boost engagement and conversions. Wix builds offer flexibility but can include extra load — we optimize every build, but for speed, static code is king.",
            },
            {
              title: "🔒 Solid Website Security",
              text: "Static HTML/CSS websites avoid plugin risks and server-side issues. Wix sites are secure too, but run on shared platforms. Either way, we ensure SSL and best practices are applied.",
            },
            {
              title: "📈 Boost Your SEO Rankings",
              text: "We build all sites with SEO in mind, but custom sites offer clean structure and fast load times that search engines love. Wix can compete with extra care — and we bring that to every project.",
            },
            {
              title: "📍 Google Business Profile Optimization",
              text: "We pair optimized websites with well-managed Google Business Profiles to help you rank locally. Whether custom or Wix, we connect your site to your local audience.",
            },
          ].map((block, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center "
            >
              <h3 className="text-3xl blue-word font-semibold mb-2 header-font">{block.title}</h3>
              <p className="text-xl text-gray-100 header-font max-w-3xl ">{block.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Services List */}
        <div>
          <h3 className="text-4xl underline blue-word font-bold text-center mb-10 header-font">
            Services Designed for Small Business Success
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Website Development",
                desc: "Bespoke websites built with clean HTML and CSS for speed, security, and full control.",
              },
              {
                title: "Wix Website Development",
                desc: "Drag-and-drop websites designed for usability, mobile optimization, and performance.",
              },
              {
                title: "Google Business Profile Setup",
                desc: "Get found on Maps and Search with a polished, fully optimized business listing.",
              },
              {
                title: "Single Page Portfolio Website",
                desc: "Showcase your work with a fast-loading, scrollable one-page portfolio.",
              },
              {
                title: "Single Page Business Website",
                desc: "A streamlined digital home focused on conversion, contact, and local SEO.",
              },
              {
                title: "Basic SEO Setup",
                desc: "Meta tags, alt text, page speed checks, and more for a strong search foundation.",
              },
              {
                title: "Social Media Account Setup",
                desc: "Professional setup of business profiles on Facebook, Instagram, and LinkedIn.",
              },
              {
                title: "Domain & Email Setup",
                desc: "We help you purchase, configure, and connect your domain, email, SSL, and DNS.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h4 className="text-2xl font-semibold mb-2 header-font">{service.title}</h4>
                <p className="text-lg text-gray-700 mb-4 header-font">{service.desc}</p>
                <MotionLink
                    to="/pricing"
                    className="blue-word text-lg hover:underline header-font font-semibold inline-block"
                    whileHover={{
                    x: 4,
                    scale: 1.05,
                    color: "#027b8b", // blue-600
                    transition: { type: "spring", stiffness: 300 },
                    }}
                >
                    Learn More →
                </MotionLink>
              </motion.div>
            ))}
          </div>
          {/* CTA Button */}
            <div className="flex justify-center mt-16">
            <MotionLink
                to="/pricing"
                className="blue-btn shadow-md shadow-black hover:shadow-lg px-8 py-4 text-lg rounded-xl font-semibold header-font transition"
                whileHover={{
                scale: 1.08,
                rotate: -1,
                transition: { type: "spring", stiffness: 300 },
                }}
            >
                View Pricing Options
            </MotionLink>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
