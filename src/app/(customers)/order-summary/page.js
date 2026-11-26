import { Suspense } from "react";
import Image from "next/image";
export default function OrderSummary() {
  return (
    <Suspense fallback={<div>Loading order summary...</div>}>
      <OrderSummaryContent />
    </Suspense>
  );
}

async function OrderSummaryContent() {
  // Request 1
  const orderResponse = await fetch(
    "https://dummyjson.com/carts/1"
  );

  const order = await orderResponse.json();


  // Request 2 depends on order.userId
  const customerResponse = await fetch(
    `https://dummyjson.com/users/${order.userId}`
  );

  const customer =
    await customerResponse.json();


  return (
    <main>

      <h1>Order Summary</h1>

      <h2>Order #{order.id}</h2>

      <p>
        Order Total: ${order.total}
      </p>


      <h2>Customer</h2>

      <p>
        {customer.firstName}
        {" "}
        {customer.lastName}
      </p>

      <p>{customer.email}</p>

    </main>
  );
}