import styles from './home.module.css';
import Header from '@/components/Header';
import Content from '@/components/Content';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Content />
    </div>
  );
}

export default HomePage;