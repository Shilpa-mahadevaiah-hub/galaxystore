import { Suspense } from "react";

import SalesSummary from "./SalesSummary";
import RecentOrders from "./RecentOrders";
import Customers from "./Customers";

import styles from "./analytics.module.css";

//force dynamic will make sure that the page is always rendered on the server and never cached
export const dynamic = "force-dynamic";

export default function AnalyticsDashboard() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <p>Galaxy Store ADMIN</p>
        <h1>Analytics Dashboard</h1>
        <span>
          Sections appear as their data becomes ready.
        </span>
      </header>

      <div className={styles.grid}>
        <Suspense
          fallback={
            <SectionLoading message="Loading sales summary..." />
          }
        >
          <SalesSummary />
        </Suspense>

        <Suspense
          fallback={
            <SectionLoading message="Loading recent orders..." />
          }
        >
          <RecentOrders />
        </Suspense>

        <Suspense
          fallback={
            <SectionLoading message="Loading customers..." />
          }
        >
          <Customers />
        </Suspense>
      </div>
    </main>
  );
}

function SectionLoading({ message }) {
  return (
    <section className={styles.card}>
      <div className={styles.sectionLoading}>
        {message}
      </div>
    </section>
  );
}

// Show page shell immediately
//       ↓
// Sales at 1 second
//       ↓
// Orders at 2.5 seconds
//       ↓
// Customers at 5 seconds