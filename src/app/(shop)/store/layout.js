"use client";

import Link from "next/link";
import { useState } from "react";
import WishlistMenu from "../../_components/WishlistMenu";
import { WishlistProvider } from "../../_lib/wishlist";

export default function StoreLayout({ children }) {
  const [search, setSearch] = useState("");

  return (
    <WishlistProvider>
      <div>
        <header className="storeHeader">
          <Link className="brand" href="/store">
            Store
          </Link>

          <input
            className="search"
            type="text"
            placeholder="Search products"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <nav>
            <Link href="/store/products">Products</Link>
            <Link href="/store/categories">Categories</Link>
            <Link href="/store/cart">Cart</Link>
            <WishlistMenu />
          </nav>
        </header>

        {children}
      </div>
    </WishlistProvider>
  );
}