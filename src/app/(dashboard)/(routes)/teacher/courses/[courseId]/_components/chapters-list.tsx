// // "use client";

// // import { Chapter } from "@/generated/prisma/client";

// // interface ChaptersListProps {
// //   items: Chapter[];
// //   onReorder: (updateData: { id: string; position: number }[]) => void;
// //   onEdit: (id: string) => void;
// // }

// // export default function ChaptersList({
// //   items,
// //   onReorder,
// //   onEdit,
// // }: ChaptersListProps) {
// //   return <div>ChapterList</div>;
// // }

// "use client";

// import React, { useState } from "react";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
// } from "@hello-pangea/dnd";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// import { GripVertical, BookOpen, Save, Eye, EyeOff } from "lucide-react";

// type Chapter = {
//   id: string;
//   title: string;
//   isPublished: boolean;
// };

// const initialChapters: Chapter[] = [
//   {
//     id: "chapter-1",
//     title: "Introduction to Web Development",
//     isPublished: true,
//   },
//   {
//     id: "chapter-2",
//     title: "HTML Fundamentals",
//     isPublished: true,
//   },
//   {
//     id: "chapter-3",
//     title: "CSS Mastery",
//     isPublished: false,
//   },
//   {
//     id: "chapter-4",
//     title: "JavaScript Essentials",
//     isPublished: false,
//   },
// ];

// export default function ChaptersList() {
//   const [chapters, setChapters] = useState(initialChapters);

//   const onDragEnd = (result: DropResult) => {
//     if (!result.destination) return;

//     const items = Array.from(chapters);

//     const [reorderedItem] = items.splice(result.source.index, 1);

//     items.splice(result.destination.index, 0, reorderedItem);

//     setChapters(items);
//   };

//   const handleSaveOrder = async () => {
//     const orderedChapters = chapters.map((chapter, index) => ({
//       id: chapter.id,
//       position: index + 1,
//     }));

//     console.log("Send to backend:", orderedChapters);

//     /*
//     await fetch("/api/courses/reorder", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         chapters: orderedChapters,
//       }),
//     });
//     */
//   };

//   return (
//     <div className="max-w-5xl mx-auto py-10 px-4">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight">
//             Course Chapter Reorder
//           </h1>
//           <p className="text-muted-foreground mt-2">
//             Drag and drop chapters to structure your LMS course professionally.
//           </p>
//         </div>

//         <Button
//           onClick={handleSaveOrder}
//           className="rounded-2xl flex items-center gap-2"
//         >
//           <Save className="w-4 h-4" />
//           Save Order
//         </Button>
//       </div>

//       {/* Drag Context */}
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="chapters">
//           {(provided) => (
//             <div
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//               className="space-y-4"
//             >
//               {chapters.map((chapter, index) => (
//                 <Draggable
//                   key={chapter.id}
//                   draggableId={chapter.id}
//                   index={index}
//                 >
//                   {(provided, snapshot) => (
//                     <Card
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       className={`rounded-2xl border transition-all ${
//                         snapshot.isDragging
//                           ? "shadow-2xl ring-2 ring-primary"
//                           : "shadow-sm"
//                       }`}
//                     >
//                       <CardContent className="p-4 flex items-center justify-between">
//                         {/* Left Side */}
//                         <div className="flex items-center gap-4">
//                           {/* Drag Handle */}
//                           <div
//                             {...provided.dragHandleProps}
//                             className="cursor-grab active:cursor-grabbing text-muted-foreground"
//                           >
//                             <GripVertical className="w-5 h-5" />
//                           </div>

//                           {/* Chapter Icon */}
//                           <div className="p-2 rounded-xl bg-muted">
//                             <BookOpen className="w-4 h-4" />
//                           </div>

//                           {/* Chapter Info */}
//                           <div>
//                             <h3 className="font-medium text-sm">
//                               {index + 1}. {chapter.title}
//                             </h3>

//                             <p className="text-xs text-muted-foreground mt-1">
//                               {chapter.isPublished
//                                 ? "Published and visible to students"
//                                 : "Draft mode (hidden from students)"}
//                             </p>
//                           </div>
//                         </div>

//                         {/* Right Side */}
//                         <div className="flex items-center gap-3">
//                           <span
//                             className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 ${
//                               chapter.isPublished
//                                 ? "bg-green-100 text-green-700"
//                                 : "bg-yellow-100 text-yellow-700"
//                             }`}
//                           >
//                             {chapter.isPublished ? (
//                               <>
//                                 <Eye className="w-3 h-3" />
//                                 Live
//                               </>
//                             ) : (
//                               <>
//                                 <EyeOff className="w-3 h-3" />
//                                 Draft
//                               </>
//                             )}
//                           </span>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   )}
//                 </Draggable>
//               ))}

//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { GripVertical, BookOpen, Save, Eye, EyeOff } from "lucide-react";

/**
 * 🔥 Fix:
 * @hello-pangea/dnd often causes hydration mismatch in Next.js
 * So disable SSR for DnD components
 */
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

const initialChapters: Chapter[] = [
  {
    id: "chapter-1",
    title: "Introduction to Web Development",
    isPublished: true,
  },
  {
    id: "chapter-2",
    title: "HTML Fundamentals",
    isPublished: true,
  },
  {
    id: "chapter-3",
    title: "CSS Mastery",
    isPublished: false,
  },
  {
    id: "chapter-4",
    title: "JavaScript Essentials",
    isPublished: false,
  },
];

export default function ChaptersList() {
  /**
   * 🔥 Prevent hydration mismatch
   */
  const [isMounted, setIsMounted] = useState(false);

  const [chapters, setChapters] = useState<Chapter[]>(initialChapters);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(chapters);

    const [reorderedItem] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderedItem);

    setChapters(items);
  };

  const handleSaveOrder = async () => {
    const orderedChapters = chapters.map((chapter, index) => ({
      id: chapter.id,
      position: index + 1,
    }));

    console.log("Send to backend:", orderedChapters);

    /*
    await fetch("/api/courses/reorder", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chapters: orderedChapters,
      }),
    });
    */
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Course Chapter Reorder
          </h1>

          <p className="text-muted-foreground mt-2">
            Drag and drop chapters to structure your LMS course professionally.
          </p>
        </div>

        <Button
          onClick={handleSaveOrder}
          className="rounded-2xl flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          Save Order
        </Button>
      </div>

      {/* Drag Context */}
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
                >
                  {(provided, snapshot) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`rounded-2xl border transition-all ${
                        snapshot.isDragging
                          ? "shadow-2xl ring-2 ring-primary"
                          : "shadow-sm"
                      }`}
                    >
                      <CardContent className="p-4 flex items-center justify-between">
                        {/* Left Side */}
                        <div className="flex items-center gap-4">
                          {/* Drag Handle */}
                          <div
                            {...provided.dragHandleProps}
                            className="cursor-grab active:cursor-grabbing text-muted-foreground"
                          >
                            <GripVertical className="w-5 h-5" />
                          </div>

                          {/* Chapter Icon */}
                          <div className="p-2 rounded-xl bg-muted">
                            <BookOpen className="w-4 h-4" />
                          </div>

                          {/* Chapter Info */}
                          <div>
                            <h3 className="font-medium text-sm">
                              {index + 1}. {chapter.title}
                            </h3>

                            <p className="text-xs text-muted-foreground mt-1">
                              {chapter.isPublished
                                ? "Published and visible to students"
                                : "Draft mode (hidden from students)"}
                            </p>
                          </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-3">
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
