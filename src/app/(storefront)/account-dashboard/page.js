import styles from "./dashboard.module.css";

export default async function AccountDashboard({ searchParams }) {
  const params = await searchParams;

  const customerId = params.customer || "1";

  const [customerResponse, ordersResponse] = await Promise.all([
    fetch(`https://dummyjson.com/users/${customerId}`, {
      cache: "no-store",
    }),

    fetch(`https://dummyjson.com/carts/user/${customerId}`, {
      cache: "no-store",
    }),
  ]);

  if (!customerResponse.ok || !ordersResponse.ok) {
    throw new Error("Unable to load the account dashboard");
  }

  const customer = await customerResponse.json();
  const ordersData = await ordersResponse.json();

  const renderedAt = new Date().toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <p>Galaxy Store</p>

        <h1>
          Welcome, {customer.firstName}
        </h1>

        <span>
          Request rendered at: {renderedAt}
        </span>
      </header>

      <section className={styles.profile}>
        <div>
          <span>Customer</span>
          <strong>
            {customer.firstName} {customer.lastName}
          </strong>
        </div>

        <div>
          <span>Email</span>
          <strong>{customer.email}</strong>
        </div>

        <div>
          <span>Orders</span>
          <strong>{ordersData.total}</strong>
        </div>
      </section>

      <section className={styles.links}>
        <a href="/account-dashboard?customer=1">
          Customer 1
        </a>

        <a href="/account-dashboard?customer=2">
          Customer 2
        </a>

        <a href="/account-dashboard?customer=3">
          Customer 3
        </a>
      </section>

      <section className={styles.orders}>
        <h2>Order History</h2>

        {ordersData.carts.length === 0 ? (
          <p>No orders found for this customer.</p>
        ) : (
          ordersData.carts.map((order) => (
            <article key={order.id}>
              <strong>Order #{order.id}</strong>
              <span>${order.total}</span>
            </article>
          ))
        )}
      </section>
    </main>
  );
}

// Request 1
// /customer=1
//        ↓
// Customer 1 dashboard

// Request 2
// /customer=2
//        ↓
// Customer 2 dashboard