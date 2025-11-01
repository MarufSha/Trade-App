import {
  Account,
  AccountCard,
  CardItem,
  TransactionHistory,
} from "@/lib/utils";
import Image from "next/image";

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

export const TradingHistoryData: TransactionHistory[] = [
  {
    id: "12763",
    type: "Buy",
    createdAt: "2025-08-12T12:10:00Z",
    take_profit: 5342,
    stop_loss: 3267,
    symbol: "NAS$100.R",
    quantity: 0.5,
    open_price: 50000,
    current_price: 55300,
    swaps: 24,
    profits: 150,
  },
  {
    id: "124123",
    type: "Sell",
    createdAt: "2025-08-15T10:42:00Z",
    take_profit: 5120,
    stop_loss: 4800,
    symbol: "GOLD.XAU",
    quantity: 1.2,
    open_price: 2400,
    current_price: 2380,
    swaps: 18,
    profits: 230,
  },
  {
    id: "2143242",
    type: "Buy",
    createdAt: "2025-08-18T15:21:00Z",
    take_profit: 7800,
    stop_loss: 7200,
    symbol: "BTC.USD",
    quantity: 0.03,
    open_price: 70500,
    current_price: 72000,
    swaps: 36,
    profits: 420,
  },
  {
    id: "12341",
    type: "Sell",
    createdAt: "2025-08-19T09:55:00Z",
    take_profit: 5475,
    stop_loss: 5120,
    symbol: "NAS$100.R",
    quantity: 0.8,
    open_price: 56000,
    current_price: 55500,
    swaps: 21,
    profits: 310,
  },
  {
    id: "546345",
    type: "Buy",
    createdAt: "2025-08-21T11:05:00Z",
    take_profit: 6450,
    stop_loss: 6000,
    symbol: "SPX500",
    quantity: 0.4,
    open_price: 4950,
    current_price: 5020,
    swaps: 14,
    profits: 220,
  },
  {
    id: "774312",
    type: "Sell",
    createdAt: "2025-08-24T08:20:00Z",
    take_profit: 3125,
    stop_loss: 2990,
    symbol: "USDJPY",
    quantity: 1.0,
    open_price: 156.25,
    current_price: 155.75,
    swaps: 11,
    profits: 160,
  },
  {
    id: "932411",
    type: "Buy",
    createdAt: "2025-08-25T13:18:00Z",
    take_profit: 129.5,
    stop_loss: 124.0,
    symbol: "AAPL.US",
    quantity: 20,
    open_price: 126.8,
    current_price: 128.3,
    swaps: 8,
    profits: 300,
  },
  {
    id: "654872",
    type: "Sell",
    createdAt: "2025-08-27T16:45:00Z",
    take_profit: 158.7,
    stop_loss: 165.2,
    symbol: "TSLA.US",
    quantity: 10,
    open_price: 162.0,
    current_price: 160.1,
    swaps: 6,
    profits: 190,
  },
  {
    id: "328594",
    type: "Buy",
    createdAt: "2025-08-28T09:00:00Z",
    take_profit: 115.8,
    stop_loss: 110.2,
    symbol: "EURUSD",
    quantity: 3.5,
    open_price: 1.105,
    current_price: 1.108,
    swaps: 5,
    profits: 275,
  },
  {
    id: "842179",
    type: "Sell",
    createdAt: "2025-08-30T12:35:00Z",
    take_profit: 4275,
    stop_loss: 4150,
    symbol: "OIL.WTI",
    quantity: 2.2,
    open_price: 4200,
    current_price: 4185,
    swaps: 9,
    profits: 125,
  },
];

export const FundsCard: CardItem[] = [
  {
    icon: (
      <Image
        src="/icons/binance.png"
        alt="Binance Pay"
        width={40}
        height={40}
      />
    ),
    title: "BinancePay",
    fee: 0,
    limit: "Unlimited",
    currency: "USDT",
  },
  {
    icon: (
      <Image src="/icons/bkash.png" alt="Bkash Pay" width={40} height={40} />
    ),
    title: "Bkash",
    fee: 0,
    limit: "Unlimited",
    currency: "USDT",
  },
  {
    icon: (
      <Image
        src="/icons/neteller.png"
        alt="Neteller Pay"
        width={40}
        height={40}
      />
    ),
    title: "Neteller",
    fee: 0,
    limit: "Unlimited",
    currency: "USDT",
  },
  {
    icon: <Image src="/icons/skrill.png" alt="Skrill" width={40} height={40} />,
    title: "Skrill Pay",
    fee: 0,
    limit: "Unlimited",
    currency: "USDT",
  },
];
