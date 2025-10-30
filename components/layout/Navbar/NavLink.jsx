"use client";

import Link from "next/link";
import { classNames } from "@/utils/classNames";
import { useIsRTL } from "@/utils/useIsRTL";

export function NavLink({ href, label, isActive, onClick }) {
  const isRTL = useIsRTL();
  return (
    <Link
      href={href}
      onClick={onClick}
      className={classNames(
        "relative text-white font-medium transition hover:text-[#FC942A]",
        isRTL ? "pl-4" : "pr-4",
        isActive && "text-[#FC942A]"
      )}
    >
      {label}
      {isActive && (
        <span
          className={classNames(
            "absolute -bottom-2 w-full h-[6px] bg-[#FC942A]",
            isRTL ? "right-0" : "left-0"
          )}
        />
      )}
    </Link>
  );
}
