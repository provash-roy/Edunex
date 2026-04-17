import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } },
) {
  try {
    const { userId } = await auth();
    const { title } = await req.json();
    const { courseId } = params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }

    const course = await prisma.course.update({
      where: {
        id: courseId,
      },
      data: {
        title,
      },
    });
  } catch (error) {
    console.error("Error updating course:", error);
    return new NextResponse("Failed to update course", { status: 500 });
  }
}
