import { getInventory } from "../../_lib/inventory";
import styles from "../inventory.module.css";

export default async function InventoryCount() {
  const data = await getInventory();

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Inventory count</h2>
      <strong className={styles.countMetric}>{data.products.length}</strong>
      <p className={styles.muted}>products in your catalog</p>
    </section>
  );
}