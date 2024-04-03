import Link from "next/link";
import styles from "./HeaderInfo.module.css";

const HeaderInfo = () => {
  return (
    <>
      <h1 className={styles.title}>
        <Link href="/">Yulia Khavaeva</Link>
      </h1>
      <h2 className={styles.subtitle}>Front-end Developer</h2>
      <p className={styles.text}>
        I&apos;m an enthusiastic and detail-oriented Front-end Developer seeking
        an entry-level position with Company to use my skills in coding.
        Interested in learning new technologies.
      </p>
    </>
  );
};

export default HeaderInfo;
