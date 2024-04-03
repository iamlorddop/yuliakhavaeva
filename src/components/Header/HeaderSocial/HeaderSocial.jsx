import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import TelegramIcon from "./icons/TelegramIcon";
import CodepenIcon from "./icons/CodepenIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import MailIcon from "./icons/MailIcon";
import styles from "./HeaderSocial.module.css";

const HeaderSocial = () => {
  return (
    <address className={styles.container}>
      <Link href="https://github.com/iamlorddop">
        <GithubIcon />
      </Link>
      <Link href="https://t.me/havaevau">
        <TelegramIcon />
      </Link>
      <Link href="https://codepen.io/lorddop">
        <CodepenIcon />
      </Link>
      <Link href="https://www.linkedin.com/in/yulia-khavaeva-591096268/">
        <LinkedinIcon />
      </Link>
      <Link href="mailto:juliahavaeva7@gmail.com">
        <MailIcon />
      </Link>
    </address>
  );
};

export default HeaderSocial;
