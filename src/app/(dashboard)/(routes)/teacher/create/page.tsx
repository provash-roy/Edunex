"use client";

import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

const schema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
});

export default function CreatePage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    const response = await axios.post("/api/courses", data);

    toast.success("Course created successfully!");

    router.push(`/teacher/courses/${response.data.id}`);
  };

  return (
    <div className="h-full p-4 md:p-24">
      <h1 className="text-2xl">Name your course</h1>

      <p className="text-sm text-slate-600 mb-4">
        What would you like to name your course? Don’t worry, you can always
        change it later.
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Course Title</FieldLabel>

              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="e.g. Complete MERN Stack Course"
                autoComplete="off"
              />

              <FieldDescription>
                Give your course a clear and descriptive name.
              </FieldDescription>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <div className="flex items-center  gap-x-2">
          <Link href="/teacher/courses">
            <Button type="button" variant="ghost">
              Cancel
            </Button>
          </Link>
          <Button
            size="sm"
            type="submit"
            disabled={!form.formState.isValid || form.formState.isSubmitting}
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}
