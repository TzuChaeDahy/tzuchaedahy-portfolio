import styles from "./style.module.css";

export default function Photo() {
    return (
        <article className={styles.wrapper}>
            <div className={styles.background}>
                <img
                    src="/images/vinicius.png"
                    alt="vinicius"
                    className={styles.image}
                />
            </div>
        </article>
    );
}
