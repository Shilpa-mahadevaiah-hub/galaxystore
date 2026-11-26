import styles from "./analytics.module.css";

export default function Loading() {
  return (
    <main className={styles.container}>
      <h1>Galaxy Store Analytics</h1>

      <div className={styles.pageLoading}>
        Loading dashboard...
      </div>
    </main>
  );
}