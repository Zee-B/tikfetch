// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
        >
          Download TikTok Videos{" "}
          <span className="text-pink-500">Effortlessly</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-gray-300"
        >
          A reliable API for developers to download TikTok videos without
          watermarks. Easy integration, high availability, and competitive
          pricing.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/coming-soon"
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold text-white shadow-md"
          >
            Get Your API Key
          </Link>
          <Link
            to="/coming-soon"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold text-white"
          >
            Read the Docs
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
