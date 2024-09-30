import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Photo from "./components/photo/Photo";
import styles from "./style.module.css"

export default function App() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.first_section}>
                    <Intro />
                    <Photo />
                </section>
            </main>
        </>
    );
}
