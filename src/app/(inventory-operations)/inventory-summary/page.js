import InventoryCount from "./InventoryCount";
import LowStock from "./LowStock";
import styles from "../inventory.module.css";

export default function InventorySummaryPage() {
  return (
    <main className={styles.page}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Stock overview</p>
        <h1 className={styles.title}>Inventory summary</h1>
        <p className={styles.description}>
          Review the products in your catalog and quickly spot items that need
          replenishment.
        </p>
      </header>

      <div className={styles.summaryGrid}>
        <InventoryCount />
        <LowStock />
      </div>
    </main>
  );
}