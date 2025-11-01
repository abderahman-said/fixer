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
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex relative items-center gap-3 mb-12">
          {/* Divider */}
          <Image
            src={"/divider-orange.png"}
            alt="divider"
            width={120}
            height={80}
            className="absolute w-[80px] sm:w-[120px] md:w-[157px] h-[20px] sm:h-[30px] md:h-[39px] object-contain start-0 sm:start-[-10px] md:start-[-20px] top-0 z-0"
          />

          {/* Subtitle */}
          <h2
            className={`text-2xl sm:text-3xl md:text-5xl text-[#1C2039] relative z-10 font-bold w-fit leading-tight`}
          >
            Value Chain
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="relative">
                {/* Card */}
                <div className="bg-gray-50 rounded-2xl p-6 h-full flex flex-col items-center text-center relative overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Large background number */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-bold text-blue-100 opacity-30 select-none pointer-events-none">
                    {step.number}
                  </div>

                  {/* Icon with circle border */}
                  <div className="relative z-10 mb-6">
                    <div className="w-24 h-24 rounded-full border-2 border-orange-400 bg-white flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-blue-900" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-blue-900 mb-3 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>

                {/* Dashed connector line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[80px] -right-3 w-6 border-t-2 border-dashed border-gray-300 z-0"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
