
import { products } from '../../../_lib/products';
import { Suspense } from 'react';
import AddProduct from './AddProduct';
import Link from 'next/link';
import WishlistButton from './WishlistButton';


export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DisplayProductsPage />
    </Suspense>
  )
}

export function DisplayProductsPage() {
  return (
    <main className="container">
      <h1>Products</h1>

      <div className="grid">
        {products.map((product) => (
          <article className="card" key={product.id}>
            <span className="badge">{product.category}</span>
            <h2>{product.name}</h2>
            <p className="price">₹{product.price.toLocaleString("en-IN")}</p>

            <Link href={`/store/products/${product.id}`}>
              View details
            </Link> <br /><br />
            <WishlistButton product={product} />
          </article>
        ))}
      </div>
      <AddProduct />
     
    </main>
  );
}
