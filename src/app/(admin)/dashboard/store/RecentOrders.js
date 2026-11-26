import styles from "./dashboard.module.css";

export default async function RecentOrders() {

  // Demo delay
  await new Promise((resolve) =>
    setTimeout(resolve, 2000)
  );


  const response = await fetch(
    "https://dummyjson.com/carts?limit=5"
  );


  if (!response.ok) {
    throw new Error("Unable to fetch orders");
  }


  const data = await response.json();


  return (
    <div>

      <div className={styles.sectionHeader}>

        <div>
          <p className={styles.sectionLabel}>
            SALES
          </p>

          <h2>Recent Orders</h2>
        </div>

        <span className={styles.countBadge}>
          {data.carts.length} Orders
        </span>

      </div>


      <div className={styles.list}>

        {data.carts.map((order) => (

          <div
            className={styles.orderItem}
            key={order.id}
          >

            <div>

              <h3>
                Order #{order.id}
              </h3>

              <p>
                {order.totalProducts} products
              </p>

            </div>


            <div className={styles.orderRight}>

              <strong>
                ${order.total}
              </strong>

              <span className={styles.status}>
                Confirmed
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}