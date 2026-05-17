import { getCourses } from "@/actions/get-courses";
import CourseCard from "@/components/course-card";

export default async function SearchPage() {
  const courses = await getCourses();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {" "}
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
