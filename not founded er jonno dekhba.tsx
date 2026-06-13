import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, Play, Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChapterPageProps {
  params: {
    courseId: string;
    chapterId: string;
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { courseId, chapterId } = params;

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      chapters: {
        orderBy: { position: "asc" },
      },
    },
  });

  if (!course) {
    return <NotFoundCourse />;
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
    return <NotFoundChapter courseId={courseId} />;
  }

  const publishedChapters = course.chapters.filter((ch) => ch.isPublished);

  const videoSrc = chapter.muxData?.playbackId
    ? `https://stream.mux.com/${chapter.muxData.playbackId}.m3u8`
    : chapter.videoUrl;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <Header course={course} chapter={chapter} courseId={courseId} />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        {/* Video Section */}
        <VideoSection videoSrc={videoSrc} />

        {/* Sidebar */}
        <Sidebar course={course} publishedChapters={publishedChapters} />
      </div>
    </div>
  );
}

/* ================= HEADER ================= */
function Header({
  course,
  chapter,
  courseId,
}: {
  course: any;
  chapter: any;
  courseId: string;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <Link
          href={`/courses/${courseId}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to course
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
  );
}

/* ================= VIDEO ================= */
function VideoSection({ videoSrc }: { videoSrc?: string }) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-slate-950 text-white overflow-hidden">
        {videoSrc ? (
          <video controls className="h-full w-full bg-black">
            <source src={videoSrc} />
            Your browser does not support video playback.
          </video>
        ) : (
          <div className="flex h-80 items-center justify-center bg-slate-800 text-slate-300">
            No video available for this chapter.
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= SIDEBAR ================= */
function Sidebar({
  course,
  publishedChapters,
}: {
  course: any;
  publishedChapters: any[];
}) {
  return (
    <aside className="space-y-5">
      <Card className="rounded-3xl border border-slate-200 bg-slate-50">
        <CardHeader className="p-6">
          <CardTitle className="text-lg font-semibold">
            {course.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 p-6 text-sm text-slate-600">
          <span className="font-medium">Chapters</span>

          <div className="rounded-3xl border bg-white p-4 space-y-4">
            {publishedChapters.map((chapter) => (
              <div
                key={chapter.id}
                className="rounded-2xl border p-4 hover:border-slate-300 transition"
              >
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">{chapter.title}</h3>
                    <p className="text-sm text-slate-500">
                      {chapter.description ?? "No description"}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock3 className="h-4 w-4" />
                    {chapter.duration ?? 0} min
                  </div>
                </div>

                <div className="mt-3 flex gap-2 text-xs">
                  <Badge variant="secondary">
                    {chapter.isPublished ? "Published" : "Draft"}
                  </Badge>
                  <Badge variant="secondary">
                    {chapter.isFree ? "Free" : "Paid"}
                  </Badge>
                </div>

                <Link
                  href={`/courses/${course.id}/chapters/${chapter.id}`}
                  className="mt-3 inline-flex items-center text-sm font-medium hover:text-slate-600"
                >
                  <Play className="h-4 w-4 mr-1" />
                  View chapter
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}

/* ================= ERROR STATES ================= */
function NotFoundCourse() {
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

function NotFoundChapter({ courseId }: { courseId: string }) {
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
