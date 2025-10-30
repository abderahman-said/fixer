"use client";
import React from "react";

import { useTranslation } from "react-i18next";

import { TopBar } from "@/components/layout/TopBar";
import { HeroSection } from "@/components/sections/Hero";
import { WhoWeAreSection } from "@/components/sections/About";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyFixerSection } from "@/components/sections/WhyFixerSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/layout/Footer";
import { ServicesSection } from "@/components/sections/services/ServicesSection";
import { MostServicesSection } from "@/components/sections/MostServices/MostServicesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { Navbar } from "@/components/layout/Navbar";
import { TestimonialsSection } from "@/components/sections/Testimonials";

// Main Landing Page Component
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
