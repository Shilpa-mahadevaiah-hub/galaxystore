import styles from "./analytics.module.css";

export default async function Customers() {
  await new Promise((resolve) =>
    setTimeout(resolve, 5000)
  );

  const response = await fetch(
    "https://dummyjson.com/users?limit=5",
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Unable to load customers");
  }

  const data = await response.json();

  return (
    <section className={styles.card}>
      <p className={styles.label}>CUSTOMERS</p>
      <h2>Recent Customers</h2>

      <div className={styles.list}>
        {data.users.map((customer) => (
          <div key={customer.id}>
            <span>
              {customer.firstName} {customer.lastName}
            </span>

            <small>{customer.email}</small>
          </div>
        ))}
      </div>
    </section>
  );
}