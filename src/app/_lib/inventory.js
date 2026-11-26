import { cacheLife, cacheTag } from "next/cache";
export async function getInventory() {
    "use cache";
    //caching the inventory for 1 hour

    cacheLife("hours");
    cacheTag("inventory")
    console.log("getInventory function called");

    const response = await fetch(
        "https://dummyjson.com/products?limit=10"
    );

    if (!response.ok) {
        throw new Error("Unable to fetch inventory");
    }

    return response.json();
}