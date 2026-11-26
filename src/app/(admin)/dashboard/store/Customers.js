import styles from "./dashboard.module.css";

export default async function Customers() {

  // Demo delay
  await new Promise((resolve) =>
    setTimeout(resolve, 5000)
  );


  const response = await fetch(
    "https://dummyjson.com/users?limit=5"
  );


  if (!response.ok) {
    throw new Error("Unable to fetch customers");
  }


  const data = await response.json();


  return (
    <div>

      <div className={styles.sectionHeader}>

        <div>

          <p className={styles.sectionLabel}>
            CUSTOMERS
          </p>

          <h2>Recent Customers</h2>

        </div>


        <span className={styles.countBadge}>
          {data.users.length} Customers
        </span>

      </div>


      <div className={styles.list}>

        {data.users.map((customer) => (

          <div
            className={styles.customerItem}
            key={customer.id}
          >

            <div className={styles.avatar}>

              {customer.firstName.charAt(0)}

              {customer.lastName.charAt(0)}

            </div>


            <div className={styles.customerInfo}>

              <h3>
                {customer.firstName}
                {" "}
                {customer.lastName}
              </h3>

              <p>
                {customer.email}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}