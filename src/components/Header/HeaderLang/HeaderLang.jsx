import styles from "./HeaderLang.module.css";

/**
 * @param {String} lang
 * @return {HTMLButtonElement}
 */
const HeaderLang = ({ lang }) => {
  return <button className={styles.button}>{lang}</button>;
};

export default HeaderLang;
