"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { classNames } from "@/utils/classNames";
import { useIsRTL } from "@/utils/useIsRTL";

export function ServicesDropdown({
  label,
  activeSection,
  showDropdown,
  setShowDropdown,
  t,
}) {
  const dropdownRef = useRef(null);
  const isRTL = useIsRTL();

  // 🔹 Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowDropdown]);

  const handleButtonClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLinkClick = () => {
    setShowDropdown(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={handleButtonClick}
        className={classNames(
          "relative flex items-center gap-1 text-white font-medium transition hover:text-[#FC942A]",
          isRTL ? "pl-4" : "pr-4",
          activeSection === "services" && "text-[#FC942A]"
        )}
      >
        {label}
        <FaChevronDown
          className={classNames(
            "text-xs transition-transform duration-200",
            showDropdown && "rotate-180"
          )}
        />
        {activeSection === "services" && (
          <span
            className={classNames(
              "absolute -bottom-2 w-full h-[6px] bg-[#FC942A]",
              isRTL ? "right-0" : "left-0"
            )}
          />
        )}
      </button>

      {showDropdown && (
        <div
          className={classNames(
            "absolute mt-3 w-48 bg-[#111123] border border-gray-700 rounded-xl shadow-lg overflow-hidden z-50 animate-fadeIn",
            isRTL ? "right-0" : "left-0"
          )}
        >
          <Link
            href="#service1"
            onClick={handleLinkClick}
            className="block px-4 py-3 text-white hover:bg-[#FC942A] transition"
          >
            {t("services.service1")}
          </Link>
          <Link
            href="#service2"
            onClick={handleLinkClick}
            className="block px-4 py-3 text-white hover:bg-[#FC942A] transition"
          >
            {t("services.service2")}
          </Link>
          <Link
            href="#service3"
            onClick={handleLinkClick}
            className="block px-4 py-3 text-white hover:bg-[#FC942A] transition"
          >
            {t("services.service3")}
          </Link>
        </div>
      )}
    </div>
  );
}
