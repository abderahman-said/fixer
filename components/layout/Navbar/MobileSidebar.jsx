"use client";
import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { classNames } from "@/utils/classNames";
import { MobileNavLinks } from "./MobileNavLinks";
import { MobileButtons } from "./MobileButtons";
import { useIsRTL } from "@/utils/useIsRTL";

export function MobileSidebar({
  isMenuOpen,
  setIsMenuOpen,
  navLinks,
  activeSection,
  t,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const isRTL = useIsRTL();

  return (
    <div
      className={classNames(
        "fixed top-0 h-full w-72 bg-[#111123] shadow-2xl transform transition-transform duration-300 z-50",
        isRTL ? "left-0 border-r border-gray-700" : "right-0 border-l border-gray-700",
        isMenuOpen ? "translate-x-0" : isRTL ? "-translate-x-full" : "translate-x-full"
      )}
    >
      {/* Close Button */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700">
        <Image src="/logo.svg" alt="Logo" width={120} height={32} />
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-white text-xl hover:text-[#FC942A]"
        >
          <FaTimes />
        </button>
      </div>

      {/* Mobile Links */}
      <MobileNavLinks
        navLinks={navLinks}
        activeSection={activeSection}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        setIsMenuOpen={setIsMenuOpen}
        t={t}
      />

      {/* Mobile Buttons */}
      <MobileButtons t={t} />
    </div>
  );
}
