"use client";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { classNames } from "@/utils/classNames";
import { useIsRTL } from "@/utils/useIsRTL";

export default function SwiperNavigation({ swiperRef }) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const isRTL = useIsRTL();

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const updateState = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", updateState);
    updateState();

    return () => {
      swiper.off("slideChange", updateState);
    };
  }, [swiperRef]);

  const baseStyle =
    "w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200";
  const activeStyle =
    "border-[#1a1f3a] text-[#1a1f3a] hover:border-[#FC942A] hover:text-[#FC942A] hover:bg-[#fff3e5]";
  const disabledStyle =
    "border-gray-300 text-gray-300 cursor-not-allowed opacity-60";

  return (
    <div className="flex gap-3">
      <button
        onClick={() => (isRTL ? swiperRef.current?.slideNext() : swiperRef.current?.slidePrev())}
        disabled={isBeginning}
        aria-label="Previous slide"
        className={classNames(
          baseStyle,
          !isBeginning ? activeStyle : disabledStyle
        )}
      >
        <FaArrowLeft className="text-lg rtl:scale-x-[-1]" />
      </button>

      <button
        onClick={() => (isRTL ? swiperRef.current?.slidePrev() : swiperRef.current?.slideNext())}
        disabled={isEnd}
        aria-label="Next slide"
        className={classNames(baseStyle, !isEnd ? activeStyle : disabledStyle)}
      >
        <FaArrowRight className="text-lg rtl:scale-x-[-1]" />
      </button>
    </div>
  );
}
