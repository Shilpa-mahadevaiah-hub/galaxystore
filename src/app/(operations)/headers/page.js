import { headers } from "next/headers";

//instant = false means that this page will not be cached and will be re-rendered on every request.
export const instant = false;
export default async function headersPage() {
  const headerStore = await headers();

  const requestId =
    headerStore.get(
      "x-galaxystore-request-id"
    );

  const source =
    headerStore.get(
      "x-galaxystore-source"
    );

  return (
    <main style={{ padding: "40px" }}>
      <h1>Headers Dashboard</h1>

      <p>Request ID: {requestId}</p>
      <p>Request source: {source}</p>
    </main>
  );
}