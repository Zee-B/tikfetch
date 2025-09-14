import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Brand */}
        <h3 className="text-pink-500 text-lg font-bold">TikFetch</h3>
        <p className="text-sm mt-2">
          The ultimate API solution for downloading TikTok videos without
          watermarks.
        </p>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-sm">
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-pink-500">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-pink-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-pink-500">
                  API Docs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/coming-soon" className="hover:text-pink-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/coming-soon" className="hover:text-pink-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="/coming-soon" className="hover:text-pink-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/coming-soon" className="hover:text-pink-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/coming-soon" className="hover:text-pink-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-xs text-gray-500">
          <p>© 2025 TikFetch. All rights reserved.</p>
          <p className="mt-2 max-w-2xl mx-auto">
            Disclaimer: TikFetch is a demo website built with ❤️ + React by
            ZeeWebWorks and is not affiliated with TikTok or the TikFetch
            Service.
          </p>
        </div>
      </div>
    </footer>
  );
}
