import React from "react";
import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";

export default function Sidebar() {
  return (
    <div className="h-full w-full flex flex-col border-r">
      <div className="flex items-center p-4 gap-2">
        <div>
          <Logo />
        </div>
        <div>
          <span className="text-lg font-bold ">Edunex</span>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
}
