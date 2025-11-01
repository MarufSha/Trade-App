"use client";
import FundCards from "@/components/FundCards";
import { useSearchParams } from "next/navigation";
const PaymentProcess = () => {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type") ?? "Payment";

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-1 pb-4">
        <h1 className="text-xl font-semibold font-sans">
          Select {typeParam} Method
        </h1>
        <p className="text-muted-foreground font-semibold">
          Choose the most convenient payment method from the available options
          for your deposit
        </p>
      </div>
      <FundCards />
    </div>
  );
};
export default PaymentProcess;
