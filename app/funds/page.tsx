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
        <Withdraw type="Withdraw" />
      </TabsContent>

      <TabsContent value="Transfer">
        <Transfer />
        {/* <Transfer type = "Transfer"/> */}
      </TabsContent>
    </Tabs>
  );
};
export default Fund;
