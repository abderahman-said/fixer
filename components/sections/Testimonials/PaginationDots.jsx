export function PaginationDots({ total, currentIndex, onDotClick }) {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition ${
            index === currentIndex ? "bg-[#FC942A] w-6 sm:w-8" : "bg-gray-300"
          }`}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  );
}
