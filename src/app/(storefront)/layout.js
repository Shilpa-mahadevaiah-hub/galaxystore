import Link from "next/link";


export default function StorefrontLayout({ children }) {
  return (
    <div>

      <nav
        style={{
          padding: "16px 30px",
          backgroundColor: "#1f2937",
          display: "flex",
          gap: "24px"
        }}
      >

        <Link
          href="/about-store"
          style={{ color: "white" }}
        >
          About
        </Link>

        <Link
          href="/promotions"
          style={{ color: "white" }}
        >
          Promotions
        </Link>

        <Link
          href="/account-dashboard"
          style={{ color: "white" }}
        >
          Account
        </Link>

        <Link
          href="/analytics-dashboard"
          style={{ color: "white" }}
        >
          Dashboard
        </Link>

      </nav>

      {children}

    </div>
  );
}