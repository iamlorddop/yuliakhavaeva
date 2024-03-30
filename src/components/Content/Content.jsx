import styles from './content.module.css';
import Footer from '@/components/Footer';

const Content = () => {
    return (
        <div className={styles.container}>
            <main>
                Content
            </main>
            <Footer />
        </div>
    );
}

export default Content;