import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

const reviews = [
  {
    name: "Sarah Lin",
    role: "Frontend Developer",
    text: "The courses are incredibly well structured. I landed a developer role just three months after finishing the bootcamp.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1710777932534-2a58edf3603d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    fallback: "SL",
  },
  {
    name: "Marcus Reed",
    role: "Data Analyst",
    text: "Flexible learning that fits my schedule. The hands-on projects made all the difference in my understanding.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    fallback: "MR",
  },
  {
    name: "David Kim",
    role: "Senior Instructor",
    text: "As an instructor, the platform tools are fantastic. I have reached thousands of students around the globe.",
    rating: 4.5,
    avatar:
      "https://images.unsplash.com/photo-1577744168855-0391d2ed2b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    fallback: "DK",
  },
];

export default function ReviewSection() {
  return (
    <section className=" max-w-7xl mx-auto px-8 flex flex-col gap-10 py-12">
      {/* Header */}
      <div className="text-center flex flex-col items-center gap-2">
        <h2 className="font-bold text-3xl tracking-tight text-neutral-950 dark:text-neutral-100">
          Loved by learners worldwide
        </h2>
        <p className="max-w-lg text-sm text-neutral-600 dark:text-neutral-400">
          Join millions who transformed their careers with Learnova
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <Card
            key={idx}
            className="p-6 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors hover:shadow-md dark:hover:shadow-none"
          >
            <CardContent className="p-0 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-1 text-[#ffb900]">
                {[...Array(Math.floor(review.rating))].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ffb900]" />
                ))}
                {review.rating % 1 !== 0 && (
                  <StarHalf className="w-4 h-4 fill-[#ffb900]" />
                )}
              </div>

              {/* Text */}
              <p className="text-sm leading-6 text-neutral-900 dark:text-neutral-200">
                {review.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={review.avatar} />
                  <AvatarFallback>{review.fallback}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <span className="font-semibold text-sm text-neutral-950 dark:text-neutral-100">
                    {review.name}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {review.role}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
