"use client";

import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

export function TopBar({ t }) {
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = (() => {
    const seg = pathname.split("/").filter(Boolean)[0];
    return seg === "ar" ? "ar" : "en";
  })();

  const switchLang = (lng) => {
    if (!pathname) return;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${lng}`);
      return;
    }
    if (segments[0] === "en" || segments[0] === "ar") {
      segments[0] = lng;
    } else {
      segments.unshift(lng);
    }
    const newPath = "/" + segments.join("/");
    router.push(newPath);
  };
  return (
    <div className="bg-[#0A0E26] relative z-10 text-white py-3">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm gap-3 md:gap-0">
        {/* Left side — phone and email */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <div className="flex items-center gap-2">
            <FaPhone className="text-[#FC942A]" />
            <span>{t("topBar.phone")}</span>
          </div>
          <span className="hidden md:block w-px h-5 bg-gray-600" />
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#FC942A]" />
            <span>{t("topBar.email")}</span>
          </div>
        </div>

        {/* Right side — social icons + language */}
        <div className="flex items-center gap-4">
          {/* Social icons (hidden on small screens) */}
          <div className="hidden md:flex gap-3">
            <FaFacebookF className="cursor-pointer hover:text-[#FC942A] transition" />
            <FaInstagram className="cursor-pointer hover:text-[#FC942A] transition" />
            <FaTwitter className="cursor-pointer hover:text-[#FC942A] transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-[#FC942A] transition" />
          </div>

          {/* Language switcher — always visible */}
          <div className="flex gap-2 md:ml-6 text-center md:text-left">
            <button
              onClick={() => switchLang("ar")}
              className={currentLang === "ar" ? "text-[#FC942A]" : "opacity-90 hover:opacity-100"}
            >
              {t("topBar.arabic")}
            </button>
            <span>|</span>
            <button
              onClick={() => switchLang("en")}
              className={currentLang === "en" ? "text-[#FC942A]" : "opacity-90 hover:opacity-100"}
            >
              {t("topBar.english")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
