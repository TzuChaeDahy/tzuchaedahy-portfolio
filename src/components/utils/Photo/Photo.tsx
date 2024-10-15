import { PhotoProps } from ".";
import styles from "./style.module.css";

export default function Photo({ url }: PhotoProps) {
    return (
        <article className={styles.section}>
            <div className={styles.background}></div>
            <div className={styles.wrapper}>
                <img src={url} alt="photo" className={styles.image} />
            </div>
        </article>
    );
}
