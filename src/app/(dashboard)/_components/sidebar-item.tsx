"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number }>;
}

export default function SidebarItem({
  label,
  href,
  icon: Icon,
}: SidebarItemProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") || pathname.startsWith(href);

  const handleClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex w-full items-center gap-x-2 pl-6 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-700 transition-all",
        isActive && "bg-sky-100 text-sky-700",
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon size={20} />
        <span>{label}</span>
      </div>

      <div
        className={cn(
          "ml-auto opacity-0 transition-all",
          isActive && "opacity-100 h-full border-r-2 border-sky-700",
        )}
      />
    </button>
  );
}
