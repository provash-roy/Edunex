import React from "react";
import { Infinity, MonitorPlay, Users } from "lucide-react";

const features = [
  {
    icon: MonitorPlay,
    title: "Learn by doing",
    desc: "Interactive lessons and real-world projects help you build skills you can actually use on the job.",
  },
  {
    icon: Users,
    title: "Expert instructors",
    desc: "Learn from industry leaders and practitioners who teach the skills they use every single day.",
  },
  {
    icon: Infinity,
    title: "Lifetime access",
    desc: "Get unlimited access to your courses, including all future updates, anytime and anywhere.",
  },
];

export default function FeatureSection() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <section className=" grid grid-cols-1 md:grid-cols-3 gap-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8 md:p-12 transition-colors">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex flex-col gap-4 p-5 rounded-xl bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-900 transition"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex items-center justify-center shadow-sm">
                <Icon className="w-5 h-5" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
