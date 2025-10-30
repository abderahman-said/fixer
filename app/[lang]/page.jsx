"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CtaSection } from "@/components/sections/CtaSection";
 
const HeroSection = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
const WhoWeAreSection = dynamic(() => import("@/components/sections/About"), { ssr: false });
const ServicesSection = dynamic(() => import("@/components/sections/services/ServicesSection"), { ssr: false });
const StatsSection = dynamic(() => import("@/components/sections/StatsSection"), { ssr: false });
const WhyFixerSection = dynamic(() => import("@/components/sections/WhyFixerSection"), { ssr: false });
const MostServicesSection = dynamic(() => import("@/components/sections/MostServices/MostServicesSection"), { ssr: false });
const PartnersSection = dynamic(() => import("@/components/sections/PartnersSection"), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
const ClientsSection = dynamic(() => import("@/components/sections/ClientsSection"), { ssr: false });

export default function FixerLandingPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <TopBar t={t} />
      <Navbar t={t} />

      <HeroSection t={t} />

      <div data-aos="fade-up"><WhoWeAreSection t={t} /></div>
      <div data-aos="fade-up"><ServicesSection t={t} /></div>
      <div data-aos="fade-up"><StatsSection t={t} /></div>
      <div data-aos="fade-up"><WhyFixerSection t={t} /></div>
      <div data-aos="fade-up"><MostServicesSection t={t} /></div>
      <div data-aos="fade-up"><PartnersSection t={t} /></div>
      <div data-aos="fade-up"><TestimonialsSection t={t} /></div>
      <div data-aos="fade-up"><ClientsSection t={t} /></div>

      <CtaSection t={t} />
      <Footer t={t} />
    </div>
  );
}
