import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with{" "}
      <img
        src="../Assets/nextjs-black-logo.svg"
        alt="Next Logo"
        className={styles.logo}
      />{" "}
      for you!
    </footer>
  );
}
