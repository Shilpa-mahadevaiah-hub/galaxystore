import CartPanel from './CartPanel';
import CartSummary from './CartSummary';

export default function CartPage() {
  return (
    <main className="container">
      <h1>Shopping Cart</h1>
      {/* <p>Your shopping cart is currently empty.</p> */}
      <CartPanel>
        <CartSummary />
      </CartPanel>
    </main>
  );
}