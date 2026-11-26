import { updateInventory } from "./actions";


export default function InventoryAdmin() {

  return (
    <main
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "30px",
        fontFamily: "Arial",
        backgroundColor: "white",
        border: "1px solid #ddd",
        borderRadius: "12px"
      }}
    >

      <p
        style={{
          color: "#6d28d9",
          fontWeight: "bold"
        }}
      >
       GALAXY STORE ADMIN
      </p>


      <h1>
        Update Inventory
      </h1>


      <form action={updateInventory}>

        <label>
          Product
        </label>

        <br />

        <select
          name="productId"
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 20px"
          }}
        >

          <option value="1">
            Laptop
          </option>

          <option value="2">
            Mobile
          </option>

          <option value="3">
            Headphones
          </option>

        </select>


        <label>
          New Stock
        </label>

        <br />

        <input
          type="number"
          name="stock"
          defaultValue="25"
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 20px"
          }}
        />


        <button
          type="submit"
          style={{
            padding: "12px 20px",
            backgroundColor: "#6d28d9",
            color: "white",
            border: "none",
            borderRadius: "7px"
          }}
        >

          Update Inventory

        </button>

      </form>

    </main>
  );
}

// BEFORE
// Data source
// Laptop = 10
//        ↓
// Cache
// Laptop = 10
// ADMIN UPDATE
// Laptop 10
//     ↓
// Laptop 25
// DATA SOURCE
// Laptop = 25
// BUT CACHE?
// Still potentially holds
// old data
//        ↓
// updateTag("inventory")
//        ↓
// Old tagged cache
// expires
//        ↓
// Next read
//        ↓
// Laptop = 25