import React from "react";

export default function BreadcrumbHero({ title, subtitle }) {
  return (
    <section className="relative h-64 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      {/* Background overlay pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Background image (optional) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200')",
        }}
      ></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {title || "About Us"}
          </h1>
        </div>
        <div className="w-32 h-1 bg-orange-500 mb-4"></div>

        {subtitle && (
          <p className="text-gray-300 text-lg max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

 