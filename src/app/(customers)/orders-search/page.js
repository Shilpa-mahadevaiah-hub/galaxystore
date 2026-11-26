"use client";

import { useState } from "react";
import OrderDisplay from "../orders/OrderDisplay";
import styles from "./orderSearch.module.css";

export default function OrderSearchPage() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  async function searchOrder() {

    // Validate input
    if (!orderId) {
      setError("Please enter an Order ID.");
      return;
    }


    try {

      // Start loading
      setLoading(true);

      // Clear previous result/error
      setError("");
      setOrder(null);


      // Client-side API call
      const response = await fetch(
        `https://dummyjson.com/carts/${orderId}`
      );


      // Handle invalid order
      if (!response.ok) {
        throw new Error("Order not found.");
      }


      const data = await response.json();

      // Store API response
      setOrder(data);

    } catch (error) {

      setError(error.message);

    } finally {

      // Stop loading
      setLoading(false);

    }
  }


  return (
    <main className={styles.container}>

      <div className={styles.searchBox}>

        <p className={styles.label}>
         Galaxy Store - Order Search
        </p>

        <h1>Track Your Order</h1>

        <p className={styles.description}>
          Enter your Order ID to view order details.
        </p>


        <div className={styles.searchArea}>

          <input
            type="number"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(event) =>
              setOrderId(event.target.value)
            }
          />

          <button
            onClick={searchOrder}
            disabled={loading}
          >

            {loading
              ? "Searching..."
              : "Search Order"}

          </button>

        </div>


        {/* Loading Message */}

        {loading && (

          <div className={styles.loading}>
            Searching for your order...
          </div>

        )}


        {/* Error Message */}

        {error && (

          <div className={styles.error}>
            {error}
          </div>

        )}

      </div>


      {/* Order Result */}

      {order && (
        <OrderDisplay
          order={order}
          className={styles.orderResult}
        />
      )}

    </main>
  );
}