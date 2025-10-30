import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function NavigationArrows({ onPrevious, onNext }) {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden sm:block">
        <div className="absolute -start-6 lg:-start-8 top-1/2 transform -translate-y-1/2 z-10">
          <button
            onClick={onPrevious}
            className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#fff] border-[2px] border-[#1a1f3a] text-[#1a1f3a] flex items-center justify-center hover:border-[#FC942A] hover:text-[#FC942A] transition"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute -end-6 lg:-end-8 top-1/2 transform -translate-y-1/2 z-10">
          <button
            onClick={onNext}
            className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#fff] border-[2px] text-[#1a1f3a] border-[#1a1f3a] flex items-center justify-center hover:bg-[#FC942A] hover:text-white transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex sm:hidden justify-center gap-4 mt-6 relative z-10">
        <button
          onClick={onPrevious}
          className="w-10 h-10 rounded-full bg-[#fff] border-[2px] border-[#1a1f3a] text-[#1a1f3a] flex items-center justify-center hover:border-[#FC942A] hover:text-[#FC942A] transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={onNext}
          className="w-10 h-10 rounded-full bg-[#fff] border-[2px] text-[#1a1f3a] border-[#1a1f3a] flex items-center justify-center hover:bg-[#FC942A] hover:text-white transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}
