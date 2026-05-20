"use client";

import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Course } from "@/lib/prisma";

import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from "@/components/ui/combobox";

const schema = z.object({
  categoryId: z.string().min(1, "Category is required"),
});

interface CategoryFormProps {
  initialValues: Course & {
    category?: {
      id: string;
      name: string;
    } | null;
  };

  courseId: string;

  category: {
    id: string;
    name: string;
  }[];
}

export default function CategoryForm({
  initialValues,
  courseId,
  category,
}: CategoryFormProps) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((prev) => !prev);

  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),

    defaultValues: {
      categoryId: initialValues.categoryId || "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, data);

      toast.success("Course updated");

      toggleEdit();

      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  const selectedCategory = category.find(
    (cat) => cat.id === initialValues.categoryId,
  );

  return (
    <div className="border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course category
        <Button onClick={toggleEdit} variant="ghost" size="sm">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit category
            </>
          )}
        </Button>
      </div>

      {!isEditing && (
        <p className="text-sm text-slate-600 mt-2">
          {selectedCategory?.name || "No category set"}
        </p>
      )}

      {isEditing && (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <Controller
            name="categoryId"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Combobox
                  items={category}
                  value={field.value}
                  onValueChange={field.onChange}
                  itemToString={(item) => item?.name || ""}
                >
                  <ComboboxInput
                    placeholder="Select category"
                    disabled={isSubmitting}
                  />

                  <ComboboxContent>
                    <ComboboxEmpty>No category found.</ComboboxEmpty>

                    <ComboboxList>
                      {(item: { id: string; name: string }) => (
                        <ComboboxItem key={item.id} value={item.id}>
                          {item.name}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>

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
      )}
    </div>
  );
}
