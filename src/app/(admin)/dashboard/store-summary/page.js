import "./page.css";
import { Suspense } from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="container">
      <h1>Parallel Data Fetching</h1>
      <Suspense fallback={<p>Loading products and customers...</p>}>
        <ParallelData />
      </Suspense>
    </div>
  );
}

async function ParallelData() {
  // Both API calls start at the same time
  const [productsResponse, usersResponse] = await Promise.all([
    fetch("https://dummyjson.com/products?limit=3"),
    fetch("https://dummyjson.com/users?limit=3")
  ]);

  const productsData = await productsResponse.json();
  const usersData = await usersResponse.json();

  return (
    <>
      <h2>Products</h2>
      <div className="cardContainer">
        {productsData.products.map((product) => (
          <div className="card" key={product.id}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={150}
              height={120}
              loading="eager"
            />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>


      <h2>Customers</h2>
      <div className="cardContainer">
        {usersData.users.map((user) => (
          <div className="userCard" key={user.id}>
            <Image
              src={user.image}
              alt={user.firstName}
              width={90}
              height={90}
            />
            <h3> {user.firstName} {user.lastName}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}
// Promise.all()
//                   │
//           ┌───────┴────────┐
//           ↓                ↓
//    Products API        Users API
//           ↓                ↓
//        Products          Users
//           └───────┬────────┘
//                   ↓
//               Render UI