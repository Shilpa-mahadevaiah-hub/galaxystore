import { cookies } from "next/headers";
import { Suspense } from "react";

export default async function OperationsHeader() {
  return (
    <Suspense fallback={<p>Loading Operations Header...</p>}>
      <OperationsHeaderComponent />
    </Suspense>
  );
}

export async function OperationsHeaderComponent() {
  const cookieStore = await cookies();

  const lastVisit =
    cookieStore.get(
      "last_operations_visit"
    );

  return (
    <header>
      <h1>Galaxy Store Operations</h1>

      <p>
        Last Visit:
        {" "}
        {lastVisit?.value || "First Visit"}
      </p>
    </header>
  );
}