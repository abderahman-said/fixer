import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";

export function AboutSection({ t }) {
  return (
    <section
      className="py-16 md:py-20 pt-20 md:pt-36 relative overflow-hidden bg-white"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 items-center">
          {/* Text Content */}
          <div
            className="order-2 md:order-1 text-start "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <SectionHeader
              title={t("whoWeAre.title")}
              subtitle={t("whoWeAre.subtitle")}
              subtitleClassName="blue-text"
              borderWhite={true}
            />

            <Image
              src="/decorative-f.png"
              alt="decorative shape"
              width={519}
              height={519}
              className="hidden md:block absolute top-0 -start-40 w-[400px] h-[400px] object-contain opacity-70 pointer-events-none select-none"
              priority
            />
            <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed max-w-lg  ">
              {t("whoWeAre.description")}
            </p>

            <Link
              href="#"
              className="text-[#FC942A] font-semibold flex items-center justify-center md:justify-start gap-2 hover:gap-3 transition-all"
            >
              {t("whoWeAre.readMore")}{" "}
              <FaArrowRight className="text-[#585FAB] rtl:scale-x-[-1]" />
            </Link>
          </div>

          {/* Image Content */}
          <div
            className="order-1 md:order-2 relative flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            {/* Decorative background images */}
            <Image
              src="/about-decor.png"
              alt="decorative shape"
              width={800}
              height={190}
              className="hidden md:block absolute bottom-32 -right-32 w-[600px] h-[140px] object-contain opacity-80"
              priority
            />
            <Image
              src="/about-bg.png"
              alt="about background"
              width={572}
              height={500}
              className="hidden md:block absolute bottom-10 left-14 w-[90%]   h-auto object-cover  z-10"
              priority
            />

            {/* Main team image */}
            <Image
              src="/3-workers.png"
              alt="Our Team"
              className="object-contain w-[80%] sm:w-[70%] md:w-[450px] lg:w-[500px] rounded-2xl z-10"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="flex justify-center mt-10 md:mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button className="bg-[#1C2039] text-white px-10 sm:px-12 py-3 sm:py-4 rounded-full hover:bg-[#252b4a] transition font-medium text-base sm:text-lg">
            {t("whoWeAre.readMore")}
          </button>
        </div>
      </div>
    </section>
  );
}
