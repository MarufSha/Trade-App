import { cn, formatDateTime, TransactionHistory } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type TradePropsData = {
  item: TransactionHistory;
};

const TradingHistoryCard = ({ item }: TradePropsData) => {
  return (
    <Card>
      <CardHeader className="border-b-2">
        <CardTitle className="grid grid-cols-[80px_50px_150px_1fr] items-center whitespace-nowrap">
          <span className="w-12 text-sm font-mono">{item.id}</span>

          <span
            className={cn(
              "h-8 flex items-center justify-center text-xs font-semibold rounded-lg relative after:content-[''] after:absolute after:-right-4 after:top-1 after:bottom-1 after:w-px after:bg-border",
              item.type === "Buy"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            )}
          >
            {" "}
            {item.type.toUpperCase()}
          </span>

          <span className="text-muted-foreground text-sm px-8 hidden lg:block">
            Open Time: {formatDateTime(item.createdAt)}
          </span>

          <div className="flex justify-end items-center gap-4 text-sm">
            <div className="hidden lg:block">
              <span className="text-muted-foreground ">Take Profit: </span>
              <span>{item.take_profit}</span>
            </div>
            <div className="hidden lg:block">
              <span className="text-muted-foreground">Stop Loss: </span>
              <span>{item.stop_loss}</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid-border-columns grid-cols-[145px_repeat(5,minmax(10rem,1fr))] lg:grid-cols-[145px_repeat(5,minmax(8rem,1fr))] font-semibold">
          <div className="text-sm">Symbol</div>
          <div className="px-8 text-sm">QTY</div>
          <div className="px-8 text-sm">Open Price</div>
          <div className="px-8 text-sm">Current Price</div>
          <div className="px-8 text-sm">Swaps</div>
          <div className="px-8 text-sm">Profits</div>

          <div className="">{item.symbol}</div>
          <div className="px-8">{item.quantity}</div>
          <div className="px-8">{item.open_price}</div>
          <div className="px-8">{item.current_price}</div>
          <div className="px-8">{item.swaps}</div>
          <div className="px-8">{item.profits}</div>
        </div>
      </CardContent>
    </Card>
  );
};
export default TradingHistoryCard;
