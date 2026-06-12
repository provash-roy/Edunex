import React from "react";
import { Infinity, MonitorPlay, Users } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="grid grid-cols-1 rounded-2xl bg-white border-neutral-200 border-1 border-solid p-12 gap-8">
      <div className="flex flex-col items-start gap-3">
        <div className="size-11 rounded-xl bg-neutral-100 text-neutral-900 flex justify-center items-center">
          <MonitorPlay className="size-5" />
        </div>
        <h3 className="font-semibold text-neutral-950 text-lg leading-7">
          Learn by doing
        </h3>
        <p className="text-neutral-500 text-sm leading-5">
          Interactive lessons and real-world projects help you build skills you
          can actually use on the job.
        </p>
      </div>
      <div className="flex flex-col items-start gap-3">
        <div className="size-11 rounded-xl bg-neutral-100 text-neutral-900 flex justify-center items-center">
          <Users className="size-5" />
        </div>
        <h3 className="font-semibold text-neutral-950 text-lg leading-7">
          Expert instructors
        </h3>
        <p className="text-neutral-500 text-sm leading-5">
          Learn from industry leaders and practitioners who teach the skills
          they use every single day.
        </p>
      </div>
      <div className="flex flex-col items-start gap-3">
        <div className="size-11 rounded-xl bg-neutral-100 text-neutral-900 flex justify-center items-center">
          <Infinity className="size-5" />
        </div>
        <h3 className="font-semibold text-neutral-950 text-lg leading-7">
          Lifetime access
        </h3>
        <p className="text-neutral-500 text-sm leading-5">
          Get unlimited access to your courses, including all future updates,
          anytime and anywhere.
        </p>
      </div>
    </section>
  );
}
