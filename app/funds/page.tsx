"use client";

import { Suspense, useEffect, useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Deposit from "./Deposit/page";
import Transfer from "./Transfer/page";
import Withdraw from "./Withdraw/page";
import FundTabHeader from "@/components/FundTabHeader";
import { FundTab, isFundTab } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";

const DEFAULT_TAB: FundTab = "Deposit";

const FundInner = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const valueFromURL = searchParams.get("type") ?? DEFAULT_TAB;
  const typeParam: FundTab = isFundTab(valueFromURL)
    ? (valueFromURL as FundTab)
    : DEFAULT_TAB;

  const [selectTab, setSelectTab] = useState<FundTab>(typeParam);

  useEffect(() => {
    setSelectTab(typeParam);
  }, [typeParam]);

  const handleTabChange = (v: string) => {
    const newTab = v as FundTab;
    setSelectTab(newTab);
    router.replace(`/funds?type=${newTab}`);
  };

  return (
    <Tabs
      value={selectTab}
      onValueChange={handleTabChange}
      className="flex flex-col h-full min-h-0"
    >
      <FundTabHeader />

      <TabsContent value="Deposit">
        <Deposit type="Deposit" />
      </TabsContent>

      <TabsContent value="Withdraw">
        <Withdraw type="Withdraw" />
      </TabsContent>

      <TabsContent value="Transfer">
        <Transfer />
        {/* <Transfer type="Transfer" /> */}
      </TabsContent>
    </Tabs>
  );
};

const Fund = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          Loading...
        </div>
      }
    >
      <FundInner />
    </Suspense>
  );
};

export default Fund;
