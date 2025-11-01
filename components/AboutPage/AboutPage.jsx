"use client";
import React from "react";
import Breadcrumb from "../shared/Breadcrumb";
import { useTranslation } from "react-i18next";
import { AboutSection } from "./AboutSection";
import { VisionMisionSection } from "./VisionMision";
import OurValuesSection from "./ValuseSection";
import ValueChainSection from "./ValueChainSection";
import { PartnersSection } from "../sections/PartnersSection";
import { TestimonialsSection } from "../sections/Testimonials";
import { ClientsSection } from "../sections/ClientsSection";
import { CtaSection } from "../sections/CtaSection";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb title="About Us" t={t} />
      <AboutSection t={t} />
      <VisionMisionSection />
      <OurValuesSection />
      <ValueChainSection />
      <div data-aos="fade-up">
        <PartnersSection t={t} />
      </div>
      <div data-aos="fade-up">
        <TestimonialsSection t={t} />
      </div>
      <div data-aos="fade-up">
        <ClientsSection t={t} />
      </div>
      <CtaSection t={t} />
    </div>
  );
}
