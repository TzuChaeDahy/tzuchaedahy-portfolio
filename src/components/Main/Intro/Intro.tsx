import { Github, Instagram, Linkedin } from "lucide-react";
import { StatsProps } from ".";
import Button from "../../utils/Button/Button";
import Photo from "../../utils/Photo/Photo";
import styles from "./style.module.css";
import ButtonIcon from "../../utils/ButtonIcon/ButtonIcon";

function Presentation() {
    return (
        <article className={styles.presentation_container} id="home">
            <div className={styles.intro_text_container}>
                <span>Hi, i am</span>
                <h1>Vinicius Alves</h1>
            </div>
            <h2>Fullstack Developer</h2>
            <div className={styles.social_network_container}>
                <ButtonIcon icon={<Github />} />
                <ButtonIcon icon={<Instagram />} />
                <ButtonIcon icon={<Linkedin />} />
            </div>
            <div className={styles.buttons_container}>
                <Button title="Hire Me" handleOnClick={() => {}} />
                <Button
                    title="Download CV"
                    handleOnClick={() => {}}
                    secondary
                />
            </div>
            <div className={styles.stats_container}>
                <Stats title="Years of xp" years={2} />
                <Stats title="Projects done" years={5} bordered />
                <Stats title="Happy clients" years={2} />
            </div>
        </article>
    );
}

function Stats({ title, years, bordered = false }: StatsProps) {
    const statsClass = bordered
        ? styles.intern_stats_container + " " + styles.intern_stats_container_bordered
        : styles.intern_stats_container;
    return (
        <div className={statsClass}>
            <span className={styles.intern_stats_years}>{years}+</span>
            <span className={styles.intern_stats_title}>{title}</span>
        </div>
    );
}

export default function Intro() {
    return (
        <section className={styles.section}>
            <Presentation />
            <Photo url="/images/vinicius_front.png" />
        </section>
    );
}
