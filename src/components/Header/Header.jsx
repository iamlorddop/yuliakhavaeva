import HeaderInfo from "./HeaderInfo";
import HeaderNav from "./HeaderNav";
import HeaderLang from "./HeaderLang";
import HeaderSocial from "./HeaderSocial";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <HeaderInfo />
        <HeaderNav />
      </div>
      <div>
        <div className={styles.buttons}>
          <HeaderLang lang="en" />
          <HeaderLang lang="ru" />
        </div>
        <HeaderSocial />
      </div>
    </header>
  );
};

export default Header;
