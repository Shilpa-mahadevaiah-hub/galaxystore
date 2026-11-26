import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">SHOP SMARTER</p>
        <h1>Welcome to Galaxy Store</h1>

        <p>
          Discover electronics, accessories and everyday essentials.
        </p>

        <Link className="button" href="/store">
          Visit Store
        </Link>
      </section>
    </main>
  );
}