import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <section className="w-full bg-white text-gray-800 py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h3
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="blue-word text-2xl underline uppercase tracking-wide mb-2 header-font"
          >
            About GhostStack Designs
          </motion.h3>

          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 header-font"
          >
            Small Business Web Design Built From Real-World Experience
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed header-font mb-4"
          >
            I’ve been part of the tech industry since 2014, starting in a help desk
            role and steadily growing into a software developer position. My journey
            into coding began with writing backend scripts to simplify my day-to-day
            tasks, and it quickly turned into a genuine passion. One of the biggest
            blessings during that time was being able to work remotely—my daughter
            had just turned one, and being present for those early moments meant
            everything.
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg leading-relaxed header-font mb-4"
          >
            In 2022, like many others, I was laid off. With a family to support, I
            had to shift gears and take whatever work I could find to keep food on
            the table. It was a tough season—one that pulled me away from what I
            loved doing most. After sending out more than 400 applications and
            hearing back from only two companies, I realized I couldn’t keep waiting
            for an opportunity to come along.
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg leading-relaxed header-font mb-4"
          >
            So, I decided to build my own.
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg leading-relaxed header-font mb-4"
          >
            That’s how <strong>GhostStack Designs</strong> was born—out of grit,
            necessity, and the drive to create something meaningful not just for
            myself, but for other small business owners who work just as hard to
            make their dreams happen. Today, I focus on{" "}
            <strong>building clean, custom websites for small businesses</strong>{" "}
            that need to look professional online without a huge agency budget.
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg leading-relaxed header-font"
          >
            My drive to support small businesses runs deep. I grew up just outside
            a small country town on a ranch, where we depended on mom-and-pop shops
            for everything from feed to groceries. In recent years, I’ve watched
            those types of businesses fade out, unable to keep up with the fast-moving
            online world. I knew I wanted to help, but until recently, I didn’t have
            the right approach. After seeing how another freelance developer was
            lifting up small businesses with affordable, purpose-built{" "}
            <strong>small business websites</strong>, it all clicked. So I went
            all in.
            <br />
            <br />
            GhostStack is more than a web design company—it’s a way to give the
            little guy a fighting chance in a world built for big players. Let’s
            build something that works just as hard as you do.
          </motion.p>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2"
        >
          <img
            src="/img/web-work.jpg"
            alt="Small business web design work in progress at GhostStack Designs"
            className="w-full max-w-md rounded-xl shadow-lg mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
