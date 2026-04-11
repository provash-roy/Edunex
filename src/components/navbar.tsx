import { Show, UserButton } from "@clerk/nextjs";
import React from "react";
import MobileSidebar from "./mobile-sidebar";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <MobileSidebar />
      </div>
      <div>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </div>
  );
}
