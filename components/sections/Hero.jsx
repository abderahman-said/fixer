"use client";

import Image from "next/image";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { useIsRTL } from "@/utils/useIsRTL";

// Hero Section Component
export function HeroSection({ t }) {
  const isRTL = useIsRTL();
  return (
    <section className="hero relative  z-[1] min-h-[500px] md:min-h-[600px]">
      <Image
                src="/s.png"
                alt=""
                width={402}
                height={140}
                className=" object-contain w-[402px] z-[20] h-[140px] absolute -bottom-12 end-0 rtl:scale-x-[-1] select-none pointer-events-none"
              />
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div
          className={
            "absolute top-10 text-[100px] sm:text-[150px] lg:text-[200px] font-bold text-white " +
            (isRTL ? "right-10" : "left-10")
          }
        >
          FIX
        </div>
      </div>
      <div className="container overflow-hidden mx-auto py-24 sm:py-24 lg:py-20 pb-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
              <span className="flex items-center gap-2 sm:gap-3 mb-2">
                <span className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] bg-[#FC942A] rounded-full flex-shrink-0"></span>
                <span>{t("hero.title")}</span>
              </span>
              <div className="h-2 w-24 sm:w-32 bg-[#FC942A] rounded-xl mb-4 lg:mb-6"></div>
            </h1>
            <h2 className="text-[#E4E4E4] text-xl sm:text-2xl lg:text-3xl mb-3 lg:mb-4">
              {t("hero.subtitle")}
            </h2>
            <p className="text-[#FAFAFA] text-base sm:text-lg mb-6 lg:mb-8">
              {t("hero.description")}
            </p>

            {/* Search Bar */}
            <div className="flex items-center bg-[#dcbe912b] rounded-full p-2 w-full max-w-2xl overflow-hidden">
              <div className="flex items-center gap-2 sm:gap-4 px-2 sm:px-4 flex-1 min-w-0">
                <FaSearch className="text-[#FC942A] text-base sm:text-xl flex-shrink-0" />
                <input
                  type="text"
                  placeholder={t("hero.searchPlaceholder")}
                  className={
                    "bg-transparent border-s border-[#FC942A] ps-2 sm:ps-5 text-white text-sm sm:text-base placeholder-[#A8A8A8] outline-none flex-1 min-w-0 "
                  }
                />
              </div>
              <div
                className={
                  "hidden md:flex items-center gap-2 px-3 lg:px-4 border-s me-2 border-[#FC942A] "   
                }
              >
                <span className="text-[#A8A8A8] text-sm lg:text-base whitespace-nowrap">
                  {t("hero.category")}
                </span>
                <FaChevronDown className="text-[#FC942A] text-xs" />
              </div>
              <button className="bg-[#FC942A] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full hover:bg-[#ef8213cf] transition font-medium text-sm sm:text-base whitespace-nowrap flex-shrink-0">
                {t("hero.search")}
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] lg:max-w-none">
              <Image
                src="/Group 59732.webp"
                alt=""
                width={1300}
                height={1000}
                className="w-full rtl:scale-x-[-1] h-auto object-contain lg:w-[1041px] lg:relative lg:end-[-99px] lg:bottom-[-200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
