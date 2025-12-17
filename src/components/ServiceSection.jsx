import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const MotionLink = motion(Link); // create motion-enhanced Link

  return (
    <section className="text-gray-800 py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-white uppercase tracking-widest text-4xl md:text-6xl mb-2 header-font">
            Small Business Website Design & Wix Website Development
          </h3>
          <h2 className="blue-word text-2xl md:text-4xl font-bold mb-6 header-font">
            Custom-Coded Websites and Wix Builds — Tailored to Your Small Business
          </h2>
          <p className="text-xl leading-relaxed text-gray-100 par-font">
            At GhostStack Designs, we believe every small business deserves a professional website
            that’s effective, fast, and uniquely theirs. We offer custom website design—hand-coded
            with clean HTML, CSS, and modern best practices—for unbeatable speed, security, and
            performance. For businesses that prefer a drag-and-drop builder, we also provide
            <strong> Wix website design and development</strong>. No matter your choice, we build
            <strong> SEO-friendly, mobile-responsive small business websites</strong> that work hard
            for you.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="space-y-16">
          {[
            {
              title: "⚡ Lightning-Fast Website Performance",
              text: "Custom-coded small business websites are naturally fast, helping boost engagement, conversions, and SEO. Wix builds offer flexibility but can introduce extra load — we optimize every build, but for pure speed, static code is king.",
            },
            {
              title: "🔒 Solid Website Security",
              text: "Static HTML/CSS websites avoid many plugin risks and server-side issues. Wix sites are secure as well, but run on shared platforms. In both cases, we make sure your site uses SSL and follows security best practices.",
            },
            {
              title: "📈 Built with SEO in Mind",
              text: "We structure every site with SEO fundamentals: clean code, proper headings, fast load times, and optimized meta tags. Custom websites shine here, but Wix sites can compete with the right strategy — and we bring that to every project.",
            },
            {
              title: "📍 Google Business Profile Optimization",
              text: "We pair an optimized website with a well-managed Google Business Profile so you can rank better in local search and on Maps. Whether your site is custom or Wix-based, we help connect your business to your local audience.",
            },
          ].map((block, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-3xl blue-word font-semibold mb-2 header-font">
                {block.title}
              </h3>
              <p className="text-xl text-gray-100 par-font max-w-3xl">
                {block.text}
              </p>
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
                title: "Custom Small Business Website Development",
                desc: "Bespoke small business websites built with clean HTML and CSS for performance, security, and full control.",
              },
              {
                title: "Wix Website Design & Development",
                desc: "Drag-and-drop Wix sites designed for usability, mobile optimization, and SEO — perfect for owners who want easier editing.",
              },
              {
                title: "Google Business Profile Setup",
                desc: "Fully optimized Google listing for Maps and Search visibility. Stand out locally and build trust with customers.",
              },
              {
                title: "Basic SEO Boost",
                desc: "Meta tags, alt text, headings, and site structure tuned to give your website a better shot at ranking in search.",
              },
              {
                title: "Social Media Setup",
                desc: "We’ll professionally create your Facebook, Instagram, or other profiles so your brand looks consistent everywhere.",
              },
              {
                title: "Domain Setup / Configuration",
                desc: "Secure and configure your domain, DNS, SSL, and custom email for a complete, reliable website setup.",
              },
              {
                title: "Basic Logo Design",
                desc: "Simple, clean logo to give your brand a polished identity. Includes an initial concept and a round of revisions.",
              },
              {
                title: "Branded Launch Graphics",
                desc: "Launch-ready social media graphics that match your new website and branding across platforms.",
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
                <h4 className="text-2xl font-semibold mb-2 header-font">
                  {service.title}
                </h4>
                <p className="text-lg text-gray-700 mb-4 par-font">
                  {service.desc}
                </p>
                <MotionLink
                  to="/pricing"
                  className="blue-word text-xl hover:underline header-font font-semibold inline-block"
                  whileHover={{
                    x: 4,
                    scale: 1.05,
                    color: "#027b8b",
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
              View Small Business Website Pricing
            </MotionLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
