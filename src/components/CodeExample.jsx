// src/components/CodeExample.jsx
import React from "react";

export default function CodeExample() {
  return (
    <section className="px-6 pt-0 pb-12 bg-black">
      <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg p-6 shadow-lg overflow-x-auto">
        <pre className="text-sm text-gray-300">
          {`fetch("https://api.tikfetch.xyz/download?url=VIDEO_URL", {
  headers: { "x-api-key": "YOUR_API_KEY" },
})
  .then(res => res.json())
  .then(data => console.log(data.download_url));`}
        </pre>
      </div>
    </section>
  );
}
