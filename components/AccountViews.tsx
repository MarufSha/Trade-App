"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { money, type Account, type ViewMode } from "@/lib/utils";

export const AccountGridView = ({ a }: { a: Account }) => (
  <Card className="p-4 rounded-2xl shadow-sm hover:shadow transition">
    <div className="flex items-start justify-between">
      <div>
        <div className="text-sm text-muted-foreground">{a.number}</div>
        <div className="font-semibold text-base">{a.name}</div>
      </div>
      <div className="text-right">
        <div className="text-xs text-muted-foreground">Balance</div>
        <div className="font-semibold">{money(a.balance, a.currency)}</div>
      </div>
    </div>
    <div className="mt-3 text-xs text-muted-foreground">
      Opened: {new Date(a.createdAt).toLocaleDateString()}
    </div>
  </Card>
);

export const AccountListView = ({ a }: { a: Account }) => (
  <div className="grid grid-cols-12 items-center py-3 border-b last:border-b-0">
    <div className="col-span-4">
      <div className="font-medium">{a.name}</div>
      <div className="text-xs text-muted-foreground">{a.number}</div>
    </div>
    <div className="col-span-3 text-sm">{money(a.balance, a.currency)}</div>
    <div className="col-span-3 text-xs text-muted-foreground">
      {new Date(a.createdAt).toLocaleDateString()}
    </div>
    <div className="col-span-2 flex justify-end">
      <Button size="sm" variant="outline">
        Manage
      </Button>
    </div>
  </div>
);

export const AccountCompactView = ({ a }: { a: Account }) => (
  <div className="flex items-center justify-between py-2 border-b last:border-b-0 text-sm">
    <div className="truncate">
      <span className="font-medium">{a.name}</span>
      <span className="mx-2 text-muted-foreground">•</span>
      <span className="text-muted-foreground">{a.number}</span>
    </div>
    <div className="font-medium">{money(a.balance, a.currency)}</div>
  </div>
);
export const AccountSection = ({
  data,
  view,
  emptyLabel,
}: {
  data: Account[];
  view: ViewMode;
  emptyLabel: string;
}) => {
  if (!data.length) {
    return (
      <Card>
        <Card className="p-8 text-center text-sm text-muted-foreground rounded-2xl">
          {emptyLabel}
        </Card>
      </Card>
    );
  }
  if (view === "grid") {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((a) => (
          <AccountGridView key={a.id} a={a} />
        ))}
      </div>
    );
  }

  if (view === "list") {
    return (
      <Card className="rounded-2xl">
        <div className="grid grid-cols-12 px-4 py-3 border-b bg-muted/30 rounded-t-2xl text-xs font-medium text-muted-foreground">
          <div className="col-span-4">Account</div>
          <div className="col-span-3">Balance</div>
          <div className="col-span-3">Created</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>
        <div className="px-4">
          {data.map((a) => (
            <AccountListView key={a.id} a={a} />
          ))}
        </div>
      </Card>
    );
  }

  // compact
  return (
    <Card className="rounded-2xl">
      <div className="px-4">
        {data.map((a) => (
          <AccountCompactView key={a.id} a={a} />
        ))}
      </div>
    </Card>
  );
};
