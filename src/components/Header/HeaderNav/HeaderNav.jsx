import Link from "next/link";
import styles from "./headerNav.module.css";

const HeaderNav = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#experience">Experience</Link>
        </li>
        <li>
          <Link href="#project">Project</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
