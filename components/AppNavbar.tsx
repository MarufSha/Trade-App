"use client";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AppNavbar = () => {
  const pathname = usePathname();
  const getTitle = () => {
    const segment = pathname.split("/").filter(Boolean).pop() || "dashboard";
    return segment
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <nav className="flex justify-between top-0 m-4 mb-0 border-b pb-2">
      <h1 className="font-semibold text-[20px]">{getTitle()}</h1>
      <div className="flex items-center gap-4 text-right">
        <div className="">
          <p className="font-semibold">Maruf Shahriar</p>
          <p className="text-xs text-right">Admin</p>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>User Picture</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};
export default AppNavbar;
