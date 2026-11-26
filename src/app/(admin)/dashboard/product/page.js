import "./page.css";
import { Suspense } from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="container">
      <h1>Sequential Data Fetching</h1>
      <Suspense fallback={<p>Loading products...</p>}>
        <SequentialProducts />
      </Suspense>
    </div>
  );
}

async function SequentialProducts() {
  // First API call
  const response1 = await fetch(
    "https://dummyjson.com/products/1"
  );
  const product = await response1.json();

  // Second API call depends on first API call
  const response2 = await fetch(
    `https://dummyjson.com/products/category/${product.category}`
  );

  const categoryData = await response2.json();

  return (
    <>
      <div className="productCard">
        <h2>Selected Product</h2>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
          loading="eager"
        />
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
      </div>

      <h2>Similar Products</h2>
      <div className="productList">
        {categoryData.products.map((item) => (
          <div className="card" key={item.id}>
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={200}
              height={200}
              loading="eager"
            />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>

        ))}
      </div>
    </>
  );
}

// GET /products/1
//        ↓
// Find category
//        ↓
// GET /products/category/{category}
//        ↓
// Display