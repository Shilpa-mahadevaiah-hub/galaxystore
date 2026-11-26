import { headers } from "next/headers";
import styles from "../inventory.module.css";

export default async function CurrentRequest() {
  const headerStore = await headers();

  const language =
    headerStore.get("accept-language") || "Not provided";

  return (
    <section className={styles.card}>
      <p className={styles.eyebrow}>Request details</p>
      <h2 className={styles.cardTitle}>Current request</h2>
      <p className={styles.muted}>
        The preferred language sent by your browser for this request.
      </p>
      <p className={styles.productStock}>
        <span>Preferred language</span>
        <strong>{language}</strong>
      </p>
    </section>
  );
}