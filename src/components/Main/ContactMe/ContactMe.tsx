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
                <textarea
                    placeholder="Project Details"
                    className={styles.text_area}
                    
                />
                <Button
                    title="Send"
                    handleOnClick={handleFormSubmit}
                    secondary
                />
            </form>
        </section>
    );
}
