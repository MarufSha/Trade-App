"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn, items } from "@/lib/utils";
import { usePathname } from "next/navigation";
const AppSideBar = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center pt-8 border-b pb-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>Meta Dream User</AvatarFallback>
        </Avatar>
        <h1 className="text-[24px] font-bold">Meta Dream</h1>
      </SidebarHeader>
      <SidebarContent className="p-4 font-semibold">
        <SidebarMenu className="border-b pb-3">
          {items.map((item) => {
            const isActive =
              pathname === item.url || pathname.startsWith(item.url + "/");
            return (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 transition-colors",
                    isActive
                      ? "bg-blue-100 text-blue-700 hover:bg-blue-100 hover:text-blue-700"
                      : "hover:bg-muted"
                  )}
                >
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
};
export default AppSideBar;
