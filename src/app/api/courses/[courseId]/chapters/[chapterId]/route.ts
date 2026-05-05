import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } },
) {
  try {
    const { userId } = await auth();
    const values = await req.json();
    const { courseId, chapterId } = await params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!values) {
      return new NextResponse("Title is required", { status: 400 });
    }

    const courseOwner = await prisma.course.findFirst({
      where: {
        id: courseId,
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
        ...values,
      },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    console.error("Error updating chapter:", error);
    return new NextResponse("Failed to update chapter", { status: 500 });
  }
}

export async function DELETE(
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
      },
    });

    if (!courseOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await prisma.chapter.delete({
      where: {
        id: chapterId,
      },
    });

    return new NextResponse("Chapter deleted", { status: 200 });
  } catch (error) {
    console.error("Error deleting chapter:", error);
    return new NextResponse("Failed to delete chapter", { status: 500 });
  }
}
