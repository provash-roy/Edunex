import React from "react";
import { Button } from "../ui/button";
import { GraduationCap, Globe2, Mail, Share2 } from "lucide-react";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className="bg-white border-neutral-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
      <div className="grid max-w-[1140px] grid-cols-2 mx-auto px-8 py-12 gap-8">
        <div className="col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-neutral-900 text-neutral-50 flex justify-center items-center">
              <GraduationCap className="size-5" />
            </div>
            <span className="font-bold text-neutral-950 text-lg leading-7 tracking-tight">
              Learnova
            </span>
          </div>
          <p className="text-neutral-500 text-sm leading-5">
            Empowering millions to learn the skills they need to succeed.
          </p>
          <div className="flex items-center gap-3">
            <Button
              className="size-9 bg-white text-neutral-950 border-neutral-200 border-0 border-solid"
              size="icon"
              variant="outline"
            >
              <Globe2 className="size-4" />
            </Button>
            <Button
              className="size-9 bg-white text-neutral-950 border-neutral-200 border-0 border-solid"
              size="icon"
              variant="outline"
            >
              <Mail className="size-4" />
            </Button>
            <Button
              className="size-9 bg-white text-neutral-950 border-neutral-200 border-0 border-solid"
              size="icon"
              variant="outline"
            >
              <Share2 className="size-4" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-neutral-950 text-sm leading-5">
            Courses
          </span>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            Development
          </a>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            Design
          </a>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            Marketing
          </a>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            Business
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-neutral-950 text-sm leading-5">
            Company
          </span>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            About
          </a>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            Careers
          </a>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            Blog
          </a>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            Press
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-neutral-950 text-sm leading-5">
            Support
          </span>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            Help Center
          </a>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            Contact
          </a>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            FAQ
          </a>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            Community
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-neutral-950 text-sm leading-5">
            Legal
          </span>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            Privacy
          </a>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            Terms
          </a>
          <a className="text-neutral-500 text-sm leading-5" href="#">
            Cookies
          </a>
        </div>
      </div>
      <Separator className="bg-neutral-200" />
      <div className="max-w-[1140px] flex mx-auto px-8 py-6 justify-between items-center">
        <span className="text-neutral-500 text-sm leading-5">
          © 2025 Learnova, Inc. All rights reserved.
        </span>
        <span className="text-neutral-500 text-sm leading-5">
          Made with care for lifelong learners
        </span>
      </div>
    </footer>
  );
}
