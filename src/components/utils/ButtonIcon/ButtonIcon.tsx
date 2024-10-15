import { ButtonIconProps } from ".";
import styles from "./style.module.css";

export default function ButtonIcon({ icon, onClick }: ButtonIconProps) {
    return <button className={styles.icon} onClick={onClick}>{icon}</button>;
}
