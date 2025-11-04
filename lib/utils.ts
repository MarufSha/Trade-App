import { clsx, type ClassValue } from "clsx";
import {
  ChartSpline,
  History,
  Settings,
  SquareUserRound,
  Wallet,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import { startOfDay, endOfDay, format as fmt } from "date-fns";
import { fromZonedTime } from "date-fns-tz";
import type { DateRange } from "react-day-picker";
// import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const items = [
  {
    id: 1,
    title: "Trading accounts",
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
  createdAt: string;
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
export type TransactionHistory = {
  id: string;
  type: string;
  createdAt: string;
  take_profit: number;
  stop_loss: number;
  symbol: string;
  quantity: number;
  open_price: number;
  current_price: number;
  swaps: number;
  profits: number;
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

export function formatDateTime(isoString: string) {
  const date = new Date(isoString);
  const pad = (n: number) => n.toString().padStart(2, "0");

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// export function formatDateTime(isoString: string): string {
//   const date = new Date(isoString);
//   return format(date, "yyyy-MM-dd HH:mm:ss");
// }

export type HasCreatedAt = { createdAt: string };

export const TIME_ZONE = "Asia/Dhaka";

export function normalizeRangeToUtc(range?: DateRange, tz: string = TIME_ZONE) {
  if (!range?.from || !range?.to) return undefined;
  const startLocal = startOfDay(range.from);
  const endLocal = endOfDay(range.to);
  return {
    startUtc: fromZonedTime(startLocal, tz),
    endUtc: fromZonedTime(endLocal, tz),
  };
}

export function filterByDateRange<T extends HasCreatedAt>(
  data: T[],
  range?: DateRange,
  tz: string = TIME_ZONE
): T[] {
  const norm = normalizeRangeToUtc(range, tz);
  if (!norm) return data;
  const { startUtc, endUtc } = norm;

  return data.filter((item) => {
    const createdUtc = new Date(item.createdAt);
    return createdUtc >= startUtc && createdUtc <= endUtc;
  });
}

export type SortOrder = "asc" | "desc";
export function sortByCreatedAt<T extends HasCreatedAt>(
  data: T[],
  order: SortOrder = "desc"
): T[] {
  return [...data].sort((a, b) => {
    const ta = new Date(a.createdAt).getTime();
    const tb = new Date(b.createdAt).getTime();
    return order === "asc" ? ta - tb : tb - ta;
  });
}

export function formatRangeLabel(range?: DateRange) {
  if (!range?.from || !range?.to) return "Date";
  return `${fmt(range.from, "yyyy-MM-dd")} — ${fmt(range.to, "yyyy-MM-dd")}`;
}

export type SortKey =
  | "date"
  | "profits"
  | "swaps"
  | "id"
  | "quantity"
  | "open_price"
  | "current_price";

function getValue(obj: unknown, key: string): unknown {
  if (obj && typeof obj === "object" && key in obj) {
    return (obj as Record<string, unknown>)[key];
  }
  return undefined;
}

function toNumberSafe(v: unknown): number {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") {
    const n = Number(v.replace?.(/[, ]/g, "") ?? v);
    return Number.isFinite(n) ? n : 0;
  }
  return 0;
}

function compareNumbers(a: number, b: number, order: SortOrder) {
  return order === "asc" ? a - b : b - a;
}

function compareStrings(a: string, b: string, order: SortOrder) {
  const cmp = a.localeCompare(b, undefined, {
    numeric: true,
    sensitivity: "base",
  });
  return order === "asc" ? cmp : -cmp;
}

export function sortTradingData<T extends HasCreatedAt>(
  data: T[],
  key: SortKey,
  order: SortOrder
): T[] {
  const arr = [...data];

  switch (key) {
    case "date": {
      return arr.sort((a, b) => {
        const ta = new Date(a.createdAt).getTime();
        const tb = new Date(b.createdAt).getTime();
        return compareNumbers(ta, tb, order);
      });
    }

    case "profits":
    case "swaps":
    case "quantity":
    case "open_price":
    case "current_price": {
      return arr.sort((a, b) => {
        const va = toNumberSafe(getValue(a, key));
        const vb = toNumberSafe(getValue(b, key));
        return compareNumbers(va, vb, order);
      });
    }

    case "id": {
      return arr.sort((a, b) => {
        const aId = getValue(a, "id");
        const bId = getValue(b, "id");

        const na = toNumberSafe(aId);
        const nb = toNumberSafe(bId);
        if (
          Number.isFinite(na) &&
          Number.isFinite(nb) &&
          (typeof aId === "number" || typeof aId === "string") &&
          (typeof bId === "number" || typeof bId === "string")
        ) {
          return compareNumbers(na, nb, order);
        }

        return compareStrings(String(aId ?? ""), String(bId ?? ""), order);
      });
    }

    default:
      return arr;
  }
}
export type FundTab = "Deposit" | "Withdraw" | "Transfer";
export type CardItem = {
  id: number;
  icon: React.ReactNode;
  title: string;
  fee: string | number;
  limit: string | number;
  currency: string;
  time: string;
};
export type FundTabHeaderProps = {
  readonly?: boolean;
};
export function isFundTab(value: string): value is FundTab {
  return ["Deposit", "Withdraw", "Transfer"].includes(value);
}

export type TransactionTable = {
  sl: number;
  trx_id: string;
  currency: string;
  amount: number;
  account: string;
  trx_date: string;
  trx_type: string;
  status: string;
  referral_code: string;
  icon: React.ReactNode;
  payment_method: string;
};

