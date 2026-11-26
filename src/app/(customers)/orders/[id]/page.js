import Link from "next/link";
import { Suspense } from "react";
import OrderDisplay from "../OrderDisplay";
import styles from "./orderDetails.module.css";

export default function OrderDetails({ params }) {
    return (
        <Suspense fallback={<div>Loading order details...</div>}>
            <OrderDetailsContent params={params} />
        </Suspense>
    );
}

async function OrderDetailsContent({ params }) {
    const { id } = await params;

    const response = await fetch(
        `https://dummyjson.com/carts/${id}`
    );

    const order = await response.json();

    return (
        <main className={styles.container}>
            <Link
                href="/orders"
                className={styles.backLink}>
                ← Back to Orders
            </Link>
            <OrderDisplay order={order} headingLevel="h1" />
        </main>
    );
}