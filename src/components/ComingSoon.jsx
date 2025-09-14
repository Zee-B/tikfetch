// src/components/ComingSoon.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTools } from "react-icons/fa";
import Footer from "./Footer";

export default function ComingSoon() {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date (you can change this)
    const targetDate = new Date("2025-12-31T23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Main Content */}
      <section className="flex-grow flex flex-col items-center justify-center text-center px-6">
        {/* Icon */}
        <FaTools className="text-pink-500 w-16 h-16 mb-6 animate-bounce" />

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          🚀 Something Awesome is Coming!
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-6">
          We’re working hard to launch this page. Stay tuned!
        </p>

        {/* Countdown */}
        <div className="flex space-x-6 text-center mb-8">
          <div>
            <p className="text-3xl font-bold text-pink-500">{timeLeft.days}</p>
            <span className="text-gray-400">Days</span>
          </div>
          <div>
            <p className="text-3xl font-bold text-pink-500">{timeLeft.hours}</p>
            <span className="text-gray-400">Hours</span>
          </div>
          <div>
            <p className="text-3xl font-bold text-pink-500">
              {timeLeft.minutes}
            </p>
            <span className="text-gray-400">Mins</span>
          </div>
          <div>
            <p className="text-3xl font-bold text-pink-500">
              {timeLeft.seconds}
            </p>
            <span className="text-gray-400">Secs</span>
          </div>
        </div>

        {/* Back Home Button */}
        <div className="flex gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <FaHome />
            Back Home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
