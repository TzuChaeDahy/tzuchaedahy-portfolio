import {
    buildStyles,
    CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SkillCirleProps } from ".";
import styles from "./style.module.css";

export default function SkillCircle({
    percentage,
    techSkill,
    icon,
}: SkillCirleProps) {
    return (
        <div className={styles.container}>
            <div className={styles.progress_wrapper}>
                <CircularProgressbarWithChildren
                    value={percentage}
                    styles={buildStyles({
                        pathColor: `rgba(250, 110, 0, 1)`,
                        trailColor: `rgba(254, 254, 254, 0.04)  `,
                    })}
                    counterClockwise
                >
                    {icon}
                </CircularProgressbarWithChildren>
            </div>
            <div className={styles.info_wrapper}>
                <span>{percentage}%</span>
                <span>{techSkill}</span>
            </div>
        </div>
    );
}
