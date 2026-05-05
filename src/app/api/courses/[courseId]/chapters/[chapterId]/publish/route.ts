import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } },
) {
  try {
    const { userId } = await auth();
    const { courseId, chapterId } = await params;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }


    const courseOwner = await prisma.course.findFirst({
      where: {
        id: courseId,
        userId: userId, 
      },
    });

    if (!courseOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const chapter = await prisma.chapter.update({
      where: {
        id: chapterId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    console.error("Error publishing chapter:", error);
    return new NextResponse("Failed to publish chapter", { status: 500 });
  }
}
