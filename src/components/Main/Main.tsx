import AboutMe from "./About/AboutMe";
import Intro from "./Intro/Intro";
import Services from "./Services/Services";
import styles from "./style.module.css";

export default function Main() {
    return (
        <main className={styles.main}>
            <Intro />
            <Services />
            <AboutMe />
        </main>
    );
}
