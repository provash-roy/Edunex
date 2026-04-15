"use client";

import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
});

export default function CreatePage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
    },
  });
  return (
    <div className="h-full p-4">
      <h1 className="text-2xl ">Name your course</h1>
      <p className="text-sm text-slate-600">
        What would you like to name your course? Don`&apos;`t worry, you can
        always change it later.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(console.log)} className="space-y-4">
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Bug Title</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Login button not working on mobile"
                  autoComplete="off"
                />
                <FieldDescription>
                  Provide a concise title for your bug report.
                </FieldDescription>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
