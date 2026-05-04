import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, LayoutDashboard } from "lucide-react";
import IconBadge from "../../_components/icon-badge";
import ChapterTitleForm from "./_components/chapter-title-form";

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

  const chapter = await prisma.chapter.findUnique({
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
      <div className="mt-4">
        <h1 className="text-2xl font-medium">Chapter Creation</h1>
        <span className="text-sm text-slate-700">
          Complete all fields {completionText}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mt-8">
            <IconBadge>
              <LayoutDashboard />
            </IconBadge>
            <h1 className="text-xl">Customize your course</h1>
          </div>
          <ChapterTitleForm
            initialValues={chapter}
            courseId={courseId}
            chapterId={chapterId}
          />
        </div>
      </div>
    </div>
  );
}
