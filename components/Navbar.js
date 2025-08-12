// components/Navbar.js
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.logo}>💬</div>
        <span className={styles.title}>ChatMorph</span>
      </div>

      <nav className={styles.nav}>
        <Link href="/">Full Chat</Link>
        <Link href="/docked">Docked Chat</Link>
      </nav>
    </header>
  );
}
