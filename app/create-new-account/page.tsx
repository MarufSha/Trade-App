import AccountTypeCard from "@/components/AccountTypeCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const CreateNewAccount = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center gap-6 border-b pb-4 ">
        <Link href={"/"}>
          <Button variant={"outline"} className="cursor-pointer">
            <ChevronLeft />
            Back
          </Button>
        </Link>
        <h1 className="font-medium">Create New Account</h1>
      </div>
      <AccountTypeCard />
    </div>
  );
};
export default CreateNewAccount;
