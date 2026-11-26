import Link from "next/link";
import styles from "./layout.module.css";

const inventoryRoutes = [
  { href: "/inventory-summary", label: "Inventory summary" },
  { href: "/live-inventory", label: "Live inventory" },
  { href: "/cached-inventory", label: "Cached inventory" },
  { href: "/store-status", label: "Store status" },
  { href: "/deals", label: "Deals" },
  { href: "/inventory-admin", label: "Inventory admin" },
  { href: "/cached-local-inventory", label: "Cached local inventory" },
];

export default function InventoryOperationsLayout({ children }) {
  return (
    <div className={styles.layout}>
      <nav className={styles.navigation} aria-label="Inventory operations">
        <span className={styles.navigationLabel}>Inventory operations</span>
        <div className={styles.links}>
          {inventoryRoutes.map((route) => (
            <Link className={styles.link} href={route.href} key={route.href}>
              {route.label}
            </Link>
          ))}
        </div>
      </nav>
      {children}
    </div>
  );
}
