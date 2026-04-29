"use client";

import { usePathname } from "next/navigation";
import { BarChart, Compass, Layout, List } from "lucide-react";

import SidebarItem from "./sidebar-item";


const guestRoutes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Layout,
  },
  {
    label: "Browse",
    href: "/search",
    icon: Compass,
  },
];

const teacherRoutes = [
  {
    label: "My Courses",
    href: "/teacher/courses",
    icon: List,
  },
  {
    label: "Analytics",
    href: "/teacher/analytics",
    icon: BarChart,
  },
];

export default function SidebarRoutes() {
  const path = usePathname();
  const inTeacherPage = path.startsWith("/teacher");
  const routes = inTeacherPage ? teacherRoutes : guestRoutes;
  
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          label={route.label}
          href={route.href}
          icon={route.icon}
        />
      ))}
    </div>
  );
}
