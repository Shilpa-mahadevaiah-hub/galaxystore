import { getInventory } from "../../_lib/inventory";
import styles from "../inventory.module.css";

export default async function CachedInventoryPage() {
  const data = await getInventory();

  return (
    <main className={styles.page}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Warehouse stock</p>
        <h1 className={styles.title}>Cached inventory</h1>
        <p className={styles.description}>
          Browse the latest inventory snapshot available for the warehouse.
        </p>
      </header>

      <section className={styles.liveSection} aria-label="Warehouse inventory">
        <p className={styles.updated}>
          {data.products.length} products in this inventory snapshot
        </p>
        <div className={styles.productGrid}>
          {data.products.map((product) => (
            <article className={styles.productCard} key={product.id}>
              <h2>{product.title}</h2>
              <p className={styles.productStock}>
                <span>Available stock</span>
                <strong>{product.stock} units</strong>
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}