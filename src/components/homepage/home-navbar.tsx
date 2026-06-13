"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";
import { BarChart3, BookOpen, GraduationCap, Home, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { Show, UserButton } from "@clerk/nextjs";
import MobileSidebar from "../mobile-sidebar";

export default function HomeNavbar() {
  const path = usePathname();
  const isTeacherPage = path.startsWith("/teacher");
  const isPlayerPage = path.includes("/chapter");
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-neutral-200 dark:border-neutral-800 w-full">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-16">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 flex justify-center items-center">
              <GraduationCap className="size-5" />
            </div>

            <Link
              href="/"
              className="font-bold text-lg leading-7 tracking-tight text-neutral-950 dark:text-neutral-50"
            >
              Edunex
            </Link>
          </div>
        </div>

        <div>
          <MobileSidebar />
        </div>

        <div className=" md:flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 pb-1 text-sm leading-5 font-semibold border-b-2 border-neutral-950 dark:border-neutral-50 text-neutral-950 dark:text-neutral-50"
          >
            <Home className="size-4" />
            Home
          </Link>

          <Link
            href="/courses"
            className="flex items-center gap-2 pb-1 text-sm leading-5 font-medium border-b-2 border-transparent text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            <BookOpen className="size-4" />
            Courses
          </Link>

          <Link
            href="/courses"
            className="flex items-center gap-2 pb-1 text-sm leading-5 font-medium border-b-2 border-transparent text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            <BarChart3 className="size-4" />
            My Learning
          </Link>
        </div>

        <div className="md:flex items-center gap-3">
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
          </div>

          <ModeToggle />

          <Show when="signed-in">
            <UserButton />
          </Show>

          <Show when="signed-out">
            <Link href="/sign-in">
              <Button
                variant="ghost"
                className="h-9 px-4 text-sm font-medium text-neutral-950 dark:text-neutral-50"
              >
                Log in
              </Button>
            </Link>

            <Link href="/sign-up">
              <Button className="h-9 px-4 text-sm font-medium bg-neutral-900 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200">
                Sign up
              </Button>
            </Link>
          </Show>
        </div>
      </div>
    </header>
  );
}
