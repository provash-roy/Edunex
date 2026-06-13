import React from "react";
import { Button } from "../ui/button";
import { GraduationCap, Globe2, Mail, Share2 } from "lucide-react";
import { Separator } from "../ui/separator";

const links = {
  Courses: ["Development", "Design", "Marketing", "Business"],
  Company: ["About", "Careers", "Blog", "Press"],
  Support: ["Help Center", "Contact", "FAQ", "Community"],
  Legal: ["Privacy", "Terms", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      {/* GRID CONTAINER FIX */}
      <div className="max-w-7xl mx-auto px-8 md:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">
        {/* Brand */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-9 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-neutral-950 dark:text-neutral-100">
              Edunex
            </span>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-6 max-w-sm">
            Empowering millions to learn the skills they need to succeed.
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[Globe2, Mail, Share2].map((Icon, i) => (
              <Button
                key={i}
                size="icon"
                variant="outline"
                className="size-9 rounded-lg border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
              >
                <Icon className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </div>

        {/* Links GRID FIX */}
        {Object.entries(links).map(([title, items]) => (
          <div key={title} className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm text-neutral-950 dark:text-neutral-100">
              {title}
            </h4>

            {items.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200 transition"
              >
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>

      <Separator className="bg-neutral-200 dark:bg-neutral-800" />

      {/* Bottom bar FIX */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <span className="text-sm text-neutral-500 dark:text-neutral-400 text-center md:text-left">
          © 2025 Edunex, Inc. All rights reserved.
        </span>

        <span className="text-sm text-neutral-500 dark:text-neutral-400 text-center md:text-right">
          Made with care for lifelong learners
        </span>
      </div>
    </footer>
  );
}
