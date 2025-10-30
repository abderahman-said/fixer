"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ServiceCard from "./ServiceCard";

export default function ServicesSlider({ services, swiperRef }) {
  return (
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
        <SwiperSlide key={service.id}>
          <ServiceCard service={service} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
