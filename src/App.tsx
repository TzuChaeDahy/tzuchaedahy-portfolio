import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import styles from "./style.module.css";

export default function App() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Intro />
            </main>
        </>
    );
}
