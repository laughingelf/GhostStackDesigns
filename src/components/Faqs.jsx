import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const faqs = [
  {
    question: "What’s included in the GhostStack Express website package?",
    answer:
      "The GhostStack Express package includes a custom one-page small business website, a contact form, mobile-responsive layout, basic SEO setup, and optional add-ons like a gallery, reviews, logo design, and social media setup.",
  },
  {
    question: "How long does it take to build a small business website?",
    answer:
      "GhostStack Express websites are delivered within 48 hours. Custom or multi-page small business websites typically take 1–3 weeks depending on complexity and features.",
  },
  {
    question: "Do I need to provide my own domain?",
    answer:
      "Nope! We can handle domain purchase, setup, and configuration if needed — just choose the add-on or let us know during onboarding.",
  },
  {
    question: "Can I edit the site after it's live?",
    answer:
      "Yes. We offer flat-rate monthly edits or full CMS/blog setups if you need to make frequent changes. We'll talk through what fits your needs.",
  },
  {
    question: "Do you offer e-commerce or booking features?",
    answer:
      "Absolutely. That’s part of our Premium Build offering — we can integrate Shopify, Calendly, payment forms, booking tools, and more.",
  },
  {
    question: "What platforms do you build on?",
    answer:
      "We specialize in custom HTML/CSS/React builds for speed and performance, but also offer Wix-based sites for clients who want drag-and-drop editing.",
  },
  {
    question: "Do you offer hosting and ongoing website support?",
    answer:
      "Yes. We provide fully managed website hosting with updates, backups, and support starting at $25/month so small business owners don’t have to worry about maintenance.",
  },
  {
    question: "What if I already have a logo or domain?",
    answer:
      "No problem! We’ll incorporate whatever you have — and can help improve or configure assets if needed.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "Most of our services are flat-rate. Monthly packages require a 6-month minimum, and hosting is month-to-month after the initial term.",
  },
  {
    question: "How do I get started?",
    answer:
      "Pick a package from our pricing page and hit 'Start Now' — or schedule a call if you'd like to talk it through first. We’re here to help."
  }
];

<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    })}
  </script>
</Helmet>


const FAQPage = () => {
  return (
    <section aria-label="FAQ – Frequently Asked Questions" className="min-h-screen py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold header-font text-center mb-12 blue-word underline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-gray-200  border border-white/10 rounded-xl p-6"
            >
              <h2 className="text-2xl md:text-3xl font-semibold header-font mb-2 blue-word">
                {faq.question}
              </h2>
              <p className="text-xl par-font text-gray-800">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
