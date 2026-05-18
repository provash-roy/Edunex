import React from "react";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import { DollarSignIcon, File, LayoutDashboard, ListCheck } from "lucide-react";
import IconBadge from "./_components/icon-badge";
import TitleForm from "./_components/title-form";
import ChaptersForm from "./_components/chapters-form";
import DescriptionForm from "./_components/description-form";
import PriceForm from "./_components/price-form";
import ThumbnailForm from "./_components/thumbnail-form";
import CategoryForm from "./_components/category-form";
import AttachmentForm from "./_components/attachments-form";
import CourseActionForm from "./_components/course-action-form";

interface CourseIdPageProps {
  params: Promise<{ courseId: string }>;
}

export default async function CourseIdPage({ params }: CourseIdPageProps) {
  const userId = auth();
  const { courseId } = await params;

  if (!userId) {
    return redirect("/");
  }

  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      attachments: {
        orderBy: { createdAt: "desc" },
      },
      chapters: {
        orderBy: { position: "asc" },
      },
    },
  });

  if (!course) {
    return redirect("/");
  }

  const requiredFields = [
    course.title,
    course.description,
    course.thumbnail,
    course.price,
    course.category,
    course.chapters.some((chapter) => chapter.isPublished),
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;
  const isComplete = completedFields === totalFields;

  return (
    <div className="p-4">
      <div className="flex items-center justify-between gap-x-2">
        <div>
          <h1 className="text-2xl font-medium">Course Setup</h1>
          <span className="text-sm text-slate-700">
            Complete all fields {completionText}
          </span>
        </div>

        <CourseActionForm 
        disabled={!isComplete}
          courseId={courseId}
          isPublished={course.published} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mt-8">
            <IconBadge>
              <LayoutDashboard />
            </IconBadge>
            <h1 className="text-xl">Customize your course</h1>
          </div>
          <TitleForm initialValues={course} courseId={courseId} />
          <DescriptionForm initialValues={course} courseId={courseId} />
          <CategoryForm initialValues={course} courseId={courseId} />

          <ThumbnailForm initialValues={course} courseId={courseId} />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mt-8">
            <IconBadge>
              <DollarSignIcon />
            </IconBadge>
            <h1 className="text-xl">Sell your course</h1>
          </div>
          <PriceForm initialValues={course} courseId={courseId} />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mt-8">
            <IconBadge>
              <File />
            </IconBadge>
            <h1 className="text-xl">Resources And Attachments</h1>
          </div>
          <AttachmentForm initialValues={course} courseId={courseId} />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mt-8">
            <IconBadge>
              <ListCheck />
            </IconBadge>
            <h1 className="text-xl">Course Chapters</h1>
          </div>
          <ChaptersForm initialValues={course} courseId={courseId} />
        </div>
      </div>
    </div>
  );
}
