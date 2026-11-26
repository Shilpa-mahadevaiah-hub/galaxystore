import styles from "./storeInfo.module.css";

export default function StoreInfoPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <p className={styles.label}>ABOUT Galaxy Store</p>

        <h1>Shopping made simple</h1>

        <p>
          Galaxy Store offers electronics, accessories, and everyday
          essentials through a convenient online shopping experience.
        </p>
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2>Fast Delivery</h2>
          <p>Orders are prepared and dispatched as quickly as possible.</p>
        </article>

        <article className={styles.card}>
          <h2>Easy Returns</h2>
          <p>Eligible products can be returned within the return period.</p>
        </article>

        <article className={styles.card}>
          <h2>Customer Support</h2>
          <p>Support is available Monday through Saturday.</p>
        </article>
      </section>

      <p className={styles.generated}>
        Static store information shared by every visitor.
      </p>
    </main>
  );
}

// Build application
//        ↓
// Generate HTML
//        ↓
// Store generated output
//        ↓
// Serve same content to all visitors