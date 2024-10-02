import { PhotoProps } from ".";
import styles from "./style.module.css";

export default function Photo({ url, isRounded = true }: PhotoProps) {
    const backgroundClass = isRounded
        ? styles.background + " " + styles.rounded
        : styles.background + " " + styles.squared;
    return (
        <article className={styles.section}>
            <div className={backgroundClass}></div>
            <div className={styles.wrapper}>
                <img src={url} alt="photo" className={styles.image} />
            </div>
        </article>
    );
}
