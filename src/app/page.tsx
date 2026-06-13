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
    <div>
      <HomeNavbar />
      <main className="bg-white dark:bg-neutral-950">
        <HeroSection />
        <CourseSection />
        <FeatureSection />
        <ReviewSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
