import { useState } from "react";

const addons = [
  { id: "gallery", label: "Gallery Section", price: 25 },
  { id: "reviews", label: "Reviews Section", price: 25 },
  { id: "businessProfile", label: "Google Business Profile Setup", price: 50 },
  { id: "seo", label: "Basic SEO Boost", price: 50 },
  { id: "socialMedia", label: "Social Media Setup", price: 50 },
  { id: "domain", label: "Domain Setup / Configuration", price: 50 },
  { id: "logo", label: "Logo Design", price: 99 },
  { id: "graphics", label: "Branded Launch Graphics", price: 59 },
];

const ExpressAddOnModal = ({ onClose, onCheckout }) => {
  const [selected, setSelected] = useState([]);

  const toggleAddOn = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCheckout = () => {
    const selectedAddons = addons.filter((addon) =>
      selected.includes(addon.id)
    );
    onCheckout(selectedAddons);
  };

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white max-w-lg w-full rounded-xl shadow-lg p-6 relative">
        <button
          className="absolute top-2 right-3 text-gray-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl header-font font-bold text-center mb-4">
          Customize Your Express Site
        </h2>

        <div className="mb-4 text-center">
          <p className="font-semibold text-lg header-font underline text-gray-800 mb-2">
            Included by default:
          </p>
          <ul className="list-disc ml-1 text-md text-gray-700">
            <li>Google Map Embed</li>
            <li>Custom Contact Form</li>
            <li>Basic SEO Setup</li>
          </ul>
        </div>

        <p className="text-xl header-font font-semibold text-center mb-6">
          Base Package: $99 (Required)
        </p>

        <div className="space-y-2">
          {addons.map((addon) => (
            <label
              key={addon.id}
              className="flex items-center space-x-3 text-gray-800"
            >
              <input
                type="checkbox"
                checked={selected.includes(addon.id)}
                onChange={() => toggleAddOn(addon.id)}
                className="w-5 h-5"
              />
              <span>
                {addon.label} – ${addon.price}
              </span>
            </label>
          ))}
        </div>

        <button
          onClick={handleCheckout}
          className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition"
        >
          Continue to Checkout
        </button>
      </div>
    </div>
  );
};

export default ExpressAddOnModal;
