"use client";
import TradingHistoryCard from "@/components/TradingHistoryCard";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Calendar as CalendarIcon,
  ChevronDown,
  ChevronDownIcon,
  Search,
} from "lucide-react";
import { TradingHistoryData } from "../assets/data/page";
import { useMemo, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { type DateRange } from "react-day-picker";
import {
  filterByDateRange,
  sortByCreatedAt,
  formatRangeLabel,
} from "@/lib/utils";
const TradingHistory = () => {
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
 const dataView = useMemo(() => {
   const filtered = filterByDateRange(TradingHistoryData, dateRange);
   return sortByCreatedAt(filtered, "desc"); 
}, [dateRange]);
  // console.log("🚀 ~ TradingHistory ~ dateRange:", dateRange);
  return (
    <div className="flex flex-col px-4 gap-4 xl:pr-80">
      <div className="flex justify-between">
        <div className="flex items-center relative ">
          <Input type="text" placeholder="Search" className="rounded-2xl" />
          <Search className="absolute right-2 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex justify-evenly items-center space-x-2">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button className="" variant={"outline"}>
                <CalendarIcon /> {formatRangeLabel(dateRange)}{" "}
                <Label htmlFor="date">
                  <ChevronDownIcon />
                </Label>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="center"
            >
              <div className="rounded-lg border bg-popover text-popover-foreground shadow-md">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                  className="p-2"
                />
                <div className="flex justify-between gap-2 border-t p-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setDateRange(undefined)}
                  >
                    Clear
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setOpen(false)}
                    variant="outline"
                    className=""
                  >
                    OK
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex items-center justify-center gap-2"
              asChild
            >
              <Button className="" variant={"outline"}>
                Side Type <ChevronDown />{" "}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex items-center justify-center gap-2"
              asChild
            >
              <Button className="" variant={"outline"}>
                Status <ChevronDown />{" "}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {dataView.map((tx) => (
        <TradingHistoryCard key={tx.id} item={tx} />
      ))}
    </div>
  );
};
export default TradingHistory;
