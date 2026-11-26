"use server";

import {updateTag} from "next/cache";

import {updateStock} from "../../_lib/inventoryStore";


export async function updateInventory(formData) {

  const productId =Number(formData.get("productId"));
  const stock =Number(formData.get("stock"));

  // Update the data source
  await updateStock( productId,stock);

  // Expire cached inventory
 // updateTag("local-inventory");

 //revalidateTag("local-inventory", "max"); 

 revalidatePath("/cache-local-inventory");

}

// updateTag()

// "I just changed this.
// My next read must be fresh."

// revalidateTag(tag, "max")

// "This data is stale.
// Keep serving it while you refresh."

// revalidatePath()

// "This particular route output
// needs to be refreshed."