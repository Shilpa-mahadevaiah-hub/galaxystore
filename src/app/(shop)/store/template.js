"use client";

import { useEffect, useState } from "react";

export default function StoreTemplate({ children }) {
  const [visits, setVisits] = useState(1);

  useEffect(() => {
    console.log("Store template mounted");
  }, []);

  return (
    <div className="templateBox">
      <p>Template counter: {visits}</p>

      <button onClick={() => setVisits(visits + 1)}>
        Increase Template Counter
      </button>

      {children}
    </div>
  );
}