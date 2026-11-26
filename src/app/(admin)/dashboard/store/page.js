import { Suspense } from "react";
import RecentOrders from "./RecentOrders";
import Customers from "./Customers";
import styles from "./dashboard.module.css";

export default function StoreDashboard() {
  return (
    <main className={styles.container}>

      <div className={styles.header}>
        <p className={styles.label}>Galaxy Store ADMIN</p>

        <h1>Store Dashboard</h1>

        <p>
          Monitor recent orders and customers.
        </p>
      </div>


      <div className={styles.dashboardGrid}>

        <section className={styles.section}>

          <Suspense
            fallback={
              <div className={styles.loading}>
                Loading recent orders...
              </div>
            }
          >
            <RecentOrders />
          </Suspense>

        </section>


        <section className={styles.section}>

          <Suspense
            fallback={
              <div className={styles.loading}>
                Loading customers...
              </div>
            }
          >
            <Customers />
          </Suspense>

        </section>

      </div>

    </main>
  );
}