"use client";

import { PlusCircle, Loader2, File, Trash2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import FileUpload from "@/components/file-upload";

import { Attachment, Course } from "@/generated/prisma/client";

interface AttachmentFormProps {
  initialValues: Course & {
    attachments: Attachment[];
  };
  courseId: string;
}

export default function AttachmentForm({
  initialValues,
  courseId,
}: AttachmentFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // Toggle edit mode
  const toggleEdit = () => {
    if (!isLoading) {
      setIsEditing((prev) => !prev);
    }
  };

  // Add new attachment
  const handleAttachmentAdd = async (url?: string) => {
    if (!url) return;

    try {
      setIsLoading(true);

      await axios.post(`/api/courses/${courseId}/attachments`, {
        url,
        name: url.split("/").pop() || "Attachment",
      });

      toast.success("Attachment added successfully");

      setIsEditing(false);

      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add attachment");
    } finally {
      setIsLoading(false);
    }
  };

  // Delete attachment
  const handleAttachmentDelete = async (attachmentId: string) => {
    try {
      setIsLoading(true);

      await axios.delete(
        `/api/courses/${courseId}/attachments/${attachmentId}`,
      );

      toast.success("Attachment deleted successfully");

      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete attachment");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border bg-slate-100 rounded-md p-4">
      {/* Header */}
      <div className="font-medium flex items-center justify-between">
        Course Attachments
        <Button
          onClick={toggleEdit}
          variant="ghost"
          size="sm"
          disabled={isLoading}
        >
          {!isEditing ? (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add an attachment
            </>
          ) : (
            "Cancel"
          )}
        </Button>
      </div>

      {/* No Attachments */}
      {!isEditing && initialValues.attachments.length === 0 && (
        <p className="text-sm text-slate-500 mt-2">No attachments added yet</p>
      )}

      {/* Attachment List */}
      {!isEditing && initialValues.attachments.length > 0 && (
        <div className="space-y-2 mt-4">
          {initialValues.attachments.map((attachment) => (
            <div
              key={attachment.id}
              className="flex items-center justify-between p-3 bg-white border rounded-md"
            >
              <div className="flex items-center gap-x-2 overflow-hidden">
                <File className="h-4 w-4 shrink-0 text-slate-500" />

                <p className="text-sm truncate">{attachment.name}</p>
              </div>

              <Button
                onClick={() => handleAttachmentDelete(attachment.id)}
                variant="ghost"
                size="sm"
                disabled={isLoading}
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Edit Mode */}
      {isEditing && (
        <div className="mt-4">
          {isLoading ? (
            <div className="flex items-center justify-center p-6">
              <Loader2 className="h-6 w-6 animate-spin text-slate-500" />
            </div>
          ) : (
            <FileUpload
              endpoint="courseAttachment"
              onChange={handleAttachmentAdd}
            />
          )}

          <p className="text-xs text-muted-foreground mt-4">
            Add attachments for your course. These can be PDFs, images, ZIPs,
            notes, or any study resources for students.
          </p>
        </div>
      )}
    </div>
  );
}
