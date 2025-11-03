"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
const Withdraw = ({ type }: { type: string }) => {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-1 pb-4">
        <h1 className="text-3xl font-semibold font-sans">Withdraw funds</h1>
        <p className="text-muted-foreground font-semibold">
          Start by depositing the desired amount into your account to initiate
          the process.
        </p>
      </div>
      <Card className="max-w-xl mx-auto">
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="phone">Mobile number</Label>
            <PhoneInput
              defaultCountry="bd"
              value={phone}
              onChange={setPhone}
              inputProps={{ id: "phone", name: "phone", autoComplete: "tel" }}
              className="w-full"
              inputClassName="w-full h-11 rounded-md border bg-background px-3 text-sm"
              countrySelectorStyleProps={{
                buttonClassName: "h-11",
                flagClassName: "rounded-sm",
                dropdownArrowClassName: "mt-0",
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Enter amount</Label>
            <Input
              id="amount"
              type="number"
              placeholder="00.00 USD"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="h-11"
            />
            <p className="text-xs text-muted-foreground">
              *Withdraw rebate will be added within 24 hours once Withdraw
              succeeds.
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="flex items-center justify-center p-4 gap-8">
        <Button variant={"outline"} asChild>
          <Link href="/">
            <ChevronLeft /> Back
          </Link>
        </Button>
        <Button
          className="bg-blue-500 text-white dark:bg-blue-600 cursor-pointer"
          asChild
        >
          <Link href={{ pathname: "/funds/Payment-Process", query: { type } }}>
            Next <ChevronRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default Withdraw;
