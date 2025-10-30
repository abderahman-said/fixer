"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ServiceCard from "./ServiceCard";
import { useIsRTL } from "@/utils/useIsRTL";

export default function ServicesSlider({ services, swiperRef }) {
  const isRTL = useIsRTL();
  useEffect(() => {
    if (!swiperRef?.current) return;
    const swiper = swiperRef.current;
    try {
      const currentIndex = swiper.activeIndex || 0;
      if (typeof swiper.changeDirection === "function") {
        swiper.changeDirection(isRTL ? "rtl" : "ltr");
      }
      swiper.slideTo(currentIndex, 0);
      if (typeof swiper.update === "function") swiper.update();
    } catch {}
  }, [isRTL, swiperRef]);
  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
    <Swiper
      modules={[Navigation]}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="services-swiper"
    >
      {services.map((service) => (
        <SwiperSlide key={service.id} className="flex">
          <ServiceCard service={service} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}
