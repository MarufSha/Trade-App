// app/create-new-account/create-account/page.tsx
import { Suspense } from "react";
import CreateAccountClient from "../../../components/CreateAccountClient";

export default function CreateAccountPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreateAccountClient />
    </Suspense>
  );
}
