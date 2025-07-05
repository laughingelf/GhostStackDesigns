import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function JamesScottAgencyPage() {
  useEffect(() => window.scrollTo(0, 0), []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 * i, duration: 0.6 },
    }),
  };

    const heroVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };
  const heroItem = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const services = [
    {
      title: "Auto Insurance",
      image: "/img/salesImg/jamesscott-auto.png",
    },
    {
      title: "Commercial Insurance",
      image: "/img/salesImg/jamesscott-commercial.png",
    },
    {
      title: "Business Insurance",
      image: "/img/salesImg/jamesscott-business.png",
    },
    {
      title: "Home Insurance",
      image: "/img/salesImg/jamesscott-home.png",
    },
    {
      title: "Life Insurance",
      image: "/img/salesImg/jamesscott-life.png",
    },
    {
      title: "Marine Insurance",
      image: "/img/salesImg/jamesscott-marine.png",
    },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
       <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/img/salesImg/jamesscott-hero.png"
          alt="Texas insurance coverage"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <motion.h1
            variants={heroItem}
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            Insurance You Can Trust, From a Name You Know
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-4 text-lg md:text-2xl text-gray-200"
          >
            At James Scott Insurance, we help Texans protect what matters most — with tailored coverage and personal service every step of the way.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <motion.button
              variants={heroItem}
              className="rounded-full bg-amber-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-amber-600 transition"
            >
              Request a Quote
            </motion.button>
            <motion.button
              variants={heroItem}
              className="rounded-full bg-white/10 border border-white px-6 py-3 text-white font-semibold backdrop-blur hover:bg-white/20 transition"
            >
              Why Choose Us
            </motion.button>
          </motion.div>
        </motion.div>
      </section>


      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-6">
          {/* <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Our Services
          </motion.h2> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <motion.div
                key={svc.title}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition"
              >
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{svc.title}</h3>
                  <p className="text-sm text-gray-600">
                    Built on trust, tailored to Texans. James Scott Insurance delivers clarity and protection for every policy.
                  </p>
                  <div className="flex justify-center items-center underline hover:scale-105 transition">
                    <a href="/">Learn More</a><ArrowRight className="h-4"/>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" id="about">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.img
            src="/img/salesImg/jamesscott-about.png"
            alt="James Scott"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl text-white md:text-4xl underline font-bold mb-6">
              Meet James Scott
            </h2>
            <p className="mb-4 text-white leading-relaxed">
              After earning an Engineering degree from Texas A&M, James launched a successful career with Lockheed Martin and Sandvik AB before founding the Scott Insurance Group in 2010.
            </p>
            <p className="mb-4 text-white leading-relaxed">
              He now leads a dedicated team helping Texans understand the real difference between having insurance and being truly protected.
            </p>
            <blockquote className="italic text-amber-600 font-medium">
              “As an agency owner, I am dedicated to a long-term responsibility to my clients.” — James Scott
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
       {/* Contact & Intake Form */}
      <section className="bg-blue-200 text-gray-800 py-20" id="contact">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Request a Quick Quote
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-gray-800"
            >
              <p><strong>Address:</strong> 11347 N Sam Houston Pkwy E, Humble, TX 77396</p>
              <p><strong>Phone:</strong> <a href="tel:17132557469" className="underline">(713) 255-7469</a></p>
              <p><strong>Email:</strong> <a href="mailto:James@JamesScottAgency.com" className="underline">James@JamesScottAgency.com</a></p>
              <p><strong>Office Hours:</strong> Mon–Fri, 9 AM – 6 PM</p>
              <p className="text-sm italic opacity-80">*This form is a demo only and does not submit data.</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white text-gray-900 rounded-xl shadow-lg p-6 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">First Name*</label>
                  <input type="text" required placeholder="John" className="border rounded-md p-2 w-full" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Last Name*</label>
                  <input type="text" required placeholder="Doe" className="border rounded-md p-2 w-full" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Email*</label>
                  <input type="email" required placeholder="you@example.com" className="border rounded-md p-2 w-full" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Phone*</label>
                  <input type="tel" required placeholder="(123) 456-7890" className="border rounded-md p-2 w-full" />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">ZIP Code*</label>
                <input type="text" required placeholder="77001" className="border rounded-md p-2 w-full" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">What coverage are you interested in?</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Auto', 'Commercial', 'Business', 'Home', 'Life', 'Marine'].map((item) => (
                    <label key={item} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" /> {item}
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Preferred Contact Method</label>
                <div className="flex gap-4">
                  {['Call', 'Text', 'Email'].map((method) => (
                    <label key={method} className="flex items-center gap-2 text-sm">
                      <input type="radio" name="contactMethod" /> {method}
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Additional Details</label>
                <textarea rows="3" placeholder="Tell us anything else we should know..." className="border rounded-md p-2 w-full"></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-600 text-white font-semibold py-3 rounded-md hover:bg-amber-700 transition">
                Submit Quote Request
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Scott Insurance Group | Built by GhostStack Designs
        </p>
        <p>This page is a custom preview created by GhostStack Designs. Not affiliated unless noted.</p>
      </footer>
    </div>
  );
}
