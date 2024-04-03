import Link from "next/link";
import styles from "./headerNav.module.css";

const HeaderNav = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link href="#about" className={styles.link}>
            <span className={styles.dash}></span>
            <span className={styles.linkText}>About</span>
          </Link>
        </li>
        <li>
          <Link href="#experience" className={styles.link}>
            <span className={styles.dash}></span>
            <span className={styles.linkText}>Experience</span>
          </Link>
        </li>
        <li>
          <Link href="#projects" className={styles.link}>
            <span className={styles.dash}></span>
            <span className={styles.linkText}>Projects</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
