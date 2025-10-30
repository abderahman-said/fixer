import Image from "next/image";

export function AuthorInfo({ author, position }) {
  return (
    <div className="relative z-[1] w-fit mx-auto text-center mb-4">
      <Image
        src="/divider-orange.png"
        alt="divider"
        width={60}
        height={20}
        className="absolute w-[50px] sm:w-[60px] h-[16px] sm:h-[20px] object-contain start-[-5px] -top-1 z-[-1]"
      />
      <h4 className="text-[#1a1f3a] font-bold text-base sm:text-lg">
        {author}
      </h4>
      <p className="text-[#1a1f3a] text-sm sm:text-base">{position}</p>
    </div>
  );
}
