import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import WishlistButton from "../WishlistButton";

export async function fetchProduct(id) {
  const response = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store"
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Unable to fetch product");
  }

  return response.json();
}


export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = await fetchProduct(id);

  return {
    title: `${product.name} - Galaxy Store`,
    description: product.description
  };
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (id === "500") {
    throw new Error("Product service is temporarily unavailable");
  }

  const product = await fetchProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/store/products">← Back to products</Link>

      <article className="detailsCard">
         <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={350}
      />
        <span className="badge">{product.category}</span>
        <h1>{product.name}</h1>

        <p className="price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <p>{product.description}</p>
        <WishlistButton product={product} />
      </article>
    </main>
  );
}