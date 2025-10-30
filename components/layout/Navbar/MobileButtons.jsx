import { FaRegUser } from "react-icons/fa";
import { classNames } from "@/utils/classNames";

export function MobileButtons({ t }) {
  return (
    <div className="p-4 border-t border-gray-700 mt-4 flex flex-col gap-3">
      <button
        className={classNames(
          "w-full flex items-center justify-center border-2 border-[#FC942A] text-[#FC942A] py-2 rounded-full transition",
          "hover:bg-[#FC942A] hover:text-white"
        )}
      >
        <FaRegUser className="me-2" /> {t("navbar.account")}
      </button>
      <button
        className={classNames(
          "bg-[#FC942A] text-white py-2 rounded-full transition font-medium hover:bg-[#ef8213cf]"
        )}
      >
        {t("navbar.bookVisit")}
      </button>
    </div>
  );
}
