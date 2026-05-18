"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import ConfirmModal from "./confirm-modal";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ChapterActionProps {
  disabled: boolean;
  chapterId: string;
  courseId: string;
  isPublished: boolean;
}

export default function ChapterAction({
  disabled,
  chapterId,
  courseId,
  isPublished,
}: ChapterActionProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const onPublishClick = async () => {
    try {
      setLoading(true);

      if (isPublished) {
        await axios.patch(
          `/api/courses/${courseId}/chapters/${chapterId}/unpublish`,
        );
        toast.success("Chapter unpublished");
      } else {
        await axios.patch(
          `/api/courses/${courseId}/chapters/${chapterId}/publish`,
        );
        toast.success("Chapter published");
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update chapter");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);

      await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}`);

      toast.success("Chapter deleted");

      router.refresh();
      router.push(`/teacher/courses/${courseId}`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete chapter");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        size="sm"
        onClick={onPublishClick}
        disabled={disabled || loading}
        variant="outline"
      >
        {isPublished ? "Unpublish" : "Publish"}
      </Button>

      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm" disabled={loading}>
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
}
