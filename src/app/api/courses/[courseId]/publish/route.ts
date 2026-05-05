import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } },
) {
  const { courseId } = await params;
  try {
    const { userId } = await auth();

    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const coursOwner = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!coursOwner) {
      return new Response("Course not found", { status: 404 });
    }

    const updatedCourse = await prisma.course.update({
      where: {
        id: courseId,
      },
      data: {
        published: true,
      },
    });

    return NextResponse.json(updatedCourse);
  } catch (error) {
    console.error(error);
    return new Response("Failed to publish course", { status: 500 });
  }
}
