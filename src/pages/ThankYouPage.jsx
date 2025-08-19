export default function ThankYou() {
  return (
    <section className="bg-white py-20 px-6 mt-16 md:px-12 text-center">
      <h1 className="text-4xl font-bold text-gray-900 blue-word header-font">Thanks for reaching out!</h1>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        We’ve got your intake form. Our team will review your info and follow up soon.
      </p>
      <a
        href="/"
        className="inline-block mt-8 rounded-lg bg-gray-900 px-6 py-3 text-white hover:bg-gray-800 blueon-white-btn header-font"
      >
        Back to Home
      </a>
    </section>
  );
}
