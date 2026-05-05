import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } },
) {
  try {
    const { userId } = await auth();
    const values = await req.json();
    const { courseId } = await params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!values) {
      return new NextResponse("Title is required", { status: 400 });
    }

    const course = await prisma.course.update({
      where: {
        id: courseId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.error("Error updating course:", error);
    return new NextResponse("Failed to update course", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string } },
) {
  try {
    const { userId } = await auth();
    const { courseId } = await params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      return new NextResponse("Course not found", { status: 404 });
    }

    if (course.userId !== userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await prisma.chapter.deleteMany({
      where: { courseId },
    });

    const deletedCourse = await prisma.course.delete({
      where: { id: courseId },
    });

    return NextResponse.json(deletedCourse);
  } catch (error) {
    console.log("Error deleting course:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
