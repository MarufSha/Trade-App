import { TabsList, TabsTrigger } from "./ui/tabs";

const FundTabHeader = () => {
  return (
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
  );
};
export default FundTabHeader;
