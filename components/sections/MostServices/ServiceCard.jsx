"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ServiceCard({ service }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white relative p-4 flex flex-col justify-between rounded-3xl shadow-lg min-h-[544px] overflow-hidden max-w-md mx-auto">
      {/* Image Section */}
      <Image
            src={"/icons/Group 12411.png"}
            alt={"/icons/Group 12411.png"}
            width={48}
            height={48}
            className="object-contain absolute end-5 top-5 w-[48px] rounded-3xl h-[48px]  "
          />
          <Image
            src={service.image}
            alt={service.title}
            width={400}
            height={240}
            className="object-cover rounded-xl h-[240px] w-full rounded-t-[22px]"
          />

      {/* Content Section */}
      <div className="pt-5">
        {/* Title */}
        <h3 className="text-[#0F144A] text-2xl font-bold mb-3">
         <Image src={"/icons/Group 59746.png"} alt={service.title} width={24} height={24} className="inline-block me-2 w-[24px] h-[24px] object-contain" />
         
         {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-base mb-3 leading-relaxed">
          {service?.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-[#0F144A] text-3xl font-bold"> {service?.price || "300" }</span>
           <Image
              src="/icons/reyal.png"
              alt="service icon"
              width={16}
              height={16}
              className="object-contain w-[16px] h-[16px]"
            />
          <span className="text-gray-500 text-lg">/Hour</span>
        </div>

       
      </div>
       {/* Button */}
        <Link href={service.link || "#"} className="w-full block text-center bg-white text-[#0F144A] border-2 border-[#0F144A] rounded-full py-3 px-6 font-semibold text-lg hover:bg-[#0F144A] hover:text-white transition-all duration-300">
             {t("buttons.getNow")}
        </Link>
    </div>
  );
}