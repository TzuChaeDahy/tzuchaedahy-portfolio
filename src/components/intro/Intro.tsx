import { motion, useAnimation, useInView } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";
import { StatsProps } from ".";
import Button from "../utils/button/Button";
import styles from "./style.module.css";

const presentationVariants = {
    hidden: {
        x: 75,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 1.5,
            type: "spring",
            stiffness: 40,
        },
    },
};

function Presentation() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const motionControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            motionControls.start("visible")
        }
    }, [isInView]);

    return (
        <motion.article
            className={styles.intro_wrapper}
            variants={presentationVariants}
            initial="hidden"
            animate={motionControls}
            ref={ref}
        >
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
        </motion.article>
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

const photoVariants = {
    hidden: {
        x: -75,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 1.5,
            type: "spring",
            stiffness: 40,
        },
    },
};

function Photo() {
    return (
        <motion.article
            className={styles.photo_wrapper}
            variants={photoVariants}
            initial="hidden"
            animate="visible"
        >
            <div className={styles.photo_background}>
                <img
                    src="/images/vinicius.png"
                    alt="vinicius"
                    className={styles.photo_image}
                />
            </div>
        </motion.article>
    );
}

export default function Intro() {
    return (
        <section className={styles.section}>
            <Presentation />
            <Photo />
        </section>
    );
}
