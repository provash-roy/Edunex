interface CourseHeroProps {
  course: Course;
}

export default function CourseHero({ course }: CourseHeroProps) {
  return (
    <>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </>
  );
}
