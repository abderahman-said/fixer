"use client";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useIsRTL } from "@/utils/useIsRTL";
 
export function ClientsSection({ t }) {
  const swiperRef = useRef(null);
  const isRTL = useIsRTL();

  const partners = [
    { id: 1, logo: "/Group 12497.png", name: "FACiLiTY" },
    { id: 2, logo: "/Group 12497.png", name: "Odoo" },
    { id: 3, logo: "/Group 12497.png", name: "MOKO SMART" },
    { id: 4, logo: "/Group 12497.png", name: "Smartcat" },
    { id: 5, logo: "/Group 12497.png", name: "Techtrum Consult" },
    { id: 6, logo: "/Group 12497.png", name: "iTrace" },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" data-aos="fade-up">

      <div className="container mx-auto px-4 mb-8 relative z-10">
        <div className={`relative   `} data-aos="fade-up" data-aos-delay="100">
             {/* Divider */}
               <Image
                 src={"/divider-orange.png"}
                 alt="divider"
                 width={120}
                 height={80}
                 className="absolute w-[157px] h-[39px] object-contain start-[-20px] top-0 z-0"
               />
       
             {/* Subtitle */}
            <h2 className={`text-4xl text-[#1C2039] relative z-10 md:text-5xl font-bold leading-tight `}>
        {t("clients.title")}
      </h2>
       
           </div>
      </div>

        {/* Swiper Slider */}
        <div dir={isRTL ? "rtl" : "ltr"}>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          speed={800}
          spaceBetween={40}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
          className="mt-12"
        >
          {partners.map((partner, idx) => (
            <SwiperSlide key={partner.id}>
              <div className="relative group flex items-center justify-center h-28" data-aos="zoom-in" data-aos-delay={100 + idx * 50}>
                <div className="relative w-40 h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain transition-all hover:scale-110 duration-500   "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    </section>
  );
}
