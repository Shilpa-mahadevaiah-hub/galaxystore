import { cacheLife, cacheTag } from "next/cache";

export async function getDeals() {
  "use cache";

  cacheLife({
    stale: 10,
    revalidate: 30,
    expire: 60,
  });

  cacheTag("deals");

  const response = await fetch(
    "https://dummyjson.com/products?limit=6"
  );

  if (!response.ok) {
    throw new Error("Unable to load deals");
  }

  return response.json();
}