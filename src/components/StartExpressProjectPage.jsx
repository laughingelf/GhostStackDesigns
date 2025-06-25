import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ExpressProjectForm from "./ExpressForm";

const StartExpressProjectPage = () => {
  const [params] = useSearchParams();
  const [sessionValid, setSessionValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const sessionId = params.get("session_id");


  useEffect(() => {
    if (!sessionId) {
      navigate("/contact");
      return;
    }

    fetch(`/.netlify/functions/get-checkout-session?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data)
        if (data && data.customer_details?.email) {
          setSessionValid(true);
        } else {
          navigate("/contact");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Stripe session validation failed:", err);
        navigate("/contact");
      });
  }, [sessionId, navigate]);

  if (loading) {
    return <div className="text-center p-10 text-2xl blue-word header-font">Validating session...</div>;
  }

  if (!sessionValid) {
    return null; // Redirect will occur from useEffect
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-5xl font-bold mb-6 header-font blue-word">Start Your Express Project</h1>

      <p className="mb-4 text-gray-200 text-lg">
        Your payment has been successfully received — thank you for trusting us with your website!
      </p>

      <p className="mb-4 text-gray-200 text-lg">
        To keep things moving smoothly, please take a few minutes to fill out the form below. This helps us gather the essential info we need to tailor your new site to your business goals.
      </p>

      <p className="mb-4 text-gray-200 text-lg">
        You’ll be able to tell us about your business, the services you offer, and share any assets (like logos or images). Don’t worry if you don’t have everything ready — we’ll guide you every step of the way.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div className="bg-gray-100 p-6 rounded-xl text-gray-800 text-center shadow-lg">
          <div className="text-4xl mb-3">📝</div>
          <h3 className="text-xl font-bold mb-2 header-font">Step 1: Fill Out the Form</h3>
          <p className="text-md text-gray-700">
            Tell us about your business, your services, and what you need. This sets the foundation.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl text-gray-800 text-center shadow-lg">
          <div className="text-4xl mb-3">📂</div>
          <h3 className="text-xl font-bold mb-2 header-font">Step 2: Choose Upload Method</h3>
          <p className="text-md text-gray-700">
            Select between Google Drive or OneDrive. After submitting, we’ll email you a secure folder link.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl text-gray-800 text-center shadow-lg">
          <div className="text-4xl mb-3">🚀</div>
          <h3 className="text-xl font-bold mb-2 header-font">Step 3: We’ll Get to Work</h3>
          <p className="text-md text-gray-700">
            Once we have your info and assets, we’ll start building. From the time we receive all assets, it will take no longer than 48 hours to complete.
          </p>
        </div>
      </div>

      <p className="mb-10 text-3xl text-gray-100 font-semibold header-font">
        Let’s get started — we’re excited to build something awesome for you.
      </p>

      <ExpressProjectForm />
    </div>
  );
};

export default StartExpressProjectPage;
