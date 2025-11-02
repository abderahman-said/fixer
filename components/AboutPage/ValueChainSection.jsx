"use client";
import Image from "next/image";
import React from "react";
import {
  FaHandshake,
  FaLightbulb,
  FaCheckCircle,
  FaLeaf,
} from "react-icons/fa";

export default function ValueChainSection() {
  const steps = [
    {
      id: 1,
      icon: FaHandshake,
      title: "Partnerships",
      description: "Strong alliances with top specialists.",
      number: "1",
    },
    {
      id: 2,
      icon: FaLightbulb,
      title: "Study & Design",
      description: "Tailored, data-driven planning.",
      number: "2",
    },
    {
      id: 3,
      icon: FaCheckCircle,
      title: "Dependability",
      description: "Advanced tools & strict quality control.",
      number: "3",
    },
    {
      id: 4,
      icon: FaLeaf,
      title: "Sustainability",
      description: "Balancing eco-friendliness with financial efficiency.",
      number: "4",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
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
            Value Chain
          </h2>
        </div>

        {/* Dotted line behind all cards */}
        <div className="absolute left-0 right-0 top-[300px] hidden lg:block z-0">
          <div className="border-t-2 border-dashed border-gray-300 mx-auto w-[85%]"></div>
        </div>

        {/* Steps Grid */}
        <div className="flex flex-wrap justify-between gap-6 relative z-10">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="relative w-[220px] sm:w-[230px] md:w-[240px] h-[320px] flex-shrink-0"
              >
                {/* Number behind card */}
                <div
                  className="absolute text-[160px] font-bold select-none pointer-events-none"
                  style={{
                    color: "#3955A2",
                    opacity: "0.19",
                    bottom: "-60px",
                    left: "-60px",
                    zIndex: 0,
                  }}
                >
                  {step.number}
                </div>

                {/* Card */}
                <div className="relative bg-gray-50 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-full border-2 border-orange-400 bg-white flex items-center justify-center">
                      <IconComponent className="w-9 h-9 text-blue-900" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-blue-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
