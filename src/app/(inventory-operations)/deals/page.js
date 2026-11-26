import { Suspense } from "react";
import { getDeals } from "../../_lib/deals";
import styles from "../inventory.module.css";

export default function DealsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Limited-time offers</p>
        <h1 className={styles.title}>Galaxy Store deals</h1>
        <p className={styles.description}>
          Explore current product discounts, refreshed as the deals cache
          revalidates.
        </p>
      </header>

      <section className={styles.liveSection} aria-label="Available deals">
        <Suspense
          fallback={<p className={styles.loading}>Loading current deals...</p>}
        >
          <DealsContent />
        </Suspense>
      </section>
    </main>
  );
}

async function DealsContent() {
  const data = await getDeals();
  const generatedAt = new Date().toLocaleTimeString();

  return (
    <>
      <p className={styles.updated}>Page rendered at {generatedAt}</p>
      <div className={styles.productGrid}>
        {data.products.map((product) => (
          <article className={styles.productCard} key={product.id}>
            <h2>{product.title}</h2>
            <p className={styles.stockBadge}>
              {product.discountPercentage}% off
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
// Initial request
//       ↓
// Fetch and cache deals

// Within cache window
//       ↓
// Reuse cached result

// After revalidation threshold
//       ↓
// Cached value may be served
//       +
// Refresh occurs

// Later request
//       ↓
// Receives refreshed data