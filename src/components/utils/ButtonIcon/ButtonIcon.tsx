import { ButtonIconProps } from ".";
import styles from "./style.module.css";

export default function ButtonIcon({ icon }: ButtonIconProps) {
    return <button className={styles.icon}>{icon}</button>;
}
