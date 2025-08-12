// components/MinimizedIcon.js
import styles from "../styles/ChatBox.module.css";

export default function MinimizedIcon({ onClick }) {
  return (
    <button className={styles.minimizedIcon} onClick={onClick} aria-label="Open chat">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M21 15a2 2 0 0 1-2 2H8l-5 3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
