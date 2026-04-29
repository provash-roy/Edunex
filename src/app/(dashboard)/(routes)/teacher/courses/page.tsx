import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function TeacherPage() {
  return (
    <div className="p-4">
      <Link href="/teacher/create">
        <Button className="rounded">New Course</Button>
      </Link>
    </div>
  );
}
