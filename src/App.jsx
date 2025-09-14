// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CodeExample from "./components/CodeExample";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import ComingSoon from "./components/ComingSoon";

export default function App() {
  return (
    <Router>
      {/* Navbar is always visible */}
      <Navbar />

      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CodeExample />
              <Features />
              <Pricing />
              <Footer />
            </>
          }
        />

        {/* Coming Soon Page */}
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}
