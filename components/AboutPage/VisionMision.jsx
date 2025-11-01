"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function VisionMisionSection() {
  const { t } = useTranslation();

  const cards = [
    {
      id: 1,
      title: t("vision.title") || "رؤيتنا",
      text:
        t("vision.text") ||
        "أن نكون الجهة الرائدة في تقديم الخدمات المتميزة في مجالنا، مع الابتكار المستمر والجودة العالية.",
      icon: "/icons/vision.svg",
    },
    {
      id: 2,
      title: t("mission.title") || "رسالتنا",
      text:
        t("mission.text") ||
        "تقديم حلول مبتكرة تحقق رضا عملائنا وتسهم في التنمية المستدامة لمجتمعنا.",
      icon: "/icons/mission.svg",
    },
    {
      id: 3,
      title: t("message.title") || "قيمنا",
      text:
        t("message.text") ||
        "النزاهة، التعاون، التميز، والعمل بروح الفريق من أجل تحقيق أهدافنا المشتركة.",
      icon: "/icons/message.svg",
    },
  ];

  return (
    <section
      className="pt-32 pb-32 relative bg-white overflow-hidden"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 relative z-10">
        <Image
          src="/decorative-f.png"
          alt="decorative about image"
          width={800}
          height={800}
          className="absolute -top-30 -start-40 z-10 md:w-[500px] md:h-[500px] object-contain"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-20">
          {cards.map((card) => (
            <div
              key={card.id}
              className="about-card w-[464px] z-20 h-[532px] relative"
              data-aos="fade-up"
              data-aos-delay={card.id * 100}
            >
              {card.icon && (
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="mb-5 object-contain"
                />
              )}
              <h3 className="text-2xl text-[#FC942A] font-bold mb-3">
                {card.title}
              </h3>
              <p className="text-base leading-relaxed text-black opacity-90 max-w-[260px]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background image */}
      <Image
        src="/services-decoration.png"
        alt="decorative background"
        loading="lazy"
        width={3000}
        height={300}
        className="absolute object-contain opacity-80 bottom-0 start-0 w-full h-[200px] md:h-[200px] pointer-events-none select-none z-0"
      />
    </section>
  );
}
