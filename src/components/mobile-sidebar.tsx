import Sidebar from "@/app/(dashboard)/(routes)/dashboard/_components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
