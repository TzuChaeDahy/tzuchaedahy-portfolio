import Button from "../../utils/Button/Button";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
import styles from "./style.module.css";

function handleFormSubmit(event: React.MouseEvent) {
    event.preventDefault();
}

export default function ContactMe() {
    return (
        <section className={styles.section}>
            <SectionTitle
                title="Contact Me"
                description="Reach out and connect with me"
            />
            <form className={styles.form_wrapper}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <input
                            type="text"
                            placeholder="Name"
                            className={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className={styles.input}
                        />
                    </div>
                    <textarea
                        placeholder="Project Details"
                        className={styles.text_area}
                    />
                </div>
                <Button
                    title="Send"
                    handleOnClick={handleFormSubmit}
                    secondary
                />
            </form>
        </section>
    );
}
