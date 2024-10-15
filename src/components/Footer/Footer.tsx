import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import ButtonIcon from "../utils/ButtonIcon/ButtonIcon";
import styles from "./style.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
            <nav className={styles.nav_container}>
                <li>
                    <a href="#home" className={styles.nav_container_link}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#services" className={styles.nav_container_link}>
                        Services
                    </a>
                </li>
                <li>
                    <a href="#about_me" className={styles.nav_container_link}>
                        About me
                    </a>
                </li>
                <li>
                    <a href="#contact_me" className={styles.nav_container_link}>
                        Contact me
                    </a>
                </li>
            </nav>
            <section className={styles.social_network_container}>
                <ButtonIcon
                    icon={<Github />}
                    onClick={() => {
                        window.open(
                            "https://www.github.com/TzuChaeDahy/",
                            "_blank"
                        );
                    }}
                />
                <ButtonIcon
                    icon={<Instagram />}
                    onClick={() => {
                        window.open(
                            "https://www.instagram.com/vinicius_pacheco13/",
                            "_blank"
                        );
                    }}
                />
                <ButtonIcon
                    icon={<Linkedin />}
                    onClick={() => {
                        window.open(
                            "https://www.linkedin.com/in/vinicius-alves-pacheco-aa2b7a220/",
                            "_blank"
                        );
                    }}
                />
            </section>
            <section className={styles.personal_info_container}>
                <div className={styles.personal_info_group}>
                    <Mail />
                    <h4 className={styles.personal_info_text}>
                        viniciusapacheco2004@gmail.com
                    </h4>
                </div>
                <div className={styles.personal_info_group}>
                    <Phone />
                    <h4 className={styles.personal_info_text}>
                        +55 (82) 9 9400-4738
                    </h4>
                </div>
            </section>
            <section className={styles.copyright_container}>
                <h4>Designed by @mahomood.fazile</h4>
                <h4>Developed by @tzuchaedahy</h4>
            </section>
        </footer>
    );
}
