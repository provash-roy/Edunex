import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ courseId: string; attachmentId: string }> },
) {
  try {
    const { courseId, attachmentId } = await params;
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const courseOwner = await prisma.course.findFirst({
      where: {
        id: courseId,
        userId,
      },
    });

    if (!courseOwner) {
      return new NextResponse("Course not found or unauthorized", {
        status: 404,
      });
    }

    await prisma.attachment.delete({
      where: {
        id: attachmentId,
      },
    });

    return new NextResponse("Attachment deleted", {
      status: 200,
    });
  } catch (error) {
    console.error("[ATTACHMENT_DELETE_ERROR]", error);

    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
