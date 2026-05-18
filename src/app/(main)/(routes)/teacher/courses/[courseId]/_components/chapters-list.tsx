"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, Grip, Pencil } from "lucide-react";

// Dynamic Imports (Fix hydration issues)
const DragDropContext = dynamic(
  async () => (await import("@hello-pangea/dnd")).DragDropContext,
  { ssr: false },
);

const Droppable = dynamic(
  async () => (await import("@hello-pangea/dnd")).Droppable,
  { ssr: false },
);

const Draggable = dynamic(
  async () => (await import("@hello-pangea/dnd")).Draggable,
  { ssr: false },
);

import type { DropResult } from "@hello-pangea/dnd";

type Chapter = {
  id: string;
  title: string;
  isPublished: boolean;
};

interface ChaptersListProps {
  items: Chapter[];
  onReorder: (updateData: { id: string; position: number }[]) => Promise<void>;
  onEdit: (id: string) => void;
}

export default function ChaptersList({
  items,
  onReorder,
  onEdit,
}: ChaptersListProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [chapters, setChapters] = useState<Chapter[]>(items);
  const [isReordering, setIsReordering] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Sync props changes
  useEffect(() => {
    setChapters(items);
  }, [items]);

  if (!isMounted) {
    return null;
  }

  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    // Same position হলে unnecessary API call avoid
    if (result.source.index === result.destination.index) return;

    const originalChapters = [...chapters];

    // Reorder locally
    const reordered = Array.from(chapters);

    const [movedItem] = reordered.splice(result.source.index, 1);

    reordered.splice(result.destination.index, 0, movedItem);

    // Instant UI update
    setChapters(reordered);

    try {
      setIsReordering(true);

      // Backend payload
      const bulkUpdateData = reordered.map((chapter, index) => ({
        id: chapter.id,
        position: index,
      }));

      // Parent API call
      await onReorder(bulkUpdateData);
    } catch (error) {
      console.error("Reorder failed:", error);

      // Rollback if API fails
      setChapters(originalChapters);
    } finally {
      setIsReordering(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-4 px-4">
      {/* Optional Loader */}
      {isReordering && (
        <p className="text-sm text-muted-foreground mb-4">
          Saving chapter order...
        </p>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="chapters">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {chapters.map((chapter, index) => (
                <Draggable
                  key={chapter.id}
                  draggableId={chapter.id}
                  index={index}
                  isDragDisabled={isReordering}
                >
                  {(provided, snapshot) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`rounded-xl border bg-slate-50 transition-all ${
                        snapshot.isDragging
                          ? "shadow-2xl ring-2 ring-primary"
                          : "shadow-sm"
                      } ${
                        isReordering ? "opacity-70 pointer-events-none" : ""
                      }`}
                    >
                      <CardContent className="flex items-center justify-between py-4">
                        {/* Left Side */}
                        <div className="flex items-center gap-3">
                          {/* Drag Handle */}
                          <div
                            {...provided.dragHandleProps}
                            className={`text-muted-foreground ${
                              isReordering
                                ? "cursor-not-allowed"
                                : "cursor-grab active:cursor-grabbing hover:text-primary"
                            }`}
                          >
                            <Grip className="w-5 h-5" />
                          </div>

                          {/* Chapter Info */}
                          <div>
                            <h3 className="font-medium text-sm">
                              {index + 1}. {chapter.title}
                            </h3>
                          </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-3">
                          {/* Publish Status */}
                          <span
                            className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 ${
                              chapter.isPublished
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {chapter.isPublished ? (
                              <>
                                <Eye className="w-3 h-3" />
                                Live
                              </>
                            ) : (
                              <>
                                <EyeOff className="w-3 h-3" />
                                Draft
                              </>
                            )}
                          </span>

                          {/* Edit Button */}
                          <Pencil
                            onClick={() => !isReordering && onEdit(chapter.id)}
                            size={16}
                            className={`transition ${
                              isReordering
                                ? "cursor-not-allowed opacity-50"
                                : "cursor-pointer hover:text-primary"
                            }`}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
