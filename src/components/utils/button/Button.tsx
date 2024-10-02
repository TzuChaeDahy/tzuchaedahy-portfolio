import { ButtonProps } from ".";
import styles from "./style.module.css";

export default function Button({
    title,
    handleOnClick,
    secondary = false,
    icon
}: ButtonProps) {
    const buttonClass = secondary ? styles.primary_btn + " " + styles.secondary_btn : styles.primary_btn;
    return (
        <button className={buttonClass} onClick={handleOnClick}>
            {icon}
            {title}
        </button>
    );
}
