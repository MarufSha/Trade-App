import { Account, AccountCard } from "@/lib/utils";

export const REAL_DATA: Account[] = [
  {
    id: "r1",
    name: "Main Trading",
    number: "MT-1001",
    balance: 25432.91,
    currency: "USD",
    createdAt: "2025-08-12T12:10:00Z",
  },
  {
    id: "r2",
    name: "Scalping",
    number: "MT-1002",
    balance: 8420.05,
    currency: "USD",
    createdAt: "2025-09-01T08:00:00Z",
  },
  {
    id: "r3",
    name: "Swing Alpha",
    number: "MT-1003",
    balance: 120003.44,
    currency: "USD",
    createdAt: "2025-07-21T18:30:00Z",
  },
];

export const DEMO_DATA: Account[] = [
  {
    id: "d1",
    name: "Practice A",
    number: "DM-9001",
    balance: 50000,
    currency: "USD",
    createdAt: "2025-10-01T09:00:00Z",
  },
  {
    id: "d2",
    name: "Practice B",
    number: "DM-9002",
    balance: 25000,
    currency: "USD",
    createdAt: "2025-09-25T10:30:00Z",
  },
];

export const AccountTypeData: AccountCard[] = [
  {
    id: "1",
    type: "Standard",
    status: "Recommended",
    description: "Most Popular! Great account for all types of traders",
    minimumDeposit: 10,
    currency: "USD",
    spread: 0.2,
    commission: "No commission",
  },
  {
    id: "2",
    type: "Pro",
    status: "Professional",
    description: "Most Popular! Great account for all types of traders",
    minimumDeposit: 10,
    currency: "USD",
    spread: 0.2,
    commission: "No commission",
  },
  {
    id: "3",
    type: "Raw Spread",
    status: "Instant",
    description: "Most Popular! Great account for all types of traders",
    minimumDeposit: 10,
    currency: "USD",
    spread: 0.2,
    commission: "No commission",
  },
  {
    id: "4",
    type: "Zero Spread",
    status: "Professional",
    description: "Most Popular! Great account for all types of traders",
    minimumDeposit: 10,
    currency: "USD",
    spread: 0.2,
    commission: "No commission",
  },
  {
    id: "5",
    type: "Zero Spread",
    status: "Instant",
    description: "Most Popular! Great account for all types of traders",
    minimumDeposit: 10,
    currency: "USD",
    spread: 0.2,
    commission: "No commission",
  },
  {
    id: "6",
    type: "Zero Spread",
    status: "Instant",
    description: "Most Popular! Great account for all types of traders",
    minimumDeposit: 10,
    currency: "USD",
    spread: 0.2,
    commission: "No commission",
  },
];

export const MinLeverage: string[] = [
  "1:200",
  "1:300",
  "1:400",
  "1:500",
  "1:600",
  "1:700",
  "1:800",
  "1:900",
  "1:1000",
];
export const Currency: string[] = ["USD", "EUR", "GBP"];
