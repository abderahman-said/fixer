"use client";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionHeader } from "./SectionHeader";
import { TestimonialCard } from "./TestimonialCard";
import { NavigationArrows } from "./NavigationArrows";
import { testimonials } from "./testimonialsData";

export function TestimonialsSection({ t }) {
  const swiperRef = useRef(null);

  const handlePrevious = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#1A1E37] relative testimonials-section overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title={t("testimonials.subtitle")} />

        {/* Testimonial Swiper */}
        <div className="max-w-[95%] sm:max-w-[98%] mx-auto relative pt-16 sm:pt-20">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="testimonial-swiper"
          >
            {testimonials(t).map((testimonial, idx) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 pt-20 sm:pt-24 lg:pt-28 relative min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex flex-col justify-between overflow-visible" data-aos="zoom-in" data-aos-delay={100 + idx * 100}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <NavigationArrows onPrevious={handlePrevious} onNext={handleNext} />

          {/* Pagination Dots */}
          <div className="testimonial-pagination flex justify-center gap-2 mt-6"></div>
        </div>
      </div>

      <Image
        src="/Group 59697.png"
        alt="decorative background"
        loading="lazy"
        width={3000}
        height={300}
        className="absolute object-contain opacity-80 bottom-0 start-0 w-full h-[150px] sm:h-[180px] md:h-[200px] pointer-events-none select-none z-0"
      />

      <style jsx global>{`
        .testimonials-section .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .testimonials-section .swiper-pagination-bullet-active {
          background: #fc942a;
          width: 32px;
          border-radius: 4px;
        }

        @media (min-width: 640px) {
          .testimonials-section .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }

          .testimonials-section .swiper-pagination-bullet-active {
            width: 40px;
          }
        }

        .testimonial-swiper {
          padding-bottom: 20px;
          overflow: visible !important;
        }

        .testimonial-swiper .swiper-wrapper {
          overflow: visible !important;
        }

        .testimonial-swiper .swiper-slide {
          overflow: visible !important;
        }
      `}</style>
    </section>
  );
}
