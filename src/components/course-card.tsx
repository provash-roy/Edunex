import Link from "next/link";
import Image from "next/image";

import { Course } from "@prisma/client";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`} className="block group">
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* IMAGE */}
        <div className="relative w-full aspect-video overflow-hidden">
          {course.thumbnail ? (
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600" />
          )}
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-2">
          {/* TITLE */}
          <h3 className="font-semibold text-gray-900 dark:text-white text-base leading-snug line-clamp-2">
            {course.title}
          </h3>

          {/* AUTHOR */}
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {course.userId ?? "Unknown Instructor"}
          </p>

          {/* RATING + PRICE ROW */}
          <div className="flex items-center justify-between pt-1">
            {/* Rating */}
            <div className="flex items-center gap-1 text-sm">
              <span className="font-semibold text-amber-500">4.5</span>
              <span className="text-amber-400">★</span>
            </div>

            {/* Price */}
            <div className="font-bold text-gray-900 dark:text-white">
              ${course.price ?? "49.99"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
