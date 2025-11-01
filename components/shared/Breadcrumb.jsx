import React from "react";

export default function BreadcrumbHero({ title, subtitle }) {
  return (
    <section className="relative h-64 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      

      {/* Background image (optional) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('/Mask Group 21.png')",
        }}
      ></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-6 rounded-full bg-[#FC942A]"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {title || "About Us"}
          </h1>
        </div>
        <div className="w-32 h-2 rounded-lg bg-[#FC942A] mb-4"></div>

        {subtitle && (
          <p className="text-gray-300 text-lg max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

 