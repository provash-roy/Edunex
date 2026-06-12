"use client";

import "@uploadthing/react/styles.css";

import HomeNavbar from "@/components/homepage/home-navbar";
import HeroSection from "@/components/homepage/hero-section";
import CourseSection from "@/components/homepage/course-section";
import FeatureSection from "@/components/homepage/feature-section";
import ReviewSection from "@/components/homepage/review-section";
import CtaSection from "@/components/homepage/cta-section";
import Footer from "@/components/homepage/footer-section";

export default function HomePage() {
  return (
    <div className="w-full h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
      <HomeNavbar />
      <main className="max-w-[1140px] mx-auto px-8">
        <HeroSection />
        <CourseSection />
        <FeatureSection />

        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
