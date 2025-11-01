import React from "react";
import { MdVerifiedUser, MdWorkspacePremium } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";

export default function OurValuesSection() {
  const values = [
    {
      id: 1,
      icon: MdVerifiedUser,
      title: "Reliability",
      description: "Precision and quality you can count on.",
      color: "#FF8C42",
    },
    {
      id: 2,
      icon: MdWorkspacePremium,
      title: "Professionalism",
      description: "Skilled experts delivering efficiency and excellence.",
      color: "#FF8C42",
    },
    {
      id: 3,
      icon: FaGlobeAmericas,
      title: "Sustainability",
      description:
        "Eco-friendly solutions with long-term financial efficiency.",
      color: "#FF8C42",
    },
  ];

  return (
    <section className="py-16 px-4  ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <div className="w-3 h-3 rounded-full bg-orange-400"></div>
            <div className="w-3 h-3 rounded-full bg-orange-300"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Our values</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.id}
                className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-blue-900 rounded-tl-2xl rounded-br-[60px]"></div>

                {/* Icon */}
                <div className="relative z-10 mb-6 mt-8">
                  <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                    <IconComponent
                      className="w-8 h-8"
                      style={{ color: value.color }}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
