import { clsx, type ClassValue } from "clsx";
import {
  ChartSpline,
  History,
  Settings,
  SquareUserRound,
  Wallet,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const items = [
  {
    id: 1,
    title: "Trading Accounts",
    url: "/",
    icon: SquareUserRound,
    pageHeader: "Trading Accounts",
  },
  {
    id: 2,
    title: "Trading history",
    url: "/trading-history",
    icon: ChartSpline,
  },
  {
    id: 3,
    title: "Funds",
    url: "/funds",
    icon: Wallet,
  },
  {
    id: 4,
    title: "Trasnactions history",
    url: "/transactions-history",
    icon: History,
  },
  {
    id: 5,
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export type Account = {
  id: string;
  name: string;
  number: string;
  balance: number;
  currency: string;
  createdAt: string; // ISO
};
export type AccountCard = {
  id: string;
  type: string;
  status: string;
  description: string;
  minimumDeposit: number;
  currency: string;
  spread: number;
  commission: string;
};
export type ViewMode = "grid" | "list" | "compact";

export const money = (v: number, c = "USD") =>
  new Intl.NumberFormat(undefined, { style: "currency", currency: c }).format(
    v
  );

export const applyQuerySort = (
  data: Account[],
  query: string,
  isDescending: boolean
) => {
  const q = query.trim().toLowerCase();

  const filtered = q
    ? data.filter(
        (a) =>
          a.name.toLowerCase().includes(q) || a.number.toLowerCase().includes(q)
      )
    : data;

  const sorted = [...filtered].sort((a, b) => {
    const da = new Date(a.createdAt).getTime();
    const db = new Date(b.createdAt).getTime();
    return isDescending ? db - da : da - db;
  });

  return sorted;
};
