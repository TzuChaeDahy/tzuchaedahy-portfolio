import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import ButtonIcon from "../utils/ButtonIcon/ButtonIcon";
import styles from "./style.module.css";

export default function Footer() {
    return (
        <footer>
            <img src="/assets/logo.svg" alt="logo" />
            <nav>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">About me</a>
                </li>
                <li>
                    <a href="#">Contact me</a>
                </li>

            </nav>
            <section className={styles.social_network_wrapper}>
                <ButtonIcon icon={<Github />} />
                <ButtonIcon icon={<Instagram />} />
                <ButtonIcon icon={<Linkedin />} />
            </section>
            <section className={styles.info_wrapper}>
                <Mail />
                <h4>viniciusapacheco2004@gmail.com</h4>
            </section>
            <section className={styles.info_wrapper}>
                <Phone />
                <h4>+55 (82) 9 9400-4738</h4>
            </section>
            <section className={styles.copyright_wrapper}>
                <h4>Designed by @mahomood.fazile</h4>
                <h4>Developed by @tzuchaedahy</h4>
            </section>
        </footer>
    );
}
