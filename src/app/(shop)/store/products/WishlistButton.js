"use client";

import { useWishlist } from "../../../_lib/wishlist";

export default function WishlistButton({ product }) {
  const { wishlist, toggleWishlist } = useWishlist();
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <button
      type="button"
      className="wishlistButton"
      aria-pressed={isWishlisted}
      onClick={() => toggleWishlist(product)}
    >
      {isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
    </button>
  );
}
