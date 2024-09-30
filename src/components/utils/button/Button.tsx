import { ButtonProps } from ".";
import styles from "./style.module.css";

export default function Button({
    title,
    handleOnClick,
    isSecondary = false,
}: ButtonProps) {
    const buttonClass = isSecondary ? styles.primary_btn + " " + styles.secondary_btn : styles.primary_btn;
    return (
        <button className={buttonClass} onClick={handleOnClick}>
            {title}
        </button>
    );
}
