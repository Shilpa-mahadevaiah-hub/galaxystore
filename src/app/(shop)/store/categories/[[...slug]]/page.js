import Link from "next/link";
import { Suspense } from "react";

export default function CategoriesPage({params}) {
  return (
    <div >
    <Suspense fallback={<div>Loading Display Categories...</div>}> 
      <DisplayCategoriesPage params={params} />
      </Suspense>
    </div>
  );
}

export async function DisplayCategoriesPage({ params }) {
  const { slug } = await params;

  const selectedPath = slug ? slug.join(" > ") : "All Categories";

  return (
    <main className="container">
      <h1>Product Categories</h1>

      <div className="categoryBox">
        <p>Selected category path:</p>
        <strong>{selectedPath}</strong>
      </div>
    </main>
  );
}
