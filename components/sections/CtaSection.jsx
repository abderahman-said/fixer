import Image from "next/image";

// CTA Section Component
export function CtaSection({ t }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 CtaSection bg-gray-100 relative overflow-x-clip" data-aos="fade-up">
      <Image
        src="/Group 59731.png"
        alt="divider"
        width={333}
        height={80}
        className="absolute w-[200px] sm:w-[250px] lg:w-[333px] h-[48px] sm:h-[60px] lg:h-[80px] object-contain end-[-5px] sm:end-[-8px] lg:end-[-10px] -bottom-8 sm:-bottom-10 lg:-bottom-12 z-10"
      />

      <div className="container mx-auto px-4 text-center" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 lg:mb-6">
          <span className="text-[#FC942A]">{t("cta.title")}</span>
        </h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a1f3a] mb-3 sm:mb-4">
          {t("cta.subtitle")}
        </h3>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a1f3a] mb-6 sm:mb-7 lg:mb-8 px-2 sm:px-4">
          {t("cta.description")}
        </p>
        <button className="bg-[#1a1f3a] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 rounded-full hover:bg-[#252b4a] transition font-medium text-base sm:text-lg whitespace-nowrap">
          {t("cta.contactUs")}
        </button>
      </div>
    </section>
  );
}
