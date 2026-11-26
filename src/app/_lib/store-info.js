import { cacheLife } from "next/cache";

export async function getStoreInformation() {
  "use cache";
//caching the store information for 1 day
  cacheLife("days");

  return {
    name: "Galaxy Store",
    deliveryMessage: "Free delivery on eligible orders",
    returnPeriod: 30,
  };
}