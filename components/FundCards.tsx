import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { FundCard } from "@/app/assets/data/data";
import { Button } from "./ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FundTab, isFundTab } from "@/lib/utils";

const FundCards = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const searchParams = useSearchParams();
  const valueFromURL = searchParams.get("type") ?? "Deposit";
  const typeParam: FundTab = isFundTab(valueFromURL ?? "")
    ? (valueFromURL as FundTab)
    : "Deposit";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {FundCard.map((item) => {
            const isSelected = selectedCard === item.id;

            return (
              <Card
                key={item.id}
                onClick={() => setSelectedCard(item.id)}
                className={`rounded-3xl w-full hover:shadow-lg transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-500 text-white dark:bg-blue-600"
                    : "bg-white dark:bg-neutral-900"
                }`}
              >
                <CardContent className="flex justify-between gap-10">
                  <div className="flex gap-4">
                    <div>{item.icon}</div>
                    <div className="flex flex-col justify-center">
                      <p className="font-medium">{item.title}</p>
                      <div className="flex">
                        <p className="font-medium">Fee</p>
                        <p className="ml-auto">{item.fee}%</p>
                      </div>
                      <div className="flex gap-4">
                        <p className="font-medium">Limits</p>
                        <p className="ml-auto">{item.limit}</p>
                      </div>
                    </div>
                  </div>

                  <Badge
                    className={`h-fit ${
                      isSelected ? "bg-white text-blue-600" : "bg-muted"
                    }`}
                    variant={"secondary"}
                  >
                    <Clock className="w-4 h-4 mr-1" /> {item.time}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center p-4 gap-8">
        <Button variant={"outline"} asChild>
          <Link href={{ pathname: "/funds", query: { type: typeParam } }}>
            <ChevronLeft /> Back
          </Link>
        </Button>
        <Button
          className="bg-blue-500 text-white dark:bg-blue-600 cursor-pointer"
          disabled={selectedCard === null}
        >
          Next <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default FundCards;
