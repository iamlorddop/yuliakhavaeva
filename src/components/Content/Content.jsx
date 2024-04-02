import styles from './content.module.css';
import Footer from '@/components/Footer';

const Content = () => {
    return (
        <main className={styles.container}>
            <div>
                Content
            </div>
            <Footer />
        </main>
    );
}

export default Content;