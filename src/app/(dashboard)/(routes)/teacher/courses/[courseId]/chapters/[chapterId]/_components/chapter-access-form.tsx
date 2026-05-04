"use client";

import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Checkbox } from "@/components/ui/checkbox";

const schema = z.object({
  isFree: z.boolean().default(false),
});

interface AccessFormProps {
  initialValues: {
    isFree: boolean;
  };
  courseId: string;
  chapterId: string;
}

export default function ChapterAccessForm({
  initialValues,
  courseId,
  chapterId,
}: AccessFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((prev) => !prev);

  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      isFree: !!initialValues.isFree,
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, data);

      toast.success("Chapter updated");
      toggleEdit();
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Chapter Access
        <Button onClick={toggleEdit} variant="ghost" size="sm">
          {isEditing ? (
            "Cancel"
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-1" />
              Edit Access
            </>
          )}
        </Button>
      </div>

      {!isEditing && (
        <p className="text-sm text-slate-600 mt-1">
          {initialValues.isFree
            ? "This chapter is free"
            : "This chapter is paid"}
        </p>
      )}

      {isEditing && (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3">
          <Controller
            name="isFree"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={field.name}
                    checked={field.value}
                    onCheckedChange={(value) => field.onChange(!!value)}
                  />
                  <FieldLabel htmlFor={field.name}>
                    Make this chapter free
                  </FieldLabel>
                </div>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Button type="submit" size="sm" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </form>
      )}
    </div>
  );
}
