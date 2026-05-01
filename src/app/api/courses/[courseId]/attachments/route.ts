import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ courseId: string }> },
) {
  try {
    const { courseId } = await params;

    const { userId } = await auth();

    const { url, name } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!url || !name) {
      return new NextResponse("URL and name are required", {
        status: 400,
      });
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

    const attachment = await prisma.attachment.create({
      data: {
        url,
        name,
        courseId,
      },
    });

    return NextResponse.json(attachment);
  } catch (error) {
    console.error("[ATTACHMENT_POST_ERROR]", error);

    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
