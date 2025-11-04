"use client";
import TradingHistoryCard from "@/components/TradingHistoryCard";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  filterByDateRange,
  formatRangeLabel,
  type SortKey,
  sortTradingData,
} from "@/lib/utils";
import {
  ArrowDownWideNarrow,
  ArrowUpNarrowWide,
  Calendar as CalendarIcon,
  ChevronDown,
  ChevronDownIcon,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";
import { type DateRange } from "react-day-picker";
import { TradingHistoryData } from "../assets/data/page";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TradingHistory = () => {
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(4);
  
  const dataView = useMemo(() => {
    const filtered = filterByDateRange(TradingHistoryData, dateRange);
    return sortTradingData(filtered, sortKey, order);
  }, [dateRange, sortKey, order]);

  const totalRows = dataView.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / pageSize));
  const clampedPage = Math.min(page, totalPages);
  const startIndex = (clampedPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalRows);
  const pageRows = dataView.slice(startIndex, endIndex);

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
                <ChevronDownIcon />
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
                    setPage(1);
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

          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex items-center justify-center gap-2"
              asChild
            >
              <Button className="" variant={"outline"}>
                Sort By <ChevronDown />{" "}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setSortKey("date")}>
                Date
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSortKey("profits");
                  setPage(1);
                }}
              >
                Profits
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSortKey("swaps");
                  setPage(1);
                }}
              >
                Swaps
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSortKey("id");
                  setPage(1);
                }}
              >
                Trade ID
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSortKey("quantity");
                  setPage(1);
                }}
              >
                Quantity
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSortKey("open_price");
                  setPage(1);
                }}
              >
                Open Price
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSortKey("current_price");
                  setPage(1);
                }}
              >
                Current Price
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant={"outline"}
            onClick={() => {
              setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
              setPage(1);
            }}
          >
            {order === "asc" ? (
              <>
                Ascending Order
                <ArrowUpNarrowWide />
              </>
            ) : (
              <>
                Descending Order <ArrowDownWideNarrow />
              </>
            )}
          </Button>
        </div>
      </div>

      {pageRows.map((tx) => {
        return <TradingHistoryCard key={tx.id} item={tx} />;
      })}
      <div className="flex items-center justify-between py-2">
        <div className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-medium">
            {totalRows === 0 ? 0 : startIndex + 1}
          </span>
          {"–"}
          <span className="font-medium">{endIndex}</span> of{" "}
          <span className="font-medium">{totalRows}</span>
        </div>

        <Pagination>
          <PaginationContent className="cursor-pointer">
            <PaginationItem>
              <PaginationPrevious
                aria-disabled={clampedPage <= 1}
                className={
                  clampedPage <= 1 ? "pointer-events-none opacity-50" : ""
                }
                onClick={() => clampedPage > 1 && setPage(clampedPage - 1)}
              />
            </PaginationItem>

            {clampedPage > 2 && (
              <>
                <PaginationItem>
                  <PaginationLink onClick={() => setPage(1)}>1</PaginationLink>
                </PaginationItem>
                {clampedPage > 3 && <PaginationEllipsis />}
              </>
            )}

            {clampedPage > 1 && (
              <PaginationItem>
                <PaginationLink onClick={() => setPage(clampedPage - 1)}>
                  {clampedPage - 1}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationLink isActive>{clampedPage}</PaginationLink>
            </PaginationItem>

            {clampedPage < totalPages && (
              <PaginationItem>
                <PaginationLink onClick={() => setPage(clampedPage + 1)}>
                  {clampedPage + 1}
                </PaginationLink>
              </PaginationItem>
            )}

            {clampedPage < totalPages - 1 && (
              <>
                {clampedPage < totalPages - 2 && <PaginationEllipsis />}
                <PaginationItem>
                  <PaginationLink onClick={() => setPage(totalPages)}>
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              <PaginationNext
                aria-disabled={clampedPage >= totalPages}
                className={
                  clampedPage >= totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
                onClick={() =>
                  clampedPage < totalPages && setPage(clampedPage + 1)
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <div className="flex items-center gap-12">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            Rows per page
          </span>
          <Select
            value={String(pageSize)}
            onValueChange={(v) => {
              setPageSize(Number(v));
              setPage(1);
            }}
          >
            <SelectTrigger className="h-8 w-[90px]">
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="16">16</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
export default TradingHistory;
