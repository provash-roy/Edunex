"use client";

import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
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

const schema = z.object({
  description: z.string().min(5, "Description must be at least 5 characters"),
});

interface DescriptionFormProps {
  initialValues: Course;
  courseId: string;
}

export default function DescriptionForm({
  initialValues,
  courseId,
}: DescriptionFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((prev) => !prev);
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      description: initialValues?.description || "",
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
        Course Description
        <Button onClick={toggleEdit} variant="ghost" size="sm">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil />
              Edit Description
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className="text-sm text-slate-600 mt-1">
          {initialValues.description || "No description provided yet."}
        </p>
      )}
      {isEditing && (
        <>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Course Description
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
                    Give a nice description to your course to help students
                    understand what they will learn.
                  </FieldDescription>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </>
      )}
    </div>
  );
}
