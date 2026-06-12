import React from "react";
import { Card } from "../ui/card";
import {
  Briefcase,
  Camera,
  Code,
  Database,
  PenTool,
  TrendingUp,
} from "lucide-react";

export default function ExploreSection() {
  return (
    <section className="flex py-12 flex-col gap-6">
      <div className="text-center flex flex-col items-center gap-2">
        <h2 className="font-bold text-neutral-950 text-3xl leading-9 tracking-tight">
          Explore top categories
        </h2>
        <p className="max-w-lg text-neutral-500 text-sm leading-5">
          Find the right path for your goals across our most popular learning
          categories
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-white border-neutral-200 border-1 border-solid flex p-6 flex-col items-center gap-2">
          <div className="size-12 rounded-xl bg-neutral-100 text-neutral-900 flex justify-center items-center">
            <Code className="size-6" />
          </div>
          <span className="font-semibold text-neutral-950 text-sm leading-5">
            Development
          </span>
          <span className="text-neutral-500 text-xs leading-4">
            2,400 courses
          </span>
        </Card>
        <Card className="bg-white border-neutral-200 border-1 border-solid flex p-6 flex-col items-center gap-2">
          <div className="size-12 rounded-xl bg-neutral-100 text-neutral-900 flex justify-center items-center">
            <PenTool className="size-6" />
          </div>
          <span className="font-semibold text-neutral-950 text-sm leading-5">
            Design
          </span>
          <span className="text-neutral-500 text-xs leading-4">
            1,180 courses
          </span>
        </Card>
        <Card className="bg-white border-neutral-200 border-1 border-solid flex p-6 flex-col items-center gap-2">
          <div className="size-12 rounded-xl bg-neutral-100 text-neutral-900 flex justify-center items-center">
            <TrendingUp className="size-6" />
          </div>
          <span className="font-semibold text-neutral-950 text-sm leading-5">
            Marketing
          </span>
          <span className="text-neutral-500 text-xs leading-4">
            960 courses
          </span>
        </Card>
        <Card className="bg-white border-neutral-200 border-1 border-solid flex p-6 flex-col items-center gap-2">
          <div className="size-12 rounded-xl bg-neutral-100 text-neutral-900 flex justify-center items-center">
            <Database className="size-6" />
          </div>
          <span className="font-semibold text-neutral-950 text-sm leading-5">
            Data Science
          </span>
          <span className="text-neutral-500 text-xs leading-4">
            740 courses
          </span>
        </Card>
        <Card className="bg-white border-neutral-200 border-1 border-solid flex p-6 flex-col items-center gap-2">
          <div className="size-12 rounded-xl bg-neutral-100 text-neutral-900 flex justify-center items-center">
            <Briefcase className="size-6" />
          </div>
          <span className="font-semibold text-neutral-950 text-sm leading-5">
            Business
          </span>
          <span className="text-neutral-500 text-xs leading-4">
            1,520 courses
          </span>
        </Card>
        <Card className="bg-white border-neutral-200 border-1 border-solid flex p-6 flex-col items-center gap-2">
          <div className="size-12 rounded-xl bg-neutral-100 text-neutral-900 flex justify-center items-center">
            <Camera className="size-6" />
          </div>
          <span className="font-semibold text-neutral-950 text-sm leading-5">
            Photography
          </span>
          <span className="text-neutral-500 text-xs leading-4">
            430 courses
          </span>
        </Card>
      </div>
    </section>
  );
}
