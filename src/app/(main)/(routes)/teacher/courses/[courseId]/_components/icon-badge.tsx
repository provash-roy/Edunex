import { Badge } from "@/components/ui/badge";
import React from "react";

export default function IconBadge({
  children: icon,
}: {
  children: React.ReactNode;
}) {
  return (
    <Badge className=" rounded-full bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
      {icon}
    </Badge>
  );
}
