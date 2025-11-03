import { cn, FundTabHeaderProps } from "@/lib/utils";
import { TabsList, TabsTrigger } from "./ui/tabs";

const FundTabHeader = ({ readonly = false }: FundTabHeaderProps) => {
  return (
    <div className="flex items-center justify-center border-b pb-4">
      <TabsList
        className={cn(
          "gap-4 w-120 h-12 rounded-2xl bg-gray-200 dark:bg-muted",

          readonly && "pointer-events-none select-none opacity-90"
        )}
      >
        <TabsTrigger
          value="Deposit"
          className="rounded-xl cursor-pointer"
          disabled={readonly}
        >
          Deposit
        </TabsTrigger>
        <TabsTrigger
          value="Withdraw"
          className="rounded-xl cursor-pointer"
          disabled={readonly}
        >
          Withdraw
        </TabsTrigger>
        <TabsTrigger
          value="Transfer"
          className="rounded-xl cursor-pointer"
          disabled={readonly}
        >
          Transfer
        </TabsTrigger>
      </TabsList>
    </div>
  );
};

export default FundTabHeader;
