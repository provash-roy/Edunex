"use client";

import { ImageIcon, Pencil, PlusCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Course } from "@/generated/prisma/client";
import FileUpload from "@/components/file-upload";

interface ThumbnailFormProps {
  initialValues: Course;
  courseId: string;
}

export default function ThumbnailForm({
  initialValues,
  courseId,
}: ThumbnailFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [thumbnail, setThumbnail] = useState(initialValues?.thumbnail || "");

  const router = useRouter();

  const toggleEdit = () => {
    if (!isLoading) {
      setIsEditing((prev) => !prev);
    }
  };

  // Auto update immediately after upload
  const handleThumbnailChange = async (url?: string) => {
    if (!url) return;

    try {
      setIsLoading(true);

      // UI preview instantly
      setThumbnail(url);

      // DB update instantly
      await axios.patch(`/api/courses/${courseId}`, {
        thumbnail: url,
      });

      toast.success("Thumbnail updated successfully");

      // Exit edit mode automatically
      setIsEditing(false);

      router.refresh();
    } catch (error) {
      console.error(error);

      // rollback optional
      setThumbnail(initialValues?.thumbnail || "");

      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Thumbnail
        <Button
          onClick={toggleEdit}
          variant="ghost"
          size="sm"
          disabled={isLoading}
        >
          {!isEditing && !thumbnail && (
            <>
              <PlusCircle className="h-4 w-4 mr-1" />
              Add Thumbnail
            </>
          )}

          {!isEditing && thumbnail && (
            <>
              <Pencil className="h-4 w-4 mr-1" />
              Edit Thumbnail
            </>
          )}

          {isEditing && <>Cancel</>}
        </Button>
      </div>

      {/* VIEW MODE */}
      {!isEditing && (
        <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md mt-2 overflow-hidden">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt="Course Thumbnail"
              width={400}
              height={240}
              className="object-cover w-full h-full"
            />
          ) : (
            <ImageIcon className="h-10 w-10 text-slate-500" />
          )}
        </div>
      )}

      {/* EDIT MODE */}
      {isEditing && (
        <div className="mt-4 space-y-4">
          {isLoading ? (
            <div className="flex items-center justify-center p-6">
              <Loader2 className="h-6 w-6 animate-spin text-slate-500" />
            </div>
          ) : (
            <FileUpload
              endpoint="courseImage"
              onChange={handleThumbnailChange}
            />
          )}

          <div className="text-xs text-muted-foreground">
            Recommended size: 16:9 (e.g. 1280x720)
          </div>
        </div>
      )}
    </div>
  );
}
