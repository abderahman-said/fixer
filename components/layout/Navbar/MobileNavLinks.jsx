import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { classNames } from "@/utils/classNames";

export function MobileNavLinks({
  navLinks,
  activeSection,
  showDropdown,
  setShowDropdown,
  setIsMenuOpen,
  t,
}) {
  return (
    <div className="flex flex-col p-4 space-y-3">
      {navLinks.map(({ id, label, href }) =>
        id === "services" ? (
          <div key={id}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={classNames(
                "w-full flex justify-between items-center text-white font-medium py-2 px-2 rounded-md transition",
                activeSection === id && "text-[#FC942A]"
              )}
            >
              {label}
              <FaChevronDown
                className={classNames(
                  "text-xs transition-transform",
                  showDropdown && "rotate-180"
                )}
              />
            </button>
            {showDropdown && (
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link
                  href="#service1"
                  className="text-gray-300 hover:text-[#FC942A] transition"
                >
                  {t("services.service1")}
                </Link>
                <Link
                  href="#service2"
                  className="text-gray-300 hover:text-[#FC942A] transition"
                >
                  {t("services.service2")}
                </Link>
                <Link
                  href="#service3"
                  className="text-gray-300 hover:text-[#FC942A] transition"
                >
                  {t("services.service3")}
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Link
            key={id}
            href={href}
            onClick={() => setIsMenuOpen(false)}
            className={classNames(
              "text-white py-2 px-2 rounded-md transition hover:text-[#FC942A]",
              activeSection === id && "text-[#FC942A]"
            )}
          >
            {label}
          </Link>
        )
      )}
    </div>
  );
}
