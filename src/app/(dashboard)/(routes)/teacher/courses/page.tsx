import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function TeacherPage() {
  return (
    <div className="p-4">
      <Link href="/teacher/create">
        <Button>New Course</Button>
      </Link>
    </div>
  );
}
