import styles from "./analytics.module.css";

export default async function RecentOrders() {
  await new Promise((resolve) =>
    setTimeout(resolve, 2500)
  );

  const response = await fetch(
    "https://dummyjson.com/carts?limit=5",
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Unable to load recent orders");
  }

  const data = await response.json();

  return (
    <section className={styles.card}>
      <p className={styles.label}>ORDERS</p>
      <h2>Recent Orders</h2>

      <div className={styles.list}>
        {data.carts.map((order) => (
          <div key={order.id}>
            <span>Order #{order.id}</span>
            <strong>${order.total}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}