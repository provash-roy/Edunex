import { Badge, LayoutGrid, Play, Star, Award } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 py-12 items-center gap-8">
      <div className="flex flex-col gap-6">
        <Badge className="font-medium rounded-full bg-neutral-100 text-neutral-900 text-xs leading-4 px-3 py-1 w-fit">
          Over 12,000 courses available
        </Badge>
        <h1 className="max-w-2xl font-bold text-neutral-950 text-5xl leading-[50px] tracking-tight">
          Learn skills that move your career forward
        </h1>
        <p className="max-w-md text-neutral-500 text-base leading-6">
          Master in-demand skills with expert-led courses, hands-on projects,
          and a community of millions of learners. Start learning today, at your
          own pace.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button className="bg-neutral-900 text-neutral-50 px-6 gap-2 h-11">
            <Play className="size-4" />
            Start learning free
          </Button>
          <Button
            className="bg-white text-neutral-950 border-neutral-200 border-0 border-solid px-6 gap-2 h-11"
            variant="outline"
          >
            <LayoutGrid className="size-4" />
            Browse catalog
          </Button>
        </div>
        <div className="flex pt-2 items-center gap-6">
          <div className="flex flex-col">
            <span className="font-bold text-neutral-950 text-2xl leading-8">
              50M+
            </span>
            <span className="text-neutral-500 text-sm leading-5">Learners</span>
          </div>
          <Separator className="bg-neutral-200 h-10" orientation="vertical" />
          <div className="flex flex-col">
            <span className="font-bold text-neutral-950 text-2xl leading-8">
              12K+
            </span>
            <span className="text-neutral-500 text-sm leading-5">Courses</span>
          </div>
          <Separator className="bg-neutral-200 h-10" orientation="vertical" />
          <div className="flex flex-col">
            <span className="font-bold text-neutral-950 text-2xl leading-8 flex items-center gap-1">
              4.8
              <Star className="size-4 fill-chart4 text-[#ffb900]" />
            </span>
            <span className="text-neutral-500 text-sm leading-5">
              Avg rating
            </span>
          </div>
        </div>
      </div>
      <div className="relative rounded-2xl bg-white border-neutral-200 border-1 border-solid overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBvbmxpbmUlMjBsYXB0b3AlMjBzdHVkeXxlbnwxfDB8fHwxNzgxMjYwMDg5fDA&ixlib=rb-4.1.0&q=80&w=400"
          alt="Student learning online"
          className="object-cover w-full h-90"
          data-photoid="mfB1B1s4sMc"
          data-authorname="Christin Hume"
          data-authorurl="https://unsplash.com/@christinhumephoto"
          data-blurhash="LWFh^x9FD%kD~qV?MxbHS5t7V@n~"
        />
        <div className="backdrop-blur rounded-xl bg-white/90 border-neutral-200 border-1 border-solid flex absolute left-4 bottom-4 p-3 items-center gap-3">
          <div className="size-10 rounded-lg bg-neutral-100 text-neutral-900 flex justify-center items-center">
            <Award className="size-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-neutral-950 text-sm leading-5">
              Certified courses
            </span>
            <span className="text-neutral-500 text-xs leading-4">
              Earn shareable certificates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
