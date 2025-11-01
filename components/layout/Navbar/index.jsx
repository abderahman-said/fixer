"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { DesktopNav } from "./DesktopNav";
import { MobileSidebar } from "./MobileSidebar";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentLang = (() => {
    const seg = pathname?.split("/").filter(Boolean)[0];
    return seg === "ar" ? "ar" : "en";
  })();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: t("navbar.home"), href: "#home" },
    { id: "about", label: t("navbar.about"), href: "#about" },
    { id: "services", label: t("navbar.services"), href: "#services" },
    { id: "business", label: t("navbar.business"), href: "#business" },
    { id: "contact", label: t("navbar.contact"), href: "#contact" },
  ];

  return (
    <nav className="bg-[#090919] relative z-50 border-t border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href={`/${currentLang}`}
            className="text-white text-3xl font-bold"
          >
            <Image
              src="/logo.svg"
              alt="Fixer Logo"
              width={166}
              height={44}
              className="object-cover"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNav navLinks={navLinks} activeSection={activeSection} t={t} />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-white text-2xl lg:hidden"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
        activeSection={activeSection}
        t={t}
      />

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}
    </nav>
  );
}
