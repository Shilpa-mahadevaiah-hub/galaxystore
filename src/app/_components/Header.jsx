import Image from "next/image"; 
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src="/storelogo.png" alt="Galaxy Store Logo" width={40} height={40} />
      <h1 className={styles.title}>Galaxy Store</h1>
      <hr/>
    </header>
  );
}