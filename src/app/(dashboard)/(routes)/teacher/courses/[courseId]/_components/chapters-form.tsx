"use client";

import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {PlusCircle } from "lucide-react";
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
import { Course } from "@/generated/prisma/client";
import ChapterList from "./chapters-list";

const schema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
});

interface ChaptersFormProps{
  initialValues: Course;
  courseId: string;
}

export default function ChaptersForm({
  initialValues,
  courseId,
}: ChaptersFormProps) {

  const [isCreating , setIsCreating] = useState(false);
  const [isUpdating,setIsUpdating]= useState(false);
  const toggleCreating = () => setIsCreating((prev) => !prev);
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title:  "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: z.infer<typeof schema>) => {
    await axios.post(`/api/courses/${courseId}/chapters`, data);
    toast.success("Course updated");
    toggleCreating();
    router.refresh();
  };

  return (
    <div className="border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Chapters
        <Button onClick={toggleCreating} variant="ghost" size="sm">
          {isCreating ? (
            <>Cancel</>
          ) : (
            <>
              <PlusCircle />
              Add Chapters
            </>
          )}
        </Button>
      </div>
      {!isCreating && (
          {initialValues.description || "No chapters provided yet."}
          <ChapterList
          onEdit={()=>{}}
          onReorder={()=>{}}
        items={initialValues.chapter || []}
        />
        
      )}
      {isCreating && (
        <>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Chapter Title
                  </FieldLabel>

                  <Input
                    {...field}
                    disabled={isSubmitting}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="e.g. Complete MERN Stack Course"
                    autoComplete="off"
                  />

                  <FieldDescription>
                    Give a nice title to your course to help students
                    understand what they will learn.
                  </FieldDescription>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Button type="submit">Create</Button>
          </form>
        </>
      )}
    </div>
  );
}
