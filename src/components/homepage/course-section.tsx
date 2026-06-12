import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Badge, Star, StarHalf } from "lucide-react";
import { Card } from "../ui/card";

export default function CourseSection() {
  return (
    <section className="flex py-12 flex-col gap-6">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-neutral-950 text-3xl leading-9 tracking-tight">
            Popular courses
          </h2>
          <p className="text-neutral-500 text-sm leading-5">
            Hand-picked courses loved by our community
          </p>
        </div>
        <Button
          className="font-medium text-neutral-950 text-sm leading-5 gap-1"
          variant="ghost"
        >
          View all
          <ArrowRight className="size-4" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-white border-neutral-200 border-1 border-solid p-0 gap-0 overflow-hidden">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGNvdXJzZXxlbnwxfDB8fHwxNzgxMjYwMDg5fDA&ixlib=rb-4.1.0&q=80&w=400"
              alt="Web development"
              className="object-cover w-full h-36"
              data-photoid="4hbJ-eymZ1o"
              data-authorname="Florian Olivo"
              data-authorurl="https://unsplash.com/@florianolv"
              data-blurhash="L76kVU-YRjODiYrpson+R:W=WoWV"
            />
            <Badge className="rounded-full bg-neutral-100 text-neutral-900 absolute left-3 top-3">
              Bestseller
            </Badge>
          </div>
          <div className="flex p-4 flex-col gap-3">
            <span className="font-medium text-neutral-500 text-xs leading-4">
              Development
            </span>
            <h3 className="font-semibold text-neutral-950 text-base leading-6">
              The Complete Web Developer Bootcamp
            </h3>
            <div className="text-sm leading-5 flex items-center gap-2">
              <span className="font-semibold text-[#ffb900]">4.9</span>
              <div className="text-[#ffb900] flex items-center gap-0.5">
                <Star className="size-3 fill-chart4" />
                <Star className="size-3 fill-chart4" />
                <Star className="size-3 fill-chart4" />
                <Star className="size-3 fill-chart4" />
                <Star className="size-3 fill-chart4" />
              </div>
              <span className="text-neutral-500 text-xs leading-4">
                (8,420)
              </span>
            </div>
            <div className="flex pt-1 justify-between items-center">
              <span className="font-bold text-neutral-950 text-lg leading-7">
                $59.99
              </span>
              <span className="line-through text-neutral-500 text-xs leading-4">
                $129.99
              </span>
            </div>
          </div>
        </Card>
        <Card className="bg-white border-neutral-200 border-1 border-solid p-0 gap-0 overflow-hidden">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfDB8fHwxNzgxMjYwMDg5fDA&ixlib=rb-4.1.0&q=80&w=400"
              alt="Data science"
              className="object-cover w-full h-36"
              data-photoid="JKUTrJ4vK00"
              data-authorname="Luke Chesser"
              data-authorurl="https://unsplash.com/@lukechesser"
              data-blurhash="LUDvl^00-;9Z~qM{IUt7_2M_Ios:"
            />
            <Badge className="rounded-full bg-neutral-100 text-neutral-900 absolute left-3 top-3">
              New
            </Badge>
          </div>
          <div className="flex p-4 flex-col gap-3">
            <span className="font-medium text-neutral-500 text-xs leading-4">
              Data Science
            </span>
            <h3 className="font-semibold text-neutral-950 text-base leading-6">{`Data Science & Machine Learning A-Z`}</h3>
            <div className="text-sm leading-5 flex items-center gap-2">
              <span className="font-semibold text-[#ffb900]">4.7</span>
              <div className="text-[#ffb900] flex items-center gap-0.5">
                <Star className="size-3 fill-chart4" />
                <Star className="size-3 fill-chart4" />
                <Star className="size-3 fill-chart4" />
                <StarHalf className="size-3 fill-chart4" />
              </div>
              <span className="text-neutral-500 text-xs leading-4">
                (5,210)
              </span>
            </div>
            <div className="flex pt-1 justify-between items-center">
              <span className="font-bold text-neutral-950 text-lg leading-7">
                $74.99
              </span>
              <span className="line-through text-neutral-500 text-xs leading-4">
                $149.99
              </span>
            </div>
          </div>
        </Card>
        <Card className="bg-white border-neutral-200 border-1 border-solid p-0 gap-0 overflow-hidden">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXwwfHx8MTc4MTI2MDA4OXww&ixlib=rb-4.1.0&q=80&w=400"
              alt="Graphic design"
              className="object-cover w-full h-36"
              data-photoid="ZEtE38ybfao"
              data-authorname="Denise Jans"
              data-authorurl="https://unsplash.com/@dmjdenise"
              data-blurhash="LPH2QK%N~qx^o#kD%Lo#9E%MM{oe"
            />
          </div>
          <div className="flex p-4 flex-col gap-3">
            <span className="font-medium text-neutral-500 text-xs leading-4">
              Design
            </span>
            <h3 className="font-semibold text-neutral-950 text-base leading-6">
              UI/UX Design Masterclass with Figma
            </h3>
            <div className="text-sm leading-5 flex items-center gap-2">
              <span className="font-semibold text-[#ffb900]">4.8</span>
              <div className="text-[#ffb900] flex items-center gap-0.5">
                <Star className="size-3 fill-chart4" />
                <Star className="size-3 fill-chart4" />
                <Star className="size-3 fill-chart4" />
                <Star className="size-3 fill-chart4" />
                <Star className="size-3 fill-chart4" />
              </div>
              <span className="text-neutral-500 text-xs leading-4">
                (3,880)
              </span>
            </div>
            <div className="flex pt-1 justify-between items-center">
              <span className="font-bold text-neutral-950 text-lg leading-7">
                $49.99
              </span>
              <span className="line-through text-neutral-500 text-xs leading-4">
                $99.99
              </span>
            </div>
          </div>
        </Card>
        <Card className="bg-white border-neutral-200 border-1 border-solid p-0 gap-0 overflow-hidden">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hcmtldGluZyUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfDB8fHwxNzgxMjYwMDg5fDA&ixlib=rb-4.1.0&q=80&w=400"
              alt="Marketing"
              className="object-cover w-full h-36"
              data-photoid="KdeqA3aTnBY"
              data-authorname="Dylan Gillis"
              data-authorurl="https://unsplash.com/@mainermedia"
              data-blurhash="LLH2K8Dh0L%h-:XUem%2E2r;xFW="
            />
            <Badge className="rounded-full bg-neutral-100 text-neutral-900 absolute left-3 top-3">
              Bestseller
            </Badge>
          </div>
          <div className="flex p-4 flex-col gap-3">
            <span className="font-medium text-neutral-500 text-xs leading-4">
              Marketing
            </span>
            <h3 className="font-semibold text-neutral-950 text-base leading-6">
              Digital Marketing Strategy Complete Guide
            </h3>
            <div className="text-sm leading-5 flex items-center gap-2">
              <span className="font-semibold text-[#ffb900]">4.6</span>
              <div className="text-[#ffb900] flex items-center gap-0.5">
                <Star className="size-3 fill-chart4" />
                <Star className="size-3 fill-chart4" />
                <Star className="size-3 fill-chart4" />
                <Star className="size-3 fill-chart4" />
                <StarHalf className="size-3 fill-chart4" />
              </div>
              <span className="text-neutral-500 text-xs leading-4">
                (6,140)
              </span>
            </div>
            <div className="flex pt-1 justify-between items-center">
              <span className="font-bold text-neutral-950 text-lg leading-7">
                $54.99
              </span>
              <span className="line-through text-neutral-500 text-xs leading-4">
                $119.99
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
