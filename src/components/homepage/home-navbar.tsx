import { Button } from "../ui/button";
import {
  BarChart3,
  BookOpen,
  GraduationCap,
  Home,
  MessageSquare,
  User,
} from "lucide-react";

export default function HomeNavbar() {
  return (
    <header className="sticky z-50 backdrop-blur bg-white/95 border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0 w-full">
      <div className="max-w-[1140px] flex mx-auto px-8 justify-between items-center h-16">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-neutral-900 text-neutral-50 flex justify-center items-center">
              <GraduationCap className="size-5" />
            </div>
            <span className="font-bold text-neutral-950 text-lg leading-7 tracking-tight">
              Edunex
            </span>
          </div>
          <nav className="hidden items-center gap-6">
            <a
              className="font-semibold text-neutral-950 text-sm leading-5 border-neutral-950 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2"
              href="#"
            >
              <Home className="size-4" />
              Home
            </a>
            <a
              className="border-transparent font-medium text-neutral-500 text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2"
              href="#"
            >
              <BookOpen className="size-4" />
              Courses
            </a>
            <a
              className="border-transparent font-medium text-neutral-500 text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2"
              href="#"
            >
              <BarChart3 className="size-4" />
              My Learning
            </a>
            <a
              className="border-transparent font-medium text-neutral-500 text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2"
              href="#"
            >
              <MessageSquare className="size-4" />
              Messages
            </a>
            <a
              className="border-transparent font-medium text-neutral-500 text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2"
              href="#"
            >
              <User className="size-4" />
              Account
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button
            className="font-medium text-neutral-950 text-sm leading-5 px-4 h-9"
            variant="ghost"
          >
            Log in
          </Button>
          <Button className="font-medium bg-neutral-900 text-neutral-50 text-sm leading-5 px-4 h-9">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
