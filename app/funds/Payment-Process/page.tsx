"use client";

import { Suspense } from "react";
import FundCards from "@/components/FundCards";
import FundTabHeader from "@/components/FundTabHeader";
import { Tabs } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import { isFundTab, type FundTab } from "@/lib/utils";

const DEFAULT_TAB: FundTab = "Deposit";

const PaymentProcessInner = () => {
  const searchParams = useSearchParams();
  const valueFromURL = searchParams.get("type") ?? DEFAULT_TAB;

  const typeParam: FundTab = isFundTab(valueFromURL)
    ? (valueFromURL as FundTab)
    : DEFAULT_TAB;

  return (
    <div>
      <Tabs value={typeParam} onValueChange={() => {}}>
        <FundTabHeader readonly />
      </Tabs>

      <div className="flex flex-col justify-center items-center space-y-1 pb-10">
        <h1 className="text-xl font-semibold font-sans mt-4">
          Select {typeParam} Method
        </h1>
        <p className="text-muted-foreground font-semibold">
          Choose the most convenient payment method from the available options
          for your {typeParam.toLowerCase()}.
        </p>
      </div>

      <FundCards />
    </div>
  );
};

const PaymentProcess = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          Loading...
        </div>
      }
    >
      <PaymentProcessInner />
    </Suspense>
  );
};

export default PaymentProcess;
