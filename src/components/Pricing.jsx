import React from "react";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();

  const handleComingSoon = () => {
    navigate("/coming-soon");
  };

  return (
    <section id="pricing" className="bg-black text-white px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Simple, <span className="text-pink-500">Transparent Pricing</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Plan */}
        <div className="group bg-gray-900 rounded-lg p-8 shadow-lg border-2 border-transparent hover:border-pink-500 transition-all duration-300 flex flex-col">
          <h3 className="text-xl font-bold">Free</h3>
          <p className="mt-2 text-gray-400">$0 /mo</p>
          <ul className="mt-6 space-y-3 text-gray-300 text-sm">
            <li>✔ 50 API calls per month</li>
            <li>✔ Basic support</li>
            <li>✔ HD video quality</li>
          </ul>
          <button
            onClick={handleComingSoon}
            className="mt-8 bg-gray-800 group-hover:bg-pink-600 px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <span className="block group-hover:hidden">Get Started</span>
            <span className="hidden group-hover:block">Choose Plan</span>
          </button>
        </div>

        {/* Pro Plan */}
        <div className="group bg-gray-900 rounded-lg p-8 shadow-lg border-2 border-transparent hover:border-pink-500 transition-all duration-300 flex flex-col">
          <h3 className="text-xl font-bold flex items-center justify-between">
            Pro{" "}
            <span className="bg-pink-600 text-xs px-2 py-1 rounded">
              Most Popular
            </span>
          </h3>
          <p className="mt-2 text-gray-400">$30 /mo</p>
          <ul className="mt-6 space-y-3 text-gray-300 text-sm">
            <li>✔ 1,500,000 API calls per month</li>
            <li>✔ $0.00002 per call after limit</li>
            <li>✔ No rate limits</li>
            <li>✔ Priority support</li>
            <li>✔ HD video quality</li>
            <li>✔ Advanced analytics</li>
          </ul>
          <button
            onClick={handleComingSoon}
            className="mt-8 bg-gray-800 group-hover:bg-pink-600 px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <span className="block group-hover:hidden">Get Started</span>
            <span className="hidden group-hover:block">Choose Plan</span>
          </button>
        </div>
      </div>
    </section>
  );
}
