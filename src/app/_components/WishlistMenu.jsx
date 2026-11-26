"use client";

import Link from "next/link";
import { useWishlist } from "../_lib/wishlist";

export default function WishlistMenu() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <details className="wishlistMenu">
      <summary>Wishlist ({wishlist.length})</summary>
      {wishlist.length > 0 ? (
        <ul className="wishlistMenuItems">
          {wishlist.map((product) => (
            <li key={product.id}>
              <Link href={`/store/products/${product.id}`}>{product.name}</Link>
              <button
                type="button"
                onClick={() => removeFromWishlist(product.id)}
                aria-label={`Remove ${product.name} from wishlist`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="wishlistEmpty">Your wishlist is empty.</p>
      )}
    </details>
  );
}
