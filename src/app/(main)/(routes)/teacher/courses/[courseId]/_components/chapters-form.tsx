"use client";

import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

import { Course, Chapter } from "@/generated/prisma/client";

import ChapterList from "./chapters-list";
import ChaptersList from "./chapters-list";

const schema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
});

interface ChaptersFormProps {
  initialValues: Course & {
    chapters: Chapter[];
  };
  courseId: string;
}

export default function ChaptersForm({
  initialValues,
  courseId,
}: ChaptersFormProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const toggleCreating = () => setIsCreating((prev) => !prev);

  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await axios.post(`/api/courses/${courseId}/chapters`, data);

      toast.success("Chapter created");

      form.reset();

      toggleCreating();

      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  const onReorder = async (updateData: { id: string; position: number }[]) => {
    try {
      setIsUpdating(true);

      await axios.put(`/api/courses/${courseId}/chapters/reorder`, {
        list: updateData,
      });

      toast.success("Chapters reordered");

      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsUpdating(false);
    }
  };

  const onEdit = (id: string) => {
    router.push(`/teacher/courses/${courseId}/chapters/${id}`);
  };

  return (
    <div className="border bg-slate-100 rounded-md p-4">
      {/* Header */}
      <div className="font-medium flex items-center justify-between">
        Chapter Title
        <Button onClick={toggleCreating} variant="ghost" size="sm">
          {isCreating ? (
            <>Cancel</>
          ) : (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Chapter
            </>
          )}
        </Button>
      </div>

      {!isCreating && (
        <div className="mt-4">
          {initialValues.chapters?.length === 0 ? (
            <p className="text-sm text-slate-500 italic">
              No chapters provided yet.
            </p>
          ) : (
            <ChaptersList
              onEdit={onEdit}
              onReorder={onReorder}
              items={initialValues.chapters || []}
            />
          )}
        </div>
      )}

      {/* Create Form */}
      {isCreating && (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  disabled={isSubmitting}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="e.g. Introduction to MERN Stack"
                  autoComplete="off"
                />

                <FieldDescription>
                  Give your chapter a clear title so students understand the
                  lesson topic.
                </FieldDescription>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Button type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </form>
      )}
    </div>
  );
}
