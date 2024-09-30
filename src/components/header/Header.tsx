import { AlignJustify } from "lucide-react";
import Button from "../utils/button/Button";
import styles from "./style.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <AlignJustify />
                <img src="/assets/logo.svg" alt="logo" />
                <Button
                    title="Hire Me"
                    handleOnClick={() => console.log("teste")}
                />
            </div>
        </header>
    );
}
