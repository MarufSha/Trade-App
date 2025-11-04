"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { PopoverContent } from "@/components/ui/popover";
import { CalendarIcon, ChevronDownIcon, FolderUp, Search } from "lucide-react";
import { useState } from "react";
import { type DateRange } from "react-day-picker";
import {
  Status,
  TradingHistoryDataTable,
  TransactionAccount,
  TransactionType,
} from "../assets/data/page";
import { DataTable } from "@/components/DataTable";
import { columns } from "../../components/Columns";

const TransactionHistory = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <div className="flex justify-between pb-10 ">
        <div className="relative w-[200px]">
          <Input
            type="text"
            placeholder="Search"
            className="pl-4 pr-3 py-2 text-sm rounded-md border border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Search className="absolute right-3 top-1/2 h-4 w-4 text-gray-400 -translate-y-1/2 cursor-pointer z-10" />
        </div>
        <div className="flex items-center gap-4">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button className="" variant={"outline"}>
                <CalendarIcon /> Date <ChevronDownIcon />
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
                  onSelect={(range) => {
                    setDateRange(range);
                  }}
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
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Transaction Type" />
              </SelectTrigger>
              <SelectContent>
                {TransactionType.map((txType) => (
                  <SelectItem key={txType} value={txType}>
                    {txType}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {Status.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Account" />
              </SelectTrigger>
              <SelectContent>
                {TransactionAccount.map((account) => (
                  <SelectItem key={account} value={account}>
                    {account}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button variant={"outline"}>
            <FolderUp /> Export
          </Button>
        </div>
      </div>
      <div className="container mx-auto py-2">
        <DataTable columns={columns} data={TradingHistoryDataTable} />
      </div>
    </div>
  );
};
export default TransactionHistory;
