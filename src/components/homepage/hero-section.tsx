import { LayoutGrid, Play, Star, Award } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="flex flex-col gap-6">
        <Badge className="w-fit rounded-full bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 font-medium text-xs leading-4 px-3 py-1">
          Over 12,000 courses available
        </Badge>

        <h1 className="max-w-2xl font-bold text-5xl leading-[50px] tracking-tight text-neutral-950 dark:text-neutral-50">
          Learn skills that move your career forward
        </h1>

        <p className="max-w-md text-base leading-6 text-neutral-500 dark:text-neutral-400">
          Master in-demand skills with expert-led courses, hands-on projects,
          and a community of millions of learners. Start learning today, at your
          own pace.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Button className="h-11 px-6 gap-2 bg-neutral-900 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200">
            <Play className="size-4" />
            Start learning free
          </Button>

          <Button
            variant="outline"
            className="h-11 px-6 gap-2 bg-white text-neutral-950 border-neutral-200 hover:bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            <LayoutGrid className="size-4" />
            Browse catalog
          </Button>
        </div>

        <div className="flex items-center gap-6 pt-2">
          <div className="flex flex-col">
            <span className="font-bold text-2xl leading-8 text-neutral-950 dark:text-neutral-50">
              50M+
            </span>
            <span className="text-sm leading-5 text-neutral-500 dark:text-neutral-400">
              Learners
            </span>
          </div>

          <Separator
            orientation="vertical"
            className="h-10 bg-neutral-200 dark:bg-neutral-700"
          />

          <div className="flex flex-col">
            <span className="font-bold text-2xl leading-8 text-neutral-950 dark:text-neutral-50">
              12K+
            </span>
            <span className="text-sm leading-5 text-neutral-500 dark:text-neutral-400">
              Courses
            </span>
          </div>

          <Separator
            orientation="vertical"
            className="h-10 bg-neutral-200 dark:bg-neutral-700"
          />

          <div className="flex flex-col">
            <span className="font-bold text-2xl leading-8 flex items-center gap-1 text-neutral-950 dark:text-neutral-50">
              4.8
              <Star className="size-4 fill-[#ffb900] text-[#ffb900]" />
            </span>
            <span className="text-sm leading-5 text-neutral-500 dark:text-neutral-400">
              Avg rating
            </span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <img
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBvbmxpbmUlMjBsYXB0b3AlMjBzdHVkeXxlbnwxfDB8fHwxNzgxMjYwMDg5fDA&ixlib=rb-4.1.0&q=80&w=400"
          alt="Student learning online"
          className="h-90 w-full object-cover"
        />

        <div className="absolute left-4 bottom-4 flex items-center gap-3 p-3 rounded-xl backdrop-blur bg-white/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-700">
          <div className="size-10 rounded-lg bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 flex items-center justify-center">
            <Award className="size-5" />
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-sm leading-5 text-neutral-950 dark:text-neutral-50">
              Certified courses
            </span>

            <span className="text-xs leading-4 text-neutral-500 dark:text-neutral-400">
              Earn shareable certificates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
