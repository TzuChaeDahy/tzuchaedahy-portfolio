import Intro from "./intro/Intro";
import Services from "./services/Services";
import styles from "./style.module.css";

export default function Main() {
    return (
        <main className={styles.main}>
            <Intro />
            <Services />
        </main>
    );
}
