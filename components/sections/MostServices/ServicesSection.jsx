"use client";
import { useRef } from "react";
import Image from "next/image";
import SwiperNavigation from "./SwiperNavigation";
import ServicesSlider from "./ServiceSlider";

export function ServicesSection({ t }) {
  const swiperRef = useRef(null);

  const services = [
    {
      id: 1,
      title: t("services.softFacility.title"),
      description: t("services.softFacility.description"),
      details: t("services.softFacility.details"),
      image: "/services-1.png",
      icon: "/services-icon-1.svg",
      price: 300,
    },
    {
      id: 2,
      title: t("services.softFacility.title"),
      description: t("services.softFacility.description"),
      details: t("services.softFacility.details"),
      image: "/services-2.png",
      icon: "/services-icon-2.svg",
      price: 300,
    },
    {
      id: 3,
      title: t("services.softFacility.title"),
      description: t("services.softFacility.description"),
      details: t("services.softFacility.details"),
      image: "/services-3.png",
      icon: "/services-icon-3.svg",
      price: 300,
    },
    {
      id: 4,
      title: t("services.softFacility.title"),
      description: t("services.softFacility.description"),
      details: t("services.softFacility.details"),
      image: "/services-1.png",
      icon: "/services-icon-4.svg",
      price: 300,
    },
    {
      id: 5,
      title: t("services.softFacility.title"),
      description: t("services.softFacility.description"),
      details: t("services.softFacility.details"),
      image: "/services-2.png",
      icon: "/services-icon-3.svg",
      price: 300,
    },
  ];

  return (
    <section className="pt-32 pb-32 bg-[#F6F9FC] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <Image
          src="/decorative-f.png"
          alt="decorative about image"
          width={800}
          height={800}
          className="absolute -top-30  -start-40  z-10   md:w-[500px] md:h-[500px] object-contain"
        />
        <div className="flex justify-between items-center mb-12">
          <div className={`relative    `}>
            <div className="absolute -top-16 start-[-30px] text-[88px] font-bold text-[#EDF0F4] whitespace-nowrap  pointer-events-none select-none">
              {t("services.title")}
            </div>

            <Image
              src={"/divider-orange.png"}
              alt="divider"
              width={120}
              height={80}
              className="absolute w-[157px] h-[39px] object-contain start-[-20px] top-0 z-0"
            />
            {/* Subtitle */}
            <h2 className="text-4xl text-[#1C2039] relative z-10 md:text-5xl font-bold leading-tight">
              {t("services.subtitle")}
            </h2>
          </div>
          <SwiperNavigation swiperRef={swiperRef} />
        </div>

        {/* Slider */}
        <ServicesSlider services={services} swiperRef={swiperRef} />
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
