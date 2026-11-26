import { getStoreInformation } from "../../_lib/store-info";
import styles from "../inventory.module.css";

export default async function StoreInformation() {
  const store = await getStoreInformation();

  return (
    <section className={styles.card}>
      <p className={styles.eyebrow}>Store information</p>
      <h2 className={styles.cardTitle}>{store.name}</h2>
      <p className={styles.muted}>{store.deliveryMessage}</p>
      <p className={styles.productStock}>
        <span>Return period</span>
        <strong>{store.returnPeriod} days</strong>
      </p>
    </section>
  );
}