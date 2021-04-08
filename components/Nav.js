import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <ul className={styles.nav}>
      <li>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </li>
      <li>
        <Link href="./blog">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="./blog">
          <a>Blog</a>
        </Link>
      </li>
    </ul>
  );
}
