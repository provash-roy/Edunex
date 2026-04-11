import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex ">
      <div className="h-full hidden md:flex md:w-56">Sidbar</div>
      <main className="h-full pl-56">{children}</main>
    </div>
  );
}
