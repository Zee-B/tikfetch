// src/components/Features.jsx
import React from "react";
import { Zap, ShieldCheck, Film, Code2 } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-pink-500" />,
    title: "Lightning Fast",
    desc: "Download videos with blazing speeds. Average response <200ms.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-pink-500" />,
    title: "100% Reliable",
    desc: "99.99% uptime SLA. Zero downtime in the last 6 months.",
  },
  {
    icon: <Film className="w-6 h-6 text-pink-500" />,
    title: "No Watermarks",
    desc: "Crystal clear videos, HD & 4K support, original quality preserved.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-pink-500" />,
    title: "Simple Integration",
    desc: "Works with just 3 lines of code. API key ready in seconds.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-20 bg-gray-950 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Powerful Features,{" "}
        <span className="text-pink-500">Built for Developers</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="group bg-gray-900 rounded-xl p-6 flex items-start 
                       space-x-4 shadow-lg border-2 border-transparent 
                       hover:border-pink-500 hover:shadow-2xl 
                       transform hover:scale-105 
                       transition-all duration-300 ease-in-out"
          >
            {f.icon}
            <div>
              <h3 className="font-semibold text-lg group-hover:text-pink-500 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
