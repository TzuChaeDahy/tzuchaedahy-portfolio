import { Github, Linkedin } from "lucide-react";
import { StatsProps } from ".";
import Button from "../../utils/Button/Button";
import Photo from "../../utils/Photo/Photo";
import styles from "./style.module.css";

function Presentation() {
    return (
        <article className={styles.intro_wrapper}>
            <div className={styles.presentation_wrapper}>
                <span>Hi, i am</span>
                <h2>Vinicius Alves</h2>
            </div>
            <h1>Fullstack Developer</h1>
            <div className={styles.icon_wrapper}>
                <button className={styles.icon}>
                    <Github />
                </button>
                <button className={styles.icon}>
                    <Linkedin />
                </button>
            </div>
            <div className={styles.button_wrapper}>
                <Button title="Hire Me" handleOnClick={() => {}} />
                <Button
                    title="Download CV"
                    handleOnClick={() => {}}
                    secondary
                />
            </div>
            <div className={styles.stats_wrapper}>
                <Stats title="Years of xp" years={2} />
                <Stats title="Projects done" years={5} bordered />
                <Stats title="Happy clients" years={2} />
            </div>
        </article>
    );
}

function Stats({ title, years, bordered = false }: StatsProps) {
    const statsClass = bordered
        ? styles.stats_container + " " + styles.bordered
        : styles.stats_container;
    return (
        <div className={statsClass}>
            <span className={styles.stats_years}>{years}+</span>
            <span className={styles.stats_title}>{title}</span>
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