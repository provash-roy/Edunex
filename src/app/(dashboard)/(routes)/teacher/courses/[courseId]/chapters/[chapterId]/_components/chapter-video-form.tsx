"use client";

import { Pencil, PlusCircle, Loader2, VideoIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Chapter, MuxData } from "@/generated/prisma/client";
import FileUpload from "@/components/file-upload";

interface ChapterVideoFormProps {
  initialValues: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
}

export default function ChapterVideoForm({
  initialValues,
  courseId,
  chapterId,
}: ChapterVideoFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const hasVideo = !!initialValues.videoUrl;

  const toggleEdit = () => {
    if (!isLoading) {
      setIsEditing((prev) => !prev);
    }
  };

  const handleVideoUpload = async (url?: string) => {
    if (!url) return;

    try {
      setIsLoading(true);

      await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, {
        videoUrl: url,
      });

      toast.success("Video updated");
      setIsEditing(false);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border bg-slate-100 rounded-md p-4">
      {/* Header */}
      <div className="font-medium flex items-center justify-between">
        Chapter Video
        <Button
          onClick={toggleEdit}
          variant="ghost"
          size="sm"
          disabled={isLoading}
        >
          {!isEditing && !hasVideo && (
            <>
              <PlusCircle className="h-4 w-4 mr-1" />
              Add a video
            </>
          )}

          {!isEditing && hasVideo && (
            <>
              <Pencil className="h-4 w-4 mr-1" />
              Edit video
            </>
          )}

          {isEditing && "Cancel"}
        </Button>
      </div>

      {/* VIEW MODE */}
      {!isEditing && (
        <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md mt-2">
          {hasVideo ? (
            <video
              src={initialValues.videoUrl!}
              controls
              className="w-full h-full rounded-md"
            />
          ) : (
            <VideoIcon className="h-10 w-10 text-slate-500" />
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
            <FileUpload endpoint="chapterVideo" onChange={handleVideoUpload} />
          )}

          <div className="text-xs text-muted-foreground">
            Upload a video for this chapter
          </div>
        </div>
      )}
    </div>
  );
}
