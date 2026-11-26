"use client";

import { useState } from "react";

export default function CartPanel({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>

      <button onClick={() => setOpen(!open)}>
        {open ? "Hide Cart" : "Show Cart"}
      </button>

      {open && (
        <div>
          {children}
        </div>
      )}

    </div>
  );
}