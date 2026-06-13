import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

import { ArrowLeft, CheckCircle2, Clock3, Play, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CourseIdPageProps {
  params: { courseId: string };
}

export default async function CourseIdPage({ params }: CourseIdPageProps) {
  const { courseId } = await params;

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      category: true,
      attachments: true,
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
            The requested course does not exist or has been removed.
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

  const publishedChapters = course.chapters.filter((ch) => ch.isPublished);

  const firstChapter = publishedChapters?.[0];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* HEADER */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/courses" className="hover:text-slate-900">
              Courses
            </Link>
            <span>/</span>
            <span>{course.category?.name ?? "Uncategorized"}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            {course.title}
          </h1>

          <p className="max-w-3xl text-slate-600">
            {course.description ?? "No description available."}
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
              <Clock3 className="h-4 w-4" />
              {course.chapters.length} chapters
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
              <Star className="h-4 w-4" />
              {course.isPublished ? "Published" : "Draft"}
            </span>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-3">
          {firstChapter ? (
            <Button asChild>
              <Link href={`/courses/${courseId}/chapters/${firstChapter.id}`}>
                <Play className="h-4 w-4 mr-2" />
                Start course
              </Link>
            </Button>
          ) : (
            <Button disabled>No chapters yet</Button>
          )}

          <Button variant="outline" asChild>
            <Link href="/courses">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        {/* LEFT */}
        <div className="space-y-6">
          {/* WHAT YOU'LL LEARN */}
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>What youll learn</CardTitle>
            </CardHeader>

            <CardContent className="grid gap-4 md:grid-cols-2">
              {[
                "Understand course content and structure",
                "Complete every lesson at your own pace",
                "Download attached resources",
                "Preview lessons before enrolling",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="h-5 w-5 mt-1 text-slate-900" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* CURRICULUM */}
          <div className="rounded-3xl border bg-white p-6 space-y-4">
            <h2 className="text-xl font-semibold">Course curriculum</h2>

            {publishedChapters.length === 0 ? (
              <div className="rounded-xl border border-dashed p-5 text-slate-500">
                No published chapters yet.
              </div>
            ) : (
              publishedChapters.map((chapter) => (
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

                    <div className="text-sm text-slate-500 flex items-center gap-2">
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
                    href={`/courses/${courseId}/chapters/${chapter.id}`}
                    className="mt-3 inline-flex text-sm font-medium hover:text-slate-600"
                  >
                    <Play className="h-4 w-4 mr-1" />
                    View chapter
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-6">
          <Card className="overflow-hidden">
            {/* IMAGE */}
            <div className="relative h-[220px] w-full">
              <Image
                src={course.thumbnail}
                alt={course.title}

                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />

              {firstChapter && (
                <Link
                  href={`/courses/${courseId}/chapters/${firstChapter.id}`}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition">
                    <Play className="h-6 w-6" />
                  </div>
                </Link>
              )}
            </div>

            {/* PRICE */}
            <CardContent className="space-y-4 pt-5">
              <div className="flex justify-between text-sm">
                <span>Price</span>
                <span className="font-semibold">
                  {course.price ? `$${course.price.toFixed(2)}` : "Free"}
                </span>
              </div>

              <Button className="w-full">Enroll Now</Button>
              <Button variant="outline" className="w-full">
                Try Free Preview
              </Button>

              <Separator />

              <div className="space-y-2 text-sm">
                <h4 className="font-medium">Includes</h4>

                <div className="flex justify-between">
                  <span>Category</span>
                  <span>{course.category?.name}</span>
                </div>

                <div className="flex justify-between">
                  <span>Chapters</span>
                  <span>{course.chapters.length}</span>
                </div>

                <div className="flex justify-between">
                  <span>Attachments</span>
                  <span>{course.attachments.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
