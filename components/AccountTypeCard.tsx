"use client";
import { AccountTypeData } from "@/app/assets/data/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, BadgeCheckIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const AccountTypeCard = () => {
  const [active, setActive] = useState("1");
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full px-4 pb-4 mt-6 overflow-x-hidden">
      {expanded ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-112 overflow-y-auto pr-1">
          {AccountTypeData.map((card) => (
            <Card
              key={card.id}
              onClick={() => setActive(card.id)}
              className={cn(
                "cursor-pointer transition-all duration-300 border rounded-xl w-full",
                active === card.id
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "hover:border-blue-300"
              )}
            >
              <CardHeader>
                <CardTitle className="font-bold text-2xl">
                  {card.type}
                </CardTitle>
                <CardDescription>
                  <Badge
                    variant="secondary"
                    className={cn(
                      card.status === "Recommended" &&
                        "bg-blue-500 text-white dark:bg-blue-600",
                      card.status === "Instant" &&
                        "bg-green-500 text-white dark:bg-red-600",
                      card.status !== "Recommended" &&
                        card.status !== "Instant" &&
                        "bg-muted-foreground text-white dark:bg-yellow-600"
                    )}
                  >
                    {card.status === "Recommended" && (
                      <BadgeCheckIcon className="mr-1 h-4 w-4" />
                    )}
                    {card.status}
                  </Badge>
                </CardDescription>
                <CardDescription className="text-md border-b pb-6">
                  {card.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex justify-between font-medium">
                <p>Minimal Deposit</p>
                <p>
                  {card.minimumDeposit} {card.currency}
                </p>
              </CardContent>
              <CardContent className="flex justify-between font-medium">
                <p>Spread</p>
                <p>From {card.spread}</p>
              </CardContent>
              <CardContent className="flex justify-between font-medium">
                <p>Commission</p>
                <p>{card.commission}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <ScrollArea className="w-full card-row-scroll mb-4" type="always">
          <div className="py-4">
            <div className="flex gap-6 snap-x snap-mandatory min-w-0 w-full">
              {AccountTypeData.map((card) => (
                <Card
                  key={card.id}
                  onClick={() => setActive(card.id)}
                  className={cn(
                    "cursor-pointer transition-all duration-300 border rounded-xl shrink-0 w-80 snap-start",
                    active === card.id
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "hover:border-blue-300"
                  )}
                >
                  <CardHeader>
                    <CardTitle className="font-bold text-2xl">
                      {card.type}
                    </CardTitle>
                    <CardDescription>
                      <Badge
                        variant="secondary"
                        className={cn(
                          card.status === "Recommended" &&
                            "bg-blue-500 text-white dark:bg-blue-600",
                          card.status === "Instant" &&
                            "bg-green-500 text-white dark:bg-red-600",
                          card.status !== "Recommended" &&
                            card.status !== "Instant" &&
                            "bg-muted-foreground text-white dark:bg-yellow-600"
                        )}
                      >
                        {card.status === "Recommended" && (
                          <BadgeCheckIcon className="mr-1 h-4 w-4" />
                        )}
                        {card.status}
                      </Badge>
                    </CardDescription>
                    <CardDescription className="text-md border-b pb-6">
                      {card.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex justify-between font-medium">
                    <p>Minimal Deposit</p>
                    <p>
                      {card.minimumDeposit} {card.currency}
                    </p>
                  </CardContent>
                  <CardContent className="flex justify-between font-medium">
                    <p>Spread</p>
                    <p>From {card.spread}</p>
                  </CardContent>
                  <CardContent className="flex justify-between font-medium">
                    <p>Commission</p>
                    <p>{card.commission}</p>
                  </CardContent>
                </Card>
              ))}
              <div className="shrink-0 w-4" />
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}

      <div className="flex items-center gap-2 px-2 mt-5 min-w-0">
        <Link href="/create-new-account/create-account-form">
          <Button className="bg-blue-500 text-white dark:bg-blue-600">
            Continue <ChevronRight />
          </Button>
        </Link>

        <Button
          variant="outline"
          className="ml-auto bg-accent cursor-pointer"
          onClick={() => setExpanded((s) => !s)}
        >
          {expanded ? (
            <>
              <ArrowUp className="mr-1 h-4 w-4" /> Show less
            </>
          ) : (
            <>
              <ArrowDown className="mr-1 h-4 w-4" /> Show More
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default AccountTypeCard;
