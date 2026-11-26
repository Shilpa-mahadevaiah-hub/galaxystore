import styles from "./promotions.module.css";

//export const revalidate = 30;

export default async function PromotionsPage() {
  const response = await fetch(
    "https://dummyjson.com/products?limit=6"
  );

  if (!response.ok) {
    throw new Error("Unable to load promotions");
  }

  const data = await response.json();

  const generatedAt = new Date().toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <p>Galaxy Store OFFERS</p>
        <h1>Current Promotions</h1>
        <span>Cached version generated at: {generatedAt}</span>
      </header>

      <section className={styles.grid}>
        {data.products.map((product) => (
          <article className={styles.card} key={product.id}>
            <span className={styles.discount}>
              {product.discountPercentage}% OFF
            </span>

            <h2>{product.title}</h2>

            <p className={styles.price}>
              ${product.price}
            </p>

            <p>{product.category}</p>
          </article>
        ))}
      </section>
    </main>
  );
}


// First request
//      ↓
// Generate/cache promotions

// Requests within 30 seconds
//      ↓
// Serve cached content

// After revalidation window
//      ↓
// Content becomes eligible for regeneration
//      ↓
// Updated cached version becomes available
