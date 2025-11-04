import { TransactionTable } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { EllipsisVertical } from "lucide-react";

export const columns: ColumnDef<TransactionTable>[] = [
  {
    accessorKey: "sl",
    header: "SL",
  },
  {
    accessorKey: "trx_id",
    header: "TRX ID",
  },
  {
    id: "amountFormatted",
    header: "AMOUNT",
    cell: ({ row }) => (
      <span>
        {row.original.currency}
        {row.original.amount}
      </span>
    ),
  },
  {
    accessorKey: "account",
    header: "ACCOUNT",
  },
  {
    accessorKey: "trx_date",
    header: "TRX DATE",
  },
  {
    accessorKey: "trx_type",
    header: "TRX TYPE",
  },
  {
    accessorKey: "status",
    header: "STATUS",
  },
  {
    accessorKey: "referral_code",
    header: "REFERRAL CODE",
  },
  {
    id: "payment",
    header: "PAYMENT METHOD",
    cell: ({ row }) => (
      <div className="flex items-center gap-3 ">
        {row.original.icon}
        <span className="text-slate-900">{row.original.payment_method}</span>
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="border-2 rounded-xl">
              <span className="sr-only">Open menu</span>
              <EllipsisVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.trx_id)}
            >
              Copy Transaction ID
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
