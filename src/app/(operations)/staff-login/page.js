"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function StaffLoginPage() {
  return (
    <Suspense fallback={null}>
      <StaffLoginForm />
    </Suspense>
  );
}

function StaffLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  
   const returnTo = searchParams.get("returnTo") || "/operations";

  async function signIn() {
    const response = await fetch("/api/operations/session", {
      method: "POST",
    });

    if (response.ok) {
       router.push(returnTo);
      router.refresh();
    }
  }

  return (
    <main
      style={{
        maxWidth: "450px",
        margin: "60px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        fontFamily: "Arial",
      }}
    >
      <p
        style={{
          color: "#6d28d9",
          fontWeight: "bold",
        }}
      >
        Galaxy Store STAFF
      </p>

      <h1>Staff Sign In</h1>

      <p>
        Use the demonstration session to access Operations.
      </p>
<p>
        Requested destination: {returnTo}
      </p>

      <button
        onClick={signIn}
        style={{
          padding: "12px 18px",
          border: "none",
          borderRadius: "7px",
          background: "#6d28d9",
          color: "white",
          cursor: "pointer",
        }}
      >
        Create Demo Session
      </button>
    </main>
  );
}