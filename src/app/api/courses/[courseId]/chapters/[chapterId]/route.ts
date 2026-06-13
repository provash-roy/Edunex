import { mux } from "@/lib/mux";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ courseId: string; chapterId: string }> },
) {
  try {
    const { userId } = await auth();
    const resolvedParams =
      params && typeof (params as any).then === "function"
        ? await (params as any)
        : params;
    const { courseId, chapterId } = resolvedParams;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const values = await req.json();

    if (Object.keys(values).length === 0) {
      return new NextResponse("No values provided", { status: 400 });
    }

    // Verify course ownership
    const courseOwner = await prisma.course.findFirst({
      where: {
        id: courseId,
        userId: userId,
      },
    });

    if (!courseOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Update chapter fields safely
    const chapter = await prisma.chapter.update({
      where: {
        id: chapterId,
      },
      data: {
        title: values.title,
        description: values.description,
        videoUrl: values.videoUrl,
        isPublished: values.isPublished,
        isFree: values.isFree,
      },
    });

    // Handle Mux video update
    if (values.videoUrl) {
      const existingMuxData = await prisma.muxData.findFirst({
        where: {
          chapterId: chapterId,
        },
      });

      // Delete previous mux asset if exists
      if (existingMuxData) {
        try {
          await mux.video.assets.delete(existingMuxData.assetId);
        } catch (error) {
          console.log("Mux asset already deleted or not found");
        }

        await prisma.muxData.delete({
          where: {
            id: existingMuxData.id,
          },
        });
      }

      // Create new mux asset
      const asset = await mux.video.assets.create({
        inputs: [
          {
            url: values.videoUrl,
          },
        ],
        playback_policy: ["public"],
      });

      const playbackId = asset.playback_ids?.[0]?.id;

      if (!playbackId) {
        return new NextResponse("Playback ID not generated", {
          status: 500,
        });
      }

      // Save mux data
      await prisma.muxData.create({
        data: {
          chapterId: chapterId,
          assetId: asset.id,
          playbackId: playbackId,
        },
      });
    }

    return NextResponse.json(chapter);
  } catch (error) {
    console.error("[CHAPTER_PATCH]", error);

    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ courseId: string; chapterId: string }> },
) {
  try {
    const { userId } = await auth();
    const resolvedParams2 =
      params && typeof (params as any).then === "function"
        ? await (params as any)
        : params;
    const { courseId, chapterId } = resolvedParams2;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Verify course ownership
    const courseOwner = await prisma.course.findFirst({
      where: {
        id: courseId,
        userId: userId,
      },
    });

    if (!courseOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Find existing mux data
    const existingMuxData = await prisma.muxData.findFirst({
      where: {
        chapterId: chapterId,
      },
    });

    // Delete mux asset if exists
    if (existingMuxData) {
      try {
        await mux.video.assets.delete(existingMuxData.assetId);
      } catch (error) {
        console.log("Mux asset already deleted or not found");
      }

      await prisma.muxData.delete({
        where: {
          id: existingMuxData.id,
        },
      });
    }

    // Delete chapter
    const deletedChapter = await prisma.chapter.delete({
      where: {
        id: chapterId,
      },
    });

    return NextResponse.json(deletedChapter);
  } catch (error) {
    console.error("[CHAPTER_DELETE]", error);

    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
