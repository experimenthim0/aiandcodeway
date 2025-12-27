
import React from "react";

export default function GradientButton({ text }) {
  return (
    <button
      className="
        relative px-6 py-3 font-semibold text-white rounded-2xl overflow-hidden
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        animate-gradient-x shadow-lg
      "
    >
      <span className="relative z-10">{text}</span>
      <span
        className="
          absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
          opacity-0 hover:opacity-100 transition-opacity duration-500
        "
      />
    </button>
  );
}
