"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Course } from "@/generated/prisma/client";
import FileUpload from "@/components/file-upload";

// ✅ Schema
const schema = z.object({
  thumbnail: z.string().min(1, "Thumbnail is required"),
});

interface ThumbnailFormProps {
  initialValues: Course;
  courseId: string;
}

export default function ThumbnailForm({
  initialValues,
  courseId,
}: ThumbnailFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const toggleEdit = () => setIsEditing((prev) => !prev);

  // ✅ Form setup
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      thumbnail: initialValues?.thumbnail || "",
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, data);
      toast.success("Course updated successfully");
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
        Course Thumbnail
        <Button onClick={toggleEdit} variant="ghost" size="sm">
          {!isEditing && !initialValues.thumbnail && (
            <>
              <PlusCircle className="h-4 w-4 mr-1" />
              Add Thumbnail
            </>
          )}

          {isEditing && !initialValues.thumbnail && <>Cancel</>}

          {!isEditing && initialValues.thumbnail && (
            <>
              <Pencil className="h-4 w-4 mr-1" />
              Edit Thumbnail
            </>
          )}
        </Button>
      </div>

      {/* Preview Mode */}
      {!isEditing && (
        <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md mt-2">
          {initialValues.thumbnail ? (
            <Image
              src={initialValues.thumbnail}
              alt="Course Thumbnail"
              width={400}
              height={240}
              className="object-cover rounded-md"
            />
          ) : (
            <ImageIcon className="h-10 w-10 text-slate-500" />
          )}
        </div>
      )}

      {isEditing && (
        <div className="mt-4">
          <FileUpload
            endpoint="courseImage"
            onChange={(url?: string) => {
              if (url) {
                form.setValue("thumbnail", url);
                form.handleSubmit(onSubmit)();
              }
            }}
          />

          <p className="text-xs text-muted-foreground mt-2">
            Recommended size: 16:9 (e.g. 1280x720)
          </p>
        </div>
      )}
    </div>
  );
}
