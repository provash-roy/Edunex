import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, Clock3, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChapterPageProps {
  params: {
    courseId: string;
    chapterId: string;
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { courseId, chapterId } = await params;

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      chapters: {
        orderBy: { position: "asc" },
      },
    },
  });

  if (!course) {
    return (
      <div className="container mx-auto p-8">
        <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center text-red-700">
          <h1 className="text-2xl font-semibold">Course not found</h1>
          <p className="mt-2 text-sm text-slate-600">
            The requested course does not exist.
          </p>
          <Link
            href="/courses"
            className="mt-4 inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const chapter = await prisma.chapter.findFirst({
    where: {
      id: chapterId,
      courseId,
      isPublished: true,
    },
    include: {
      muxData: true,
    },
  });

  if (!chapter) {
    return (
      <div className="container mx-auto p-8">
        <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center text-red-700">
          <h1 className="text-2xl font-semibold">Chapter not available</h1>
          <p className="mt-2 text-sm text-slate-600">
            This chapter is not published or does not belong to the course.
          </p>
          <Link
            href={`/courses/${courseId}`}
            className="mt-4 inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Back to Course
          </Link>
        </div>
      </div>
    );
  }

  const videoSrc = chapter.muxData?.playbackId
    ? `https://stream.mux.com/${chapter.muxData.playbackId}.m3u8`
    : chapter.videoUrl;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link
            href={`/courses/${courseId}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" /> Back to course
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <span>{course.title}</span>
            <span>/</span>
            <span>{chapter.title}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Badge variant="secondary">{chapter.isFree ? "Free" : "Paid"}</Badge>
          <Badge variant="secondary">
            {chapter.isPublished ? "Published" : "Draft"}
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl bg-slate-950 text-white">
            {videoSrc ? (
              <video controls className="h-full w-full rounded-3xl bg-black">
                <source src={videoSrc} />
                Your browser does not support video playback.
              </video>
            ) : (
              <div className="flex h-80 items-center justify-center rounded-3xl bg-slate-800 text-slate-300">
                No video available for this chapter.
              </div>
            )}
          </div>

          <Card className="rounded-3xl border border-slate-200">
            <CardHeader className="p-6">
              <CardTitle className="text-xl font-semibold">
                {chapter.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-6 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <Play className="h-4 w-4 text-slate-500" />
                <span>
                  {chapter.duration
                    ? `${chapter.duration} min`
                    : "Duration not set"}
                </span>
              </div>
              <div className="text-slate-700">
                {chapter.description ?? "No chapter description."}
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  Course: {course.title}
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Status: {chapter.isPublished ? "Published" : "Draft"}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-5">
          <Card className="rounded-3xl border border-slate-200 bg-slate-50">
            <CardHeader className="p-6">
              <CardTitle className="text-lg font-semibold">
                Chapter details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-6 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Video URL</span>
                <span className="text-slate-900">
                  {chapter.videoUrl ? "Yes" : "No"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Mux playback</span>
                <span className="text-slate-900">
                  {chapter.muxData?.playbackId ? "Connected" : "Not connected"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Free lesson</span>
                <span className="text-slate-900">
                  {chapter.isFree ? "Yes" : "No"}
                </span>
              </div>
            </CardContent>
          </Card>

          <Button asChild>
            <Link
              href={`/courses/${courseId}`}
              className="w-full inline-flex justify-center"
            >
              Back to course overview
            </Link>
          </Button>
        </aside>
      </div>
    </div>
  );
}
