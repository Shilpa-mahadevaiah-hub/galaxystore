import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container">
      <h1>Product not found</h1>
      <p>The requested product does not exist.</p>
      <Link href="/store/products">Return to products</Link>
    </main>
  );
}