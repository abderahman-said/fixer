"use client";

import { useEffect, useState } from "react";
import i18n from "@/app/i18n";

export function useIsRTL() {
    const [isRTL, setIsRTL] = useState(
        typeof document !== "undefined" ? document.dir === "rtl" : false
    );

    useEffect(() => {
        const update = () => {
            setIsRTL(typeof document !== "undefined" && document.dir === "rtl");
        };

        update();
        i18n.on("languageChanged", update);
        return () => i18n.off("languageChanged", update);
    }, []);

    return isRTL;
}