"use client";
import React from "react";
import { MdVerifiedUser, MdWorkspacePremium } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import Image from "next/image";

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
    <section className="py-16 px-4 bg-[#F6F9FC]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex relative items-center gap-3 mb-12">
          <Image
            src={"/divider-orange.png"}
            alt="divider"
            width={120}
            height={80}
            className="absolute w-[80px] sm:w-[120px] md:w-[157px] h-[20px] sm:h-[30px] md:h-[39px] object-contain start-0 sm:start-[-10px] md:start-[-20px] top-0 z-0"
          />

          <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#1C2039] relative z-10 font-bold w-fit leading-tight">
            Our values
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <div key={value.id} className="relative">
                {/* Decorative Corner - behind the card */}
                <div className="absolute -top-6 -left-6 w-[120px] h-[120px] z-0">
                  <Image
                    src="/Path 3.png"
                    alt="decorative corner"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow overflow-hidden z-10">
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-6 mt-8">
                      <IconComponent
                        className="w-8 h-8"
                        style={{ color: value.color }}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
