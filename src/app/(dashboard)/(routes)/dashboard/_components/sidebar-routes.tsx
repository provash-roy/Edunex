"use client";

import { Compass, Layout, Search } from "lucide-react";

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
    icon: Compass,
  },
  {
    label: "Browse",
    href: "/seaarch",
    icon: Search,
  },
  {
    label: "Browse",
    href: "/seabrch",
    icon: Search,
  },
  {
    label: "Browse",
    href: "/searvch",
    icon: Search,
  },
  {
    label: "Browse",
    href: "/searcch",
    icon: Search,
  },
  {
    label: "Browse",
    href: "/searchx",
    icon: Search,
  },
  {
    label: "Browse",
    href: "/searhjkchz",
    icon: Search,
  },
  {
    label: "Browse",
    href: "/searchz",
    icon: Search,
  },
  {
    label: "Browse",
    href: "/seeryfarch",
    icon: Search,
  },
  {
    label: "Browse",
    href: "/sedhrarch",
    icon: Search,
  },
  {
    label: "Browse",
    href: "/sedfarch",
    icon: Search,
  },
  {
    label: "Browse",
    href: "/sesdarch",
    icon: Search,
  },
  {
    label: "Browse",
    href: "/searcgh",
    icon: Search,
  },
  {
    label: "Browse",
    href: "/searhchz",
    icon: Search,
  },
  {
    label: "Browse",
    href: "/searchf",
    icon: Search,
  },
  {
    label: "Browse",
    href: "/searchfd",
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
