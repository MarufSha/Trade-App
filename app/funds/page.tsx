"use client";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Deposit from "./Deposit/page";
import Transfer from "./Transfer/page";
import Withdraw from "./Withdraw/page";
import FundTabHeader from "@/components/FundTabHeader";

const Fund = () => {
  return (
    <Tabs defaultValue="Deposit">
      <FundTabHeader />
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
export default Fund;
