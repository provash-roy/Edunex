import React from "react";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import { LayoutDashboard } from "lucide-react";
import IconBadge from "./_components/icon-badge";
import TitleForm from "./_components/title-form";
import DescriptionForm from "./_components/description-form";
import PriceForm from "./_components/price-form";

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
  });

  if (!course) {
    return redirect("/");
  }

  return (
    <div className="p-4">
      <div>
        <h1 className="text-2xl font-medium">Course Setup</h1>
        <span className="text-sm text-slate-700">Complete all fields</span>
      </div>
      <div className="flex items-center gap-2 mt-8">
        <IconBadge>
          <LayoutDashboard />
        </IconBadge>
        <h1 className="text-xl">Customize your course</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <TitleForm initialValues={course} courseId={courseId} />
        <DescriptionForm initialValues={course} courseId={courseId} />
        <PriceForm initialValues={course} courseId={courseId} />
        <TitleForm initialValues={course} courseId={courseId} />
        <TitleForm initialValues={course} courseId={courseId} />
        <TitleForm initialValues={course} courseId={courseId} />
        <TitleForm initialValues={course} courseId={courseId} />
      </div>
    </div>
  );
}
``;
