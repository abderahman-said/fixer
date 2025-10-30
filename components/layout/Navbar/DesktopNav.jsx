"use client";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { classNames } from "@/utils/classNames";
import { NavLink } from "./NavLink";
import { ServicesDropdown } from "./ServicesDropdown";

export function DesktopNav({ navLinks, activeSection, t }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-6">
        {navLinks.map(({ id, label, href }) =>
          id === "services" ? (
            <ServicesDropdown
              key={id}
              label={label}
              activeSection={activeSection}
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
              t={t}
            />
          ) : (
            <NavLink
              key={id}
              href={href}
              label={label}
              isActive={activeSection === id}
            />
          )
        )}
      </div>

      {/* Right Buttons */}
      <div className="hidden lg:flex items-center gap-3">
        <button
          className={classNames(
            "w-10 h-10 rounded-full border-2 border-[#FC942A] flex items-center justify-center text-[#FC942A] transition",
            "hover:bg-[#FC942A] hover:text-white"
          )}
        >
          <FaRegUser />
        </button>
        <button
          className={classNames(
            "bg-[#FC942A] text-white px-6 py-2.5 rounded-full transition font-medium",
            "hover:bg-[#ef8213cf]"
          )}
        >
          {t("navbar.bookVisit")}
        </button>
      </div>
    </>
  );
}
