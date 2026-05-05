import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, LayoutDashboard, VideoIcon } from "lucide-react";

import IconBadge from "../../_components/icon-badge";
import ChapterTitleForm from "./_components/chapter-title-form";
import ChapterDescriptionForm from "./_components/chapter-description-form";
import ChapterAccessForm from "./_components/chapter-access-form";
import ChapterVideoForm from "./_components/chapter-video-form";
import ChapterAction from "./_components/chapter-action";

export default async function ChapterIdPage({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) {
  const { courseId, chapterId } = await params;

  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
      userId: userId,
    },
  });

  if (!course) {
    return redirect("/");
  }

  const chapter = await prisma.chapter.findFirst({
    where: {
      id: chapterId,
      courseId: courseId,
    },
    include: {
      muxData: true,
    },
  });

  if (!chapter) {
    return redirect(`/teacher/courses/${courseId}`);
  }

  const requiredFields = [chapter.title, chapter.description, chapter.videoUrl];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;
  const isComplete = completedFields === totalFields;

  return (
    <div className="p-4">
      <div>
        <Link href={`/teacher/courses/${courseId}`}>
          <div className="flex items-center gap-2">
            <ArrowLeft />
            Back to Course Setup
          </div>
        </Link>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium">Chapter Creation</h1>
          <span className="text-sm text-slate-700">
            Complete all fields {completionText}
          </span>
        </div>

        <ChapterAction
          disabled={!isComplete}
          courseId={courseId}
          chapterId={chapterId}
          isPublished={chapter.isPublished}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mt-4">
            <IconBadge>
              <LayoutDashboard />
            </IconBadge>
            <h2 className="text-xl">Customize your chapter</h2>
          </div>

          <ChapterTitleForm
            initialValues={chapter}
            courseId={courseId}
            chapterId={chapterId}
          />

          <ChapterDescriptionForm
            initialValues={chapter}
            courseId={courseId}
            chapterId={chapterId}
          />

          <div className="flex items-center gap-2 mt-6">
            <IconBadge>
              <LayoutDashboard />
            </IconBadge>
            <h2 className="text-xl">Access Settings</h2>
          </div>

          <ChapterAccessForm
            initialValues={chapter}
            courseId={courseId}
            chapterId={chapterId}
          />

          <div className="flex items-center gap-2 mt-6">
            <IconBadge>
              <VideoIcon />
            </IconBadge>
            <h2 className="text-xl">Add a Video</h2>
          </div>

          <ChapterVideoForm
            initialValues={chapter}
            courseId={courseId}
            chapterId={chapterId}
          />
        </div>
      </div>
    </div>
  );
}
