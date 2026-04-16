import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import React from "react";

interface TitleFormProps {
  initialValues: {
    title: string;
  };
  courseId: string;
}

export default function TitleForm({ initialValues, courseId }: TitleFormProps) {
  return (
    <div className="border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Title
        <Button variant="ghost" size="sm">
          <Pencil/>
          Edit Title
        </Button>
      </div>
    </div>
  );
}
