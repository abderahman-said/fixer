"use client";
import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";

export function WhyFixerSection({ t }) {
  const bgImage = "/common-bg.png"; // ✅ Common background for all icons

  const features = [
    {
      id: 1,
      icon: "/icons/Group 59739.png",
      title: t("whyFixer.commitment.title"),
    },
    {
      id: 2,
      icon: "/icons/Group 59738.png",
      title: t("whyFixer.protecting.title"),
    },
    {
      id: 3,
      icon: "/icons/Group 59737.png",
      title: t("whyFixer.raising.title"),
    },
    {
      id: 4,
      icon: "/icons/Group 59736.png",
      title: t("whyFixer.smart.title"),
    },
    {
      id: 5,
      icon: "/icons/Group 59735.png",
      title: t("whyFixer.always.title"),
    },
  ];

  return (
    <section className="py-40 relative overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title={t("whyFixer.title")}
          subtitle={t("whyFixer.subtitle")}
        />
        <Image
          src={"/icons/Path 3.png"}
          alt={"Path 3.png"}
          width={700}
          height={700}
          className="object-contain absolute end-[-300px] bottom-[-150px] w-[600px] h-[600px]   z-[-1]"
        />

        {/* Wrapper with continuous dashed line behind items */}
        <div className="relative pt-10 flex items-center justify-between flex-wrap gap-5 mx-auto">
          {/* Continuous dashed line behind icons */}
          <div className="hidden lg:block absolute top-1/2 start-1/2 max-w-[80%] -translate-x-1/2 w-full border-t-2 border-dashed border-[#0F144A] z-0"></div>

          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className="relative text-center flex-1 min-w-[160px] z-10"
              data-aos="zoom-in"
              data-aos-delay={100 + idx * 100}
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                {/* Common Background */}
                <div
                  className="absolute inset-0 bg-no-repeat bg-contain bg-center"
                  style={{ backgroundImage: `url(${bgImage})` }}
                ></div>

                {/* Icon */}
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain p-4 relative z-10"
                />

                {/* Number */}
                <div className="absolute z-[-2] -top-20 -start-6 text-[106px] font-bold text-[#FC942A] opacity-10 select-none">
                  {feature.id}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl   text-[#1a1f3a]">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
