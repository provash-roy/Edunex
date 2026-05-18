"use client";

import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Field, FieldError } from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Course } from "@/generated/prisma/browser";

const schema = z.object({
  category: z.string().min(5, "category must be at least 5 characters"),
});

interface CategoryFormProps {
  initialValues: Course;
  courseId: string;
}

export default function CategoryForm({
  initialValues,
  courseId,
}: CategoryFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((prev) => !prev);
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      category: initialValues.category || "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: z.infer<typeof schema>) => {
    await axios.patch(`/api/courses/${courseId}`, data);
    toast.success("Course updated");
    toggleEdit();
    router.refresh();
  };

  return (
    <div className="border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course category
        <Button onClick={toggleEdit} variant="ghost" size="sm">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil />
              Edit category
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className="text-sm text-slate-600 mt-1">{initialValues.category || "No Category set"}</p>
      )}
      {isEditing && (
        <>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <Controller
              name="category"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    disabled={isSubmitting}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="e.g. Complete MERN Stack Course"
                    autoComplete="off"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Button type="submit" size="sm" disabled={isSubmitting}>
              Save
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
