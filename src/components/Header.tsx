import styles from "../CSS/Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/src/assets/rocket.svg" alt="logo" />
      <strong className={styles.to}>to</strong>
      <strong className={styles.do}>do</strong>
    </header>
  );
}
