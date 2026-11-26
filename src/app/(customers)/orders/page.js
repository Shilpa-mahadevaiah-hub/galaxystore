import Link from "next/link";
import styles from "./orders.module.css";
import { Suspense } from 'react';

export default async function OrdersPage() {
return(
    <Suspense fallback={<div>Loading...</div>}>
      <OrdersComponent />
    </Suspense> 
  )
}

export  async function OrdersComponent() {

  const response = await fetch(
    "https://dummyjson.com/carts?limit=5"
  );

  const data = await response.json();

  return (
    <main className={styles.container}>

      <div className={styles.header}>
        <p className={styles.label}> Galaxy store - Customer Orders</p>
        <p>View your recent orders and order details.</p>
      </div>


      <div className={styles.orderGrid}>
        {data.carts.map((order) => (<div
          className={styles.orderCard}
          key={order.id}>
          <div className={styles.cardHeader}>
            <h2>Order #{order.id}</h2>
            <span className={styles.status}>Confirmed</span>
          </div>
          <div className={styles.orderInfo}>
            <div>
              <span>Items</span>
              <strong>{order.totalProducts} </strong>
            </div>
            <div> <span>Quantity</span>
              <strong>{order.totalQuantity}</strong>
            </div>
            <div> <span>Order Total</span>
              <strong> ${order.total} </strong> </div>
          </div>
          <Link href={`/orders/${order.id}`} className={styles.button}>
            View Order Details
          </Link>
        </div>
        ))}
      </div>
    </main>
  );
}