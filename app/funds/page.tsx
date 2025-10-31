"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Deposit from "./Deposit/page";
import Withdraw from "./Withdraw/page";
import Transfer from "./Transfer/page";

const Funds = () => {
  return (
    <Tabs defaultValue="Deposit">
      <div className="flex items-center justify-center border-b pb-4">
        <TabsList className="gap-4 w-120 h-12 bg-gray-200 rounded-2xl">
          <TabsTrigger value="Deposit" className="rounded-xl cursor-pointer">
            Deposit
          </TabsTrigger>
          <TabsTrigger value="Withdraw" className="rounded-xl cursor-pointer">
            Withdraw
          </TabsTrigger>
          <TabsTrigger value="Transfer" className="rounded-xl cursor-pointer">
            Transfer
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="Deposit">
        <Deposit type="Deposit" />
      </TabsContent>

      <TabsContent value="Withdraw">
        <Withdraw />
      </TabsContent>

      <TabsContent value="Transfer">
        <Transfer />
      </TabsContent>
    </Tabs>
  );
};
export default Funds;
