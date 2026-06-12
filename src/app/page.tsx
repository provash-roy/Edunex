"use client";

import "@uploadthing/react/styles.css";

import HomeNavbar from "@/components/homepage/home-navbar";
import HeroSection from "@/components/homepage/hero-section";

export default function HomePage() {
  return (
    <div className="  w-full  h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
      <HomeNavbar />
      <main className="max-w-[1140px] mx-auto px-8">
        <HeroSection />
      </main>
    </div>
  );
}
