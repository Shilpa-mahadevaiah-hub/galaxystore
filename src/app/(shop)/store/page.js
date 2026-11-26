import Link from "next/link";

export default function StorePage() {
  return (
    <main className="container">
      <h1>Explore Our Store</h1>
      <p>
        Our store offers a wide range of products to cater to your needs. Browse through our categories and find the perfect items for you.
        </p>
        <div className="links">
        <Link href="/store/products">View Products</Link>
        <Link href="/store/categories">View Categories</Link>
        <Link href="/store/cart">View Cart</Link>
      </div>
     </main>
  );
}
