'use client';
import { AccountTypeData } from "@/app/assets/data/data";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";

const AccountPreviewCard = () => {
  const params = useSearchParams();
  const id = params.get("id") ?? "";
  const acc = AccountTypeData.find((a) => a.id === id);
  if (!acc) {
    return (
      <Card className="mt-6">
        <CardHeader className="flex items-center justify-center font-semibold">
          <p>No matching account found for id {id}</p>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card
      className={
        "lg:col-span-1 h-96 w-96 mt-6 border rounded-xl border-blue-500 bg-blue-50 dark:bg-blue-900/20"
      }
    >
      <CardHeader>
        <CardTitle className="font-bold text-2xl">{acc.type}</CardTitle>

        <CardDescription>
          <Badge
            variant="secondary"
            className={cn(
              acc.status === "Recommended" &&
                "bg-blue-500 text-white dark:bg-blue-600",
              acc.status === "Instant" &&
                "bg-green-500 text-white dark:bg-red-600",
              acc.status !== "Recommended" &&
                acc.status !== "Instant" &&
                "bg-muted-foreground text-white dark:bg-yellow-600"
            )}
          >
            {acc.status === "Recommended" && (
              <BadgeCheck className="mr-1 h-4 w-4" />
            )}
            {acc.status}
          </Badge>
        </CardDescription>

        <CardDescription className="text-md border-b pb-6">
          {acc.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex justify-between font-medium">
        <p>Minimal Deposit</p>
        <p>
          {acc.minimumDeposit} {acc.currency}
        </p>
      </CardContent>

      <CardContent className="flex justify-between font-medium">
        <p>Spread</p>
        <p>From {acc.spread}</p>
      </CardContent>

      <CardContent className="flex justify-between font-medium">
        <p>Commission</p>
        <p>{acc.commission}</p>
      </CardContent>
    </Card>
  );
};
export default AccountPreviewCard;
