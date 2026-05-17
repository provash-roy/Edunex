import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  thumbnail?: string;
  price?: number;
  category?: string;
}

export default function CourseCard({ course }: { course: CourseCardProps }) {
  return (
    <Link href={`/courses/${course.id}`}>
      <Card className="relative mx-auto w-full max-w-sm overflow-hidden rounded-xl shadow-md transition-transform hover:scale-105 hover:shadow-lg">
        {/* Thumbnail */}
        {course.thumbnail && (
          <Image
            src={course.thumbnail}
            alt={course.title}
            width={400}
            height={400}
            className="w-full h-48 object-cover rounded-t-xl"
          />
        )}

        {/* Card Content */}
        <CardHeader className="p-4">
          <CardTitle className="text-lg font-semibold">
            {course.title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {course.description.length > 100
              ? course.description.substring(0, 100) + "..."
              : course.description}
          </CardDescription>
        </CardHeader>

        {/* Card Footer */}
        <CardFooter className="p-4">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
