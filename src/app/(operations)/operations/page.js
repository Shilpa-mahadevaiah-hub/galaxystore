import Link from "next/link";

export default function OperationsPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <p
        style={{
          color: "#6d28d9",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        GALAXY STORE STAFF
      </p>

      <h1>Operations Dashboard</h1>

      <p>
        Manage orders and inventory from this protected area.
      </p>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "25px",
        }}
      >
        <Link href="/operations/orders">
          Manage Orders
        </Link>

        <Link href="/operations/inventory">
          Manage Inventory
        </Link>
      </div>
    </main>
  );
}