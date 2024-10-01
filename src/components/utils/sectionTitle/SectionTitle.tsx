import { SectionTitleProps } from ".";
import styles from "./style.module.css"

export default function SectionTitle({ title, description }: SectionTitleProps) {
    return (
        <article className={styles.wrapper}>
            <h2 className={styles.title}> {title} </h2>
            <p className={styles.subtitle}> {description} </p>
        </article>
    );
}
