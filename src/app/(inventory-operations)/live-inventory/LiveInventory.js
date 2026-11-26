import styles from "../inventory.module.css";

export default async function LiveInventory() {
  console.log("Fetching fresh inventory from the API");

  const response = await fetch(
    "https://dummyjson.com/products?limit=6",
   // {next:{cache:'force-cache', tags:['inventory']}}
  );

  if (!response.ok) {
    throw new Error("Unable to load inventory");
  }

  const data = await response.json();

  const fetchedAt = new Date().toLocaleTimeString();

  return (
    <>
      <p className={styles.updated}>Fetched at {fetchedAt}</p>
      <div className={styles.productGrid}>
        {data.products.map((product) => (
          <article className={styles.productCard} key={product.id}>
            <h2>{product.title}</h2>
            <p className={styles.productStock}>
              <span>Available stock</span>
              <strong>{product.stock}</strong>
            </p>
          </article>
        ))}
      </div>
    </>
  );
}