import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ courseId: string }> },
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { courseId } = await params;

    const { list } = await request.json();

    if (!list || !Array.isArray(list)) {
      return new Response("Invalid data", { status: 400 });
    }

    const ownCourse = await prisma.course.findFirst({
      where: {
        id: courseId,
        userId,
      },
    });

    if (!ownCourse) {
      return new Response("Course not found", { status: 404 });
    }

    // STEP 1: Temporary positions
    await prisma.$transaction(
      list.map((item: { id: string }, index: number) =>
        prisma.chapter.update({
          where: {
            id: item.id,
          },
          data: {
            position: -1 * (index + 1),
          },
        }),
      ),
    );

    // STEP 2: Final correct positions
    await prisma.$transaction(
      list.map((item: { id: string; position: number }) =>
        prisma.chapter.update({
          where: {
            id: item.id,
          },
          data: {
            position: item.position,
          },
        }),
      ),
    );

    return NextResponse.json({
      message: "Chapters reordered successfully",
    });
  } catch (error) {
    console.error("[CHAPTER_REORDER]", error);

    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
