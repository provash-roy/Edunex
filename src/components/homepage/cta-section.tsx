import React from "react";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "../ui/button";

export default function CtaSection() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <section className=" relative my-12 flex flex-col items-center gap-6 text-center  rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-950 dark:text-neutral-100 p-10 md:p-14 overflow-hidden transition-colors">
        {/* subtle background glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-neutral-100/40 to-transparent dark:from-neutral-900/30" />

        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 shadow-sm">
          <Rocket className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />
        </div>

        {/* Heading */}
        <h2 className="max-w-xl font-bold text-3xl md:text-4xl leading-tight tracking-tight">
          Start learning today and level up your skills
        </h2>

        {/* Description */}
        <p className="max-w-lg text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-6">
          Join over 50 million learners. Get unlimited access to thousands of
          courses with a 7-day free trial.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Button className="h-11">
            Get started free
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            className="h-11 px-6 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
          >
            View pricing
          </Button>
        </div>
      </section>
    </div>
  );
}
