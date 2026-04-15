"use client";

import { Show, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

import MobileSidebar from "./mobile-sidebar";
import Link from "next/link";

export default function Navbar() {
  const path = usePathname();
  const isTeacherPage = path.startsWith("/teacher");
  const isPlayerPage = path.includes("/chapter");

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <MobileSidebar />
      </div>

      <div className="flex gap-2">
        {isTeacherPage || isPlayerPage ? (
          <Link href="/dashboard">
            <Button variant="ghost">
              <LogOut className="h-4 w-4" />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href="/teacher/courses">
            <Button className="font-bold" variant="ghost">
              Teacher Mode
            </Button>
          </Link>
        )}

        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </div>
  );
}
