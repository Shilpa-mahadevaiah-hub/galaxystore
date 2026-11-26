import {
  cacheLife,
  cacheTag
} from "next/cache";


let inventory = [
  {
    id: 1,
    name: "Laptop",
    stock: 10
  },
  {
    id: 2,
    name: "Mobile",
    stock: 20
  },
  {
    id: 3,
    name: "Headphones",
    stock: 15
  }
];


export async function getInventory() {
  "use cache";

  cacheLife("hours");

  cacheTag("local-inventory");

  console.log("Reading inventory...");

  return inventory;
}


export async function updateStock(
  id,
  newStock
) {

  inventory = inventory.map(
    (product) =>
      product.id === id
        ? {
            ...product,
            stock: newStock
          }
        : product
  );

}