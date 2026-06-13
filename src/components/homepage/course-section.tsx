import React from "react";
import { ArrowRight, Star, StarHalf } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function CourseSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 flex flex-col gap-6 py-12 dark:bg-neutral-950">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold leading-9 tracking-tight text-neutral-950  dark:text-neutral-50">
            Popular courses
          </h2>

          <p className="text-sm leading-5 text-neutral-500 dark:text-neutral-400">
            Hand-picked courses loved by our community
          </p>
        </div>

        <Button
          variant="ghost"
          className="gap-1 text-sm font-medium text-neutral-950 dark:text-neutral-50"
        >
          View all
          <ArrowRight className="size-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Card 1 */}
        <Card className="overflow-hidden p-0 gap-0 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-300">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
              alt="Web development"
              className="h-36 w-full object-cover"
            />

            <Badge className="absolute left-3 top-3 rounded-full bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
              Bestseller
            </Badge>
          </div>

          <div className="flex flex-col gap-3 p-4">
            <span className="text-xs font-medium leading-4 text-neutral-500 dark:text-neutral-400">
              Development
            </span>

            <h3 className="text-base font-semibold leading-6 text-neutral-950 dark:text-neutral-50">
              The Complete Web Developer Bootcamp
            </h3>

            <div className="flex items-center gap-2 text-sm leading-5">
              <span className="font-semibold text-[#ffb900]">4.9</span>

              <div className="flex items-center gap-0.5 text-[#ffb900]">
                <Star className="size-3 fill-[#ffb900]" />
                <Star className="size-3 fill-[#ffb900]" />
                <Star className="size-3 fill-[#ffb900]" />
                <Star className="size-3 fill-[#ffb900]" />
                <Star className="size-3 fill-[#ffb900]" />
              </div>

              <span className="text-xs leading-4 text-neutral-500 dark:text-neutral-400">
                (8,420)
              </span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-lg font-bold leading-7 text-neutral-950 dark:text-neutral-50">
                $59.99
              </span>

              <span className="text-xs leading-4 line-through text-neutral-500 dark:text-neutral-400">
                $129.99
              </span>
            </div>
          </div>
        </Card>

        {/* Card 2 */}
        <Card className="overflow-hidden p-0 gap-0 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-300">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
              alt="Data science"
              className="h-36 w-full object-cover"
            />

            <Badge className="absolute left-3 top-3 rounded-full bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
              New
            </Badge>
          </div>

          <div className="flex flex-col gap-3 p-4">
            <span className="text-xs font-medium leading-4 text-neutral-500 dark:text-neutral-400">
              Data Science
            </span>

            <h3 className="text-base font-semibold leading-6 text-neutral-950 dark:text-neutral-50">
              Data Science & Machine Learning A-Z
            </h3>

            <div className="flex items-center gap-2 text-sm leading-5">
              <span className="font-semibold text-[#ffb900]">4.7</span>

              <div className="flex items-center gap-0.5 text-[#ffb900]">
                <Star className="size-3 fill-[#ffb900]" />
                <Star className="size-3 fill-[#ffb900]" />
                <Star className="size-3 fill-[#ffb900]" />
                <StarHalf className="size-3 fill-[#ffb900]" />
              </div>

              <span className="text-xs leading-4 text-neutral-500 dark:text-neutral-400">
                (5,210)
              </span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-lg font-bold leading-7 text-neutral-950 dark:text-neutral-50">
                $74.99
              </span>

              <span className="text-xs leading-4 line-through text-neutral-500 dark:text-neutral-400">
                $149.99
              </span>
            </div>
          </div>
        </Card>

        {/* Card 3 */}
        <Card className="overflow-hidden p-0 gap-0 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            alt="Graphic design"
            className="h-36 w-full object-cover"
          />

          <div className="flex flex-col gap-3 p-4">
            <span className="text-xs font-medium leading-4 text-neutral-500 dark:text-neutral-400">
              Design
            </span>

            <h3 className="text-base font-semibold leading-6 text-neutral-950 dark:text-neutral-50">
              UI/UX Design Masterclass with Figma
            </h3>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#ffb900]">4.8</span>

              <div className="flex items-center gap-0.5 text-[#ffb900]">
                <Star className="size-3 fill-[#ffb900]" />
                <Star className="size-3 fill-[#ffb900]" />
                <Star className="size-3 fill-[#ffb900]" />
                <Star className="size-3 fill-[#ffb900]" />
                <Star className="size-3 fill-[#ffb900]" />
              </div>

              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                (3,880)
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-neutral-950 dark:text-neutral-50">
                $49.99
              </span>

              <span className="text-xs line-through text-neutral-500 dark:text-neutral-400">
                $99.99
              </span>
            </div>
          </div>
        </Card>

        {/* Card 4 */}
        <Card className="overflow-hidden p-0 gap-0 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-300">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
              alt="Marketing"
              className="h-36 w-full object-cover"
            />

            <Badge className="absolute left-3 top-3 rounded-full bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
              Bestseller
            </Badge>
          </div>

          <div className="flex flex-col gap-3 p-4">
            <span className="text-xs font-medium leading-4 text-neutral-500 dark:text-neutral-400">
              Marketing
            </span>

            <h3 className="text-base font-semibold leading-6 text-neutral-950 dark:text-neutral-50">
              Digital Marketing Strategy Complete Guide
            </h3>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#ffb900]">4.6</span>

              <div className="flex items-center gap-0.5 text-[#ffb900]">
                <Star className="size-3 fill-[#ffb900]" />
                <Star className="size-3 fill-[#ffb900]" />
                <Star className="size-3 fill-[#ffb900]" />
                <Star className="size-3 fill-[#ffb900]" />
                <StarHalf className="size-3 fill-[#ffb900]" />
              </div>

              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                (6,140)
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-neutral-950 dark:text-neutral-50">
                $54.99
              </span>

              <span className="text-xs line-through text-neutral-500 dark:text-neutral-400">
                $119.99
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
