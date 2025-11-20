"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, CircleCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Currency, MinLeverage } from "@/app/assets/data/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AccountPreviewCard from "@/components/AccountPreviewCard";

const formSchema = z.object({
  min_leverage: z
    .string()
    .min(1, "Please select a minimum leverage.")
    .refine((val) => val !== "auto", {
      message: "Auto-detection is not allowed. Please select a specific value.",
    }),
  currency: z
    .string()
    .min(1, "Please select a currency.")
    .refine((val) => val !== "auto", {
      message: "Auto-detection is not allowed. Please select a specific value.",
    }),
  name: z.string().min(2, "Please enter a name."),
  password: z.string().min(6, "Please enter a password."),
});

function FormRhfSelect() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      min_leverage: "",
      currency: "",
      name: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // const payload = {
    //   ...values,
    //   createdAt: new Date().toISOString(),
    // };
    // const key = "created_accounts";
    // const existing = JSON.parse(localStorage.getItem(key) || "[]");
    // existing.push(payload);
    // console.log("🚀 ~ onSubmit ~ payload:", payload);
    // localStorage.setItem(key, JSON.stringify(existing));
  };

  return (
    <Form {...form}>
      <form
        id="create-account-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-4 space-y-4"
      >
        <FormField
          control={form.control}
          name="min_leverage"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Minimum Leverage</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select minimum leverage" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="">
                  {MinLeverage.map((lvl) => (
                    <SelectItem key={lvl} value={lvl}>
                      {lvl}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Currency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Currency.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <input
                  {...field}
                  placeholder="Enter username"
                  className="w-full border border-input bg-background px-3 py-2 rounded-md text-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <input
                  {...field}
                  type="password"
                  placeholder="Enter password"
                  className="w-full border border-input bg-background px-3 py-2 rounded-md text-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

const CreateAccount = () => {
  return (
    <div>
      <div className="flex items-center gap-6 border-b pb-4 ">
        <Link href={"/create-new-account"}>
          <Button variant={"outline"} className="cursor-pointer">
            <ChevronLeft />
            Back
          </Button>
        </Link>
        <h1 className="font-medium">Create Account</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 space-x-6">
        <div className="lg:col-span-3 space-y-6 px-4 mt-6">
          <Card>
            <CardHeader>
              <p className="font-medium text-sm">Account Type</p>
              <Tabs defaultValue="Demo">
                <TabsList className="w-full">
                  <TabsTrigger value="Demo" className="text-muted-foreground">
                    <CircleCheck /> Demo
                  </TabsTrigger>
                  <TabsTrigger value="Real">Real</TabsTrigger>
                </TabsList>
              </Tabs>
              <p className="text-muted-foreground text-sm">
                Risk-free account. Trade with virtual money
              </p>
            </CardHeader>
            <FormRhfSelect />
          </Card>

          <Button
            type="submit"
            form="create-account-form"
            className="bg-blue-500 text-white dark:bg-blue-600 cursor-pointer"
          >
            Create Account <ChevronRight />
          </Button>
        </div>
        <div className="flex justify-center">
          <AccountPreviewCard />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
