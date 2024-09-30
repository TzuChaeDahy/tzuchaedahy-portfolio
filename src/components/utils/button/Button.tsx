import { ButtonProps } from ".";
import styles from "./style.module.css";

export default function Button({
    title,
    handleOnClick,
    secondary = false,
}: ButtonProps) {
    const buttonClass = secondary ? styles.primary_btn + " " + styles.secondary_btn : styles.primary_btn;
    return (
        <button className={buttonClass} onClick={handleOnClick}>
            {title}
        </button>
    );
}
