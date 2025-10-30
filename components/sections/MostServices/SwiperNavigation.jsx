"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function SwiperNavigation({ swiperRef }) {
  return (
    <div className="flex gap-3">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="w-12 h-12 rounded-full border-2 border-[#1a1f3a] text-[#1a1f3a] flex items-center justify-center hover:border-[#FC942A] hover:text-[#FC942A] transition"
      >
        <FaArrowLeft  className="rtl:scale-x-[-1]" />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="w-12 h-12 rounded-full bg-[#1a1f3a] text-white flex items-center justify-center hover:bg-[#FC942A] transition"
      >
        <FaArrowRight  className="rtl:scale-x-[-1]" />
      </button>
    </div>
  );
}
