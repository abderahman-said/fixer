"use client";
import { useRef } from "react";
import Image from "next/image";
import ServicesSlider from "./ServiceSlider";
import SwiperNavigation from "../services/SwiperNavigation";
import { Services } from "../services/services";
import { useIsRTL } from "@/utils/useIsRTL";

export function MostServicesSection({ t }) {
  const swiperRef = useRef(null);
  const isRTL = useIsRTL();


  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-32 bg-[#F6F9FC] relative overflow-hidden" data-aos="fade-up">
      {/* Decorative background image */}
      <Image
        src="/decorative-f.png"
        alt="decorative about image"
        width={800}
        height={800}
        className="absolute -top-10 -start-20 md:-top-20 md:-start-32 lg:-top-28 lg:-start-40 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] object-contain opacity-80 z-0"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-10 md:mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="relative text-center  ">
            <Image
              src={"/divider-orange.png"}
              alt="divider"
              width={120}
              height={80}
              className={
                `absolute w-[120px] sm:w-[140px] md:w-[157px] h-auto object-contain top-0 z-0 ` +
                (
                  isRTL
                    ? `   right-[-20px] md:translate-x-0`
                    : `    left-[-20px] md:translate-x-0`
                )
              }
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#1C2039] relative z-10">
              {t("mostServices.title")}
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <SwiperNavigation swiperRef={swiperRef} />
          </div>
        </div>

        {/* Slider */}
        <div data-aos="zoom-in" data-aos-delay="150">
          <ServicesSlider services={Services({ t })} swiperRef={swiperRef} />
        </div>
      </div>
    </section>
  );
}
