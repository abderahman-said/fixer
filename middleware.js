// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
    const { pathname } = req.nextUrl;

    // Skip static files and API routes
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return;
    }

    // Check if path starts with /en or /ar
    const hasLang = pathname.startsWith("/en") || pathname.startsWith("/ar");

    if (!hasLang) {
        // Default redirect to English
        return NextResponse.redirect(new URL(`/en${pathname}`, req.url));
    }

    return NextResponse.next();
}