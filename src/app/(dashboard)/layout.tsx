import React from "react";
import Sidebar from "./_components/sidebar";
import Navbar from "@/components/navbar";

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

      <main className="h-full flex-1">
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
      </main>
    </div>
  );
}
