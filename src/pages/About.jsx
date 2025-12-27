import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h1>

        {/* Content */}
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-blue-600">Our Website</span>! 
          We are passionate about building innovative digital solutions that help 
          people learn, grow, and achieve their goals. Our team is dedicated to 
          providing simple yet powerful tools for students, developers, and creators. 
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          This project is built using <span className="font-semibold">React</span> 
          and styled with <span className="font-semibold">Tailwind CSS</span> to 
          ensure a modern, clean, and responsive design. We believe in the 
          combination of technology and creativity to bring ideas to life. 
        </p>

        <p className="text-gray-600 leading-relaxed">
          Thank you for visiting our site! We’re excited to have you on this journey 
          with us. 🚀
        </p>

        {/* Team Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              To empower learners and innovators by providing tools that make 
              technology more accessible and fun.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h2>
            <p className="text-gray-600">
              To become a global platform that inspires creativity, knowledge 
              sharing, and collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
