import Image from "next/image";
import CountUp from "../shared/CountUp";  

export function StatsSection({ t }) {
  const stats = [
    { value: 1000, label: t("stats.fixerHands") },
    { value: 10, label: t("stats.yearsExperience") },
    { value: 2000, label: t("stats.happyClients") },
    { value: 200, label: t("stats.projectsCompleted") },
  ];

  return (
    <section className="py-20 md:py-32 lg:py-40 StatsSection relative bg-[#0A0E26] overflow-hidden" data-aos="fade-up">
      {/* Decorative Background Image */}
      <Image
        src="/Group 59731.png"
        alt="divider"
        width={238}
        height={80}
        className="absolute w-[180px] sm:w-[220px] lg:w-[238px] h-auto object-contain end-[-10px] -bottom-4 z-10"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3 text-center  " data-aos="fade-up" data-aos-delay="100">
            <div className="relative inline-block">
              {/* Shadowed Title */}
              <h2 className="absolute -top-1 -start-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1630]">
                {t("stats.title")}
              </h2>

              {/* Main Title */}
              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug">
                <span className="text-[#FC942A]">
                  {t("stats.title").split(" ")[0]}{" "}
                  {t("stats.title").split(" ")[1]}
                </span>{" "}
                {t("stats.title").split(" ").slice(2).join(" ")}
              </h2>
            </div>

            <p className="text-gray-300 text-base sm:text-lg py-6 sm:py-8 leading-relaxed max-w-[600px] mx-auto lg:mx-0">
              {t("stats.description")}
            </p>

            <button className="bg-[#FC942A] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#ef8213cf] transition font-medium text-base sm:text-lg">
              {t("stats.getRequest")}
            </button>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 lg:col-span-2 justify-center text-center">
            {stats.map((stat, index) => (
              <div key={index} className="relative" data-aos="zoom-in" data-aos-delay={100 + index * 100}>
                {/* Divider Behind Number */}
                <Image
                  src="/divider-orange.png"
                  alt="divider"
                  width={160}
                  height={80}
                  className="absolute w-[110px] sm:w-[140px] lg:w-[157px] h-auto object-contain start-1/2 -translate-x-1/2 lg:start-[-30px] lg:translate-x-0 -top-2 z-[-1]"
                />

                {/* CountUp Number */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                  <CountUp
                    from={0}
                    to={stat.value}
                    separator=","
                    direction="up"
                    duration={1.5}
                    className="count-up-text inline-block"
                  />
                  +
                </div>

                {/* Label */}
                <div className="text-white text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
