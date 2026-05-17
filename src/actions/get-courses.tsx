import { prisma } from "../lib/prisma";


export const getCourses = async () => {
  try {
    const response = await prisma.course.findMany({
      where: {
        published: true,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw new Error("Failed to fetch courses");
  }
};
