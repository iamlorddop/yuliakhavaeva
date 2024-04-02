import HeaderInfo from "./HeaderInfo";
import HeaderNav from "./HeaderNav";
import HeaderSocial from "./HeaderSocial";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <HeaderInfo />
      <HeaderNav />
      <HeaderSocial />
    </header>
  );
};

export default Header;
