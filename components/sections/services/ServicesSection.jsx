"use client";
import { useRef } from "react";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import SwiperNavigation from "./SwiperNavigation";
import ServicesSlider from "./ServiceSlider";
import { Services } from "./services"; 

export function ServicesSection({ t }) {
  const swiperRef = useRef(null); 

  return (
    <section className="pt-32 pb-32 bg-[#F6F9FC] relative overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto px-4 relative z-10">
        <Image
          src="/decorative-f.png"
          alt="decorative about image"
          width={800}
          height={800}
          className="absolute -top-30  -start-40  z-10   md:w-[500px] md:h-[500px] object-contain"
        />
        <div className="flex justify-between items-center mb-12" data-aos="fade-up" data-aos-delay="100">
          <SectionHeader
            title={t("services.title")}
            subtitle={t("services.subtitle")}
          />
          <SwiperNavigation swiperRef={swiperRef} />
        </div>

        {/* Slider */}
        <div data-aos="zoom-in" data-aos-delay="150">
          <ServicesSlider services={Services({ t })} swiperRef={swiperRef} />
        </div>
      </div>

      {/* Decorative background image */}
      <Image
        src="/services-decoration.png"
        alt="decorative background"
        loading="lazy"
        width={3000}
        height={300}
        className="absolute   object-contain opacity-80 bottom-0 start-0 w-full h-[200px] md:h-[200px] pointer-events-none select-none z-0"
      />
    </section>
  );
}
