"use client";

export default function Error({ reset }) {
  return (
    <main className="container">
      <h1>Something went wrong</h1>
      <p>We could not load the product.</p>

      <button className="button" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}