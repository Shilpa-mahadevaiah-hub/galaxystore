import styles from "./OrderDisplay.module.css";

export default function OrderDisplay({
  order,
  headingLevel = "h2",
  className = "",
}) {
  const Heading = headingLevel === "h1" ? "h1" : "h2";

  return (
    <article className={`${styles.orderCard} ${className}`}>
      <header className={styles.header}>
        <div>
          <p className={styles.label}>ORDER DETAILS</p>
          <Heading className={styles.title}>Order #{order.id}</Heading>
        </div>
        <span className={styles.status}>Confirmed</span>
      </header>

      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <span>Total Products</span>
          <strong>{order.totalProducts}</strong>
        </div>
        <div className={styles.summaryItem}>
          <span>Total Quantity</span>
          <strong>{order.totalQuantity}</strong>
        </div>
        <div className={styles.summaryItem}>
          <span>Order Total</span>
          <strong className={styles.total}>${order.total}</strong>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Items in this Order</h2>
      <div className={styles.items}>
        {order.products.map((item, index) => (
          <div className={styles.item} key={`${item.id}-${index}`}>
            <div>
              <h3>{item.title}</h3>
              <p>
                ${item.price} × {item.quantity}
              </p>
            </div>
            <strong>${item.total}</strong>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <span>Order Total</span>
        <strong>${order.total}</strong>
      </footer>
    </article>
  );
}
