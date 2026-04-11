"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: React.ComponentType;
}

export default function SidebarItem({
  label,
  href,
  icon: Icon,
}: SidebarItemProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className="flex h-full items-center gap-2 p-2 hover:bg-sky-100 cursor-pointer"
    >
      <Icon />
      <span>{label}</span>
      {/* <div className="ml-auto h-full border-2 border-sky-700" /> */}
    </button>
  );
}
