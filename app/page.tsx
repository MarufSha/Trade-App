"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { applyQuerySort, ViewMode } from "@/lib/utils";
import {
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
  LayoutGrid,
  Plus,
  Search,
  Rows2,
  List,
} from "lucide-react";
import { useState } from "react";
import { DEMO_DATA, REAL_DATA } from "./assets/data/page";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { AccountSection } from "@/components/AccountViews";
import Link from "next/link";
const TradingAccounts = () => {
  const [tab, setTab] = useState<"Real" | "Demo">("Real");
  const [views, setViews] = useState<Record<"Real" | "Demo", ViewMode>>({
    Real: "grid",
    Demo: "grid",
  });
  const [query, setQuery] = useState("");
  const handleViewChange = (val: string) => {
    if (!val) return;
    setViews((prev) => ({ ...prev, [tab]: val as ViewMode }));
  };

  const [isDescending, setIsDescending] = useState(true);
  // const toggleSort = () => setIsDescending(!isDescending);

  const real = applyQuerySort(REAL_DATA, query, isDescending);
  const demo = applyQuerySort(DEMO_DATA, query, isDescending);

  return (
    <div className="">
      <Tabs
        value={tab}
        onValueChange={(v) => setTab(v as "Real" | "Demo")}
        className="w-full"
      >
        <div className="flex items-center justify-between mb-2">
          <div className=" flex items-center gap-3">
            <TabsList className="w-60">
              <TabsTrigger value="Real">Real</TabsTrigger>
              <TabsTrigger value="Demo">Demo</TabsTrigger>
            </TabsList>
            <Link href="create-new-account">
              <Button variant={"outline"} className="cursor-pointer">
                <Plus />
                Create new account
              </Button>
            </Link>
          </div>

          <div className="flex flex-row gap-4 items-center">
            <div className="relative w-[200px]">
              <Input
                type="text"
                placeholder="Search"
                className="pl-4 pr-3 py-2 text-sm rounded-md border border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Search className="absolute right-3 top-1/2 h-4 w-4 text-gray-400 -translate-y-1/2 cursor-pointer z-10" />
            </div>

            <Button
              variant={"outline"}
              onClick={() => setIsDescending((s) => !s)}
            >
              {isDescending ? (
                <>
                  Newest first
                  <ArrowDownNarrowWide size={16} />
                </>
              ) : (
                <>
                  Oldest first
                  <ArrowUpNarrowWide size={16} />
                </>
              )}
            </Button>
            <ToggleGroup
              type="single"
              value={views[tab]}
              onValueChange={handleViewChange}
              className="ml-1"
            >
              <ToggleGroupItem
                value="grid"
                aria-label="Grid view"
                className="px-2"
              >
                <LayoutGrid className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="list"
                aria-label="List view"
                className="px-2"
              >
                <Rows2 className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="compact"
                aria-label="Compact view"
                className="px-2"
              >
                <List className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <TabsContent value="Real" className="mt-2">
          <AccountSection
            data={real}
            view={views.Real}
            emptyLabel="No real accounts found."
          />
        </TabsContent>

        <TabsContent value="Demo" className="mt-2">
          <AccountSection
            data={demo}
            view={views.Demo}
            emptyLabel="No demo accounts found."
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default TradingAccounts;
