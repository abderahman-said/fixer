"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useIsRTL } from "@/utils/useIsRTL";
export default function ServiceCard({ service }) {
  const isRTL = useIsRTL();
  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="bg-white p-3 rounded-[22px] border border-[#707070]/30 hover:shadow-md transition overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative">
        <div className="relative w-full h-56 sm:h-60 md:h-64 rounded-t-[22px] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            width={400}
            height={240}
            className="object-cover rounded-xl w-full h-full"
          />
        </div>

        {/* Icon with outline */}
        <div className="absolute start-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white flex items-center justify-center before:content-[''] before:absolute before:inset-[-6px] before:rounded-full before:border-[3px] before:border-white before:opacity-80">
            <Image
              src={service.icon}
              alt={`${service.title} icon`}
              width={32}
              height={32}
              className="relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-10 pb-4 px-4   sm:pb-5 sm:px-5   md:pb-6 md:px-6 flex flex-col flex-grow justify-between min-h-[208px]">
        <div className="flex flex-col flex-grow">
          <h3 className="text-[#1a1f3a] font-bold text-base sm:text-lg mb-2    ">
            {service.title}
          </h3>

          {/* Controlled description height */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-grow  min-h-[40px]">
            {service.description}
          </p>
        </div>

        <Link
          href="#"
          className="text-[#FC942A] font-semibold  flex items-center justify-center   gap-2 hover:gap-3 transition-all mt-3 sm:mt-4"
        >
          {service.details} <FaArrowRight className="rtl:scale-x-[-1]" />
        </Link>
      </div>
    </div>
  );
}
