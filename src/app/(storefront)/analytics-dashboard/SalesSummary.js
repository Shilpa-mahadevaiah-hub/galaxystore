import styles from "./analytics.module.css";

export default async function SalesSummary() {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );

  const response = await fetch(
    "https://dummyjson.com/carts?limit=10",
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Unable to load sales");
  }

  const data = await response.json();

  const revenue = data.carts.reduce(
    (sum, order) => sum + order.total,
    0
  );

  return (
    <section className={styles.card}>
      <p className={styles.label}>SALES</p>
      <h2>Sales Summary</h2>

      <strong className={styles.metric}>
        ${revenue.toFixed(2)}
      </strong>

      <span>
        Based on {data.carts.length} recent orders
      </span>
    </section>
  );
}