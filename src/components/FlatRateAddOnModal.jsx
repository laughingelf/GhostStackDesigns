import { useState } from "react";

const flatRateAddOns = [
  { id: "businessProfile", label: "Google Business Profile Setup", price: 50 },
  { id: "seo", label: "Basic SEO Boost", price: 50 },
  { id: "socialMedia", label: "Social Media Setup", price: 50 },
  { id: "domain", label: "Domain Setup / Configuration", price: 50 },
  { id: "logo", label: "Logo Design", price: 99 },
  { id: "graphics", label: "Branded Launch Graphics", price: 59 },
];

const FlatRateAddOnModal = ({ onClose, onCheckout, baseProductId }) => {
  const [selected, setSelected] = useState([]);
  const baseProduct = flatRateAddOns.find(p => p.id === baseProductId);


  const toggleAddOn = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCheckout = () => {
    const selectedAddOns = flatRateAddOns.filter((addon) =>
      selected.includes(addon.id)
    );
    // Include the base flat-rate item in the checkout
    const allItems = [{ id: baseProductId }, ...selectedAddOns];
    // console.log('all the items', allItems.map((item) => item.id ))
    onCheckout(allItems.map((item) => item.id));
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
        Add Optional Services
        </h2>

        {baseProduct && (
        <div className="mb-6 text-center">
            <p className="text-lg font-semibold text-gray-800 header-font mb-1">Selected:</p>
            <p className="text-xl font-bold blue-word header-font">{baseProduct.label}</p>
            <p className="text-md text-gray-700 font-medium">Base Price: ${baseProduct.price}</p>
        </div>
        )}


        <div className="space-y-2">
          {flatRateAddOns
            .filter(addon => addon.id !== baseProductId)
            .map((addon) => (
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
          className="mt-6 w-full blueon-white-btn header-font text-lg hover:scale-105 font-semibold py-3 rounded-lg transition"
        >
          Continue to Checkout
        </button>
      </div>
    </div>
  );
};

export default FlatRateAddOnModal;
