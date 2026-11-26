import { Suspense } from "react";
import LiveInventory from "./LiveInventory";
import styles from "../inventory.module.css";

export default function LiveInventoryPage() {
  return (
    <main className={styles.page}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Current availability</p>
        <h1 className={styles.title}>Live inventory</h1>
        <p className={styles.description}>
          View the latest available stock for products fetched from the inventory
          service.
        </p>
      </header>

      <section className={styles.liveSection} aria-label="Current product stock">
        <Suspense
          fallback={<p className={styles.loading}>Loading current stock...</p>}
        >
          <LiveInventory />
        </Suspense>
      </section>
    </main>
  );
}
// Request
//    ↓
// Fetch current inventory
//    ↓
// Render
//    ↓
// Send response