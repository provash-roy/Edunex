import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const { title } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }

    const course = await prisma.course.create({
      data: {
        title,
        userId,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.error("Error creating course:", error);
    return new NextResponse("Failed to create course", { status: 500 });
  }
}
