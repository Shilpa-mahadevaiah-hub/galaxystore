import { Suspense } from "react";
import StoreInformation from "./StoreInformation";
import CurrentRequest from "./CurrentRequest";
import styles from "../inventory.module.css";
import RefreshButton from "./RefreshButton";

export default function StoreStatusPage() {
  return (
    <main className={styles.page}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Store operations</p>
        <h1 className={styles.title}>Store status</h1>
        <p className={styles.description}>
          Review store policies and request details for your current visit.
        </p>
      </header>

      <div className={styles.summaryGrid}>
        <StoreInformation />
        <Suspense
          fallback={<p className={styles.loading}>Reading request details...</p>}
        >
          <CurrentRequest />
        </Suspense>
        <RefreshButton/>
      </div>
    </main>
  );
}
// Static shell

// Store Status heading
// Cached store information

//           +

// Dynamic section

// Current Request
// inside Suspense