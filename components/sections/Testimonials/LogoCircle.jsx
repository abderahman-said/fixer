import Image from "next/image";

export function LogoCircle({ logo, icon }) {
  return (
    <div className="absolute z-50 border-2 sm:border-3 lg:border-4 border-[#1A1E37] -top-10 sm:-top-12 start-1/2 transform -translate-x-1/2 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
      <Image
        src={logo}
        alt="logo"
        width={120}
        height={120}
        className="w-[100px] sm:w-[130px] lg:w-[157px] h-[25px] sm:h-[32px] lg:h-[39px] object-contain"
      />
      <Image
        src={icon}
        alt="icons"
        width={44}
        height={44}
        className="absolute rounded-3xl -bottom-4 sm:-bottom-5 lg:-bottom-6 w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] lg:w-[44px] lg:h-[44px] object-contain"
      />
    </div>
  );
}
