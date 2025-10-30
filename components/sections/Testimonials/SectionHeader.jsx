import Image from "next/image";

export function SectionHeader({ title }) {
  return (
    <div className="relative mb-12 sm:mb-16 lg:mb-20">
      <Image
        src="/divider-orange.png"
        alt="divider"
        width={120}
        height={80}
        className="absolute w-[100px] sm:w-[120px] lg:w-[157px] h-[25px] sm:h-[30px] lg:h-[39px] object-contain start-[-10px] sm:start-[-15px] lg:start-[-20px] top-0 z-0"
      />
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white relative z-10 font-bold leading-tight">
        {title}
      </h2>
    </div>
  );
}
