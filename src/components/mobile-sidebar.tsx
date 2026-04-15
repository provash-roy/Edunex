import Sidebar from "@/app/(dashboard)/_components/sidebar";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle className="text-lg font-bold mb-4">Edunex</SheetTitle>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
