import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

export default function ReviewSection() {
  return (
    <section className="flex py-12 flex-col gap-6">
      <div className="text-center flex flex-col items-center gap-2">
        <h2 className="font-bold text-neutral-950 text-3xl leading-9 tracking-tight">
          Loved by learners worldwide
        </h2>
        <p className="max-w-lg text-neutral-500 text-sm leading-5">
          Join millions who transformed their careers with Learnova
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-white border-neutral-200 border-1 border-solid p-6 gap-4">
          <CardContent className="flex p-0 gap-4">
            <div className="flex flex-col gap-4">
              <div className="text-[#ffb900] flex items-center gap-1">
                <Star className="size-4 fill-chart4" />
                <Star className="size-4 fill-chart4" />
                <Star className="size-4 fill-chart4" />
                <Star className="size-4 fill-chart4" />
                <Star className="size-4 fill-chart4" />
              </div>
              <p className="text-neutral-950 text-sm leading-5">
                "The courses are incredibly well structured. I landed a
                developer role just three months after finishing the bootcamp."
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1710777932534-2a58edf3603d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfDJ8fHwxNzgxMjYwMDg5fDA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Sarah"
                    data-photoid="21ckukPU3qA"
                    data-authorname="Abenezer Shewaga"
                    data-authorurl="https://unsplash.com/@abenezer_shewaga"
                    data-blurhash="LmMr3UNa}kt7;xW=N{WBxFn$NdWr"
                  />
                  <AvatarFallback>SL</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold text-neutral-950 text-sm leading-5">
                    Sarah Lin
                  </span>
                  <span className="text-neutral-500 text-xs leading-4">
                    Frontend Developer
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white border-neutral-200 border-1 border-solid p-6 gap-4">
          <CardContent className="flex p-0 gap-4">
            <div className="flex flex-col gap-4">
              <div className="text-[#ffb900] flex items-center gap-1">
                <Star className="size-4 fill-chart4" />
                <Star className="size-4 fill-chart4" />
                <Star className="size-4 fill-chart4" />
                <Star className="size-4 fill-chart4" />
                <Star className="size-4 fill-chart4" />
              </div>
              <p className="text-neutral-950 text-sm leading-5">
                "Flexible learning that fits my schedule. The hands-on projects
                made all the difference in my understanding."
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8Mnx8fDE3ODEwOTk5NjB8MA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Marcus"
                    data-photoid="n4KewLKFOZw"
                    data-authorname="Imansyah Muhamad Putera"
                    data-authorurl="https://unsplash.com/@imansyahmp"
                    data-blurhash="LOE{FM_NK6r=kqt7$*WXE2RjwvWV"
                  />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold text-neutral-950 text-sm leading-5">
                    Marcus Reed
                  </span>
                  <span className="text-neutral-500 text-xs leading-4">
                    Data Analyst
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white border-neutral-200 border-1 border-solid p-6 gap-4">
          <CardContent className="flex p-0 gap-4">
            <div className="flex flex-col gap-4">
              <div className="text-[#ffb900] flex items-center gap-1">
                <Star className="size-4 fill-chart4" />
                <Star className="size-4 fill-chart4" />
                <Star className="size-4 fill-chart4" />
                <Star className="size-4 fill-chart4" />
                <StarHalf className="size-4 fill-chart4" />
              </div>
              <p className="text-neutral-950 text-sm leading-5">
                "As an instructor, the platform tools are fantastic. I have
                reached thousands of students around the globe."
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1577744168855-0391d2ed2b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxpbnN0cnVjdG9yJTIwdGVhY2hlciUyMHBvcnRyYWl0fGVufDF8Mnx8fDE3ODEyNjAwODl8MA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="David"
                    data-photoid="Aj4DeR0H6RQ"
                    data-authorname="Patrick Daley"
                    data-authorurl="https://unsplash.com/@edgemodelsandtalent"
                    data-blurhash="LB8zGg-p0zM|X9WVIoNGE2RkoKf6"
                  />
                  <AvatarFallback>DK</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold text-neutral-950 text-sm leading-5">
                    David Kim
                  </span>
                  <span className="text-neutral-500 text-xs leading-4">
                    Senior Instructor
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
