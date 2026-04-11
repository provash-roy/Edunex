"use client";

import { Layout, Search } from "lucide-react";

import SidebarItem from "./sidebar-item";

const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Layout,
  },
  {
    label: "Browse",
    href: "/search",
    icon: Search,
  },
];

export default function SidebarRoutes() {
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
