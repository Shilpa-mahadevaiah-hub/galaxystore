import { getInventory } from "../../_lib/inventory";
import styles from "../inventory.module.css";

export default async function LowStock() {
  const data = await getInventory();

  const lowStockItems = data.products.filter(
    (product) => product.stock < 50
  );

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Low stock</h2>

      {lowStockItems.length > 0 ? (
        <ul className={styles.stockList}>
          {lowStockItems.map((product) => (
            <li className={styles.stockItem} key={product.id}>
              <span className={styles.productName}>{product.title}</span>
              <span className={styles.stockBadge}>{product.stock} units</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyState}>All products are above the low-stock threshold.</p>
      )}
    </section>
  );
}