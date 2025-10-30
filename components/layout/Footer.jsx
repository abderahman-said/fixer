import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export function Footer({ t }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a1f3a] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 pt-12 sm:pt-14 lg:pt-16 relative z-10">
        {/* Footer Top */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={166}
            height={166}
            className="object-contain w-[120px] h-[50px] sm:w-[140px] sm:h-[60px] lg:w-[166px] lg:h-[70px]"
          />
          <p className="text-[#707070] text-base sm:text-lg lg:text-xl text-center px-4 max-w-2xl">
            {t("footer.description")}
          </p>

          {/* Footer Navigation */}
          <div className="flex flex-wrap w-full text-base sm:text-lg lg:text-2xl gap-3 sm:gap-4 lg:gap-2 items-center justify-center lg:justify-between max-w-5xl">
            <a href="#" className="text-white hover:text-[#FC942A] transition">
              {t("navbar.home")}
              <div className="h-1 sm:h-1.5 rounded-xs bg-[#FC942A] w-8 sm:w-10 mt-1 mx-auto lg:mx-0"></div>
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FC942A] transition whitespace-nowrap"
            >
              {t("navbar.about")}
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FC942A] transition whitespace-nowrap"
            >
              {t("navbar.services")}
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FC942A] transition whitespace-nowrap"
            >
              {t("navbar.business")}
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FC942A] transition whitespace-nowrap"
            >
              {t("navbar.contact")}
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex relative w-full max-w-[90%] sm:max-w-[400px] lg:max-w-[457px] gap-3">
            <input
              type="email"
              placeholder={t("footer.newsletterPlaceholder")}
              className="w-full bg-[#2a2f4abc] pe-16 sm:pe-20 text-white placeholder-[#f5f5f5bb] px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full outline-none"
            />
            <button className="bg-[#FC942A] border-2 sm:border-4 border-[#0F0F20] absolute -top-0.5 sm:-top-1 -end-0.5 sm:-end-1 text-[#0F0F20] px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full hover:bg-[#ef8213cf] transition font-medium whitespace-nowrap">
              {t("footer.send")}
            </button>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px] absolute start-4 sm:start-8 lg:-start-20 bottom-16 sm:bottom-18 lg:bottom-20 rounded-full border-2 border-[#FC942A] flex items-center justify-center text-[#FC942A] hover:bg-[#FC942A] hover:text-white transition"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        {/* Footer Bottom */}
        <div className="border-t border-[#707070] py-4 sm:py-5 mt-6 sm:mt-8 lg:mt-9">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center">
            <div className="flex gap-4 sm:gap-6 order-1 sm:order-1">
              <a
                href="#"
                className="text-[#FC942A] hover:text-orange-400 transition"
              >
                <FaFacebookF className="text-lg sm:text-xl" />
              </a>
              <a
                href="#"
                className="text-[#FC942A] hover:text-orange-400 transition"
              >
                <FaInstagram className="text-lg sm:text-xl" />
              </a>
              <a
                href="#"
                className="text-[#FC942A] hover:text-orange-400 transition"
              >
                <FaTwitter className="text-lg sm:text-xl" />
              </a>
              <a
                href="#"
                className="text-[#FC942A] hover:text-orange-400 transition"
              >
                <FaLinkedinIn className="text-lg sm:text-xl" />
              </a>
            </div>
            <p className="text-gray-500 text-sm sm:text-base text-center order-2 sm:order-2">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
