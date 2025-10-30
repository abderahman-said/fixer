export function TestimonialContent({ quote }) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <p className="text-[#1C2039] font-bold text-base sm:text-lg md:text-xl lg:text-[24px] text-center mb-6 sm:mb-8 leading-relaxed px-2 sm:px-4">
        {quote}
      </p>
    </div>
  );
}
