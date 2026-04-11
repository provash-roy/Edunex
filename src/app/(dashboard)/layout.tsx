import React from "react";
import Sidebar from "./(routes)/dashboard/_components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex ">
      <div className="h-full hidden md:flex md:w-56">
        <Sidebar />
      </div>
      <main className="h-full flex-1">{children}</main>
    </div>
  );
}
