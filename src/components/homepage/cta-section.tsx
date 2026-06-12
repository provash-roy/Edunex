import React from "react";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "../ui/button";

export default function CtaSection() {
  return (
    <section className="text-center rounded-2xl bg-white text-neutral-950 border-neutral-200 border-1 border-solid flex my-12 p-12 flex-col items-center gap-6">
      <Rocket className="size-10 text-neutral-900" />
      <h2 className="max-w-xl font-bold text-neutral-950 text-3xl leading-9 tracking-tight">
        Start learning today and level up your skills
      </h2>
      <p className="max-w-lg text-neutral-500 text-sm leading-5">
        Join over 50 million learners. Get unlimited access to thousands of
        courses with a 7-day free trial.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Button className="bg-neutral-900 text-neutral-50 px-6 gap-2 h-11">
          Get started free
          <ArrowRight className="size-4" />
        </Button>
        <Button
          className="bg-white text-neutral-950 border-neutral-200 border-0 border-solid px-6 h-11"
          variant="outline"
        >
          View pricing
        </Button>
      </div>
    </section>
  );
}
