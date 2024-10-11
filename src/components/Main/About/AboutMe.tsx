import {
    AmazonLogo,
    Atom,
    Coffee,
    DownloadSimple,
    GoogleLogo,
} from "@phosphor-icons/react";
import "react-circular-progressbar/dist/styles.css";
import Button from "../../utils/Button/Button";
import Photo from "../../utils/Photo/Photo";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
import SkillCircle from "./SkillCirle/SkillCircle";
import styles from "./style.module.css";

function Presenting() {
    return (
        <div className={styles.presenting_container}>
            <p className={styles.presenting_text}>
                Hello! My name is Vinicius Alves Pacheco, and I am a Junior
                Fullstack Developer with a deep passion for technology and
                software development. I am currently pursuing a degree in
                Information Systems at the Federal Institute of Alagoas (IFAL)
                in Arapiraca, where I also completed my technical high school in
                Electronics.
            </p>
            <p className={styles.presenting_text}>
                My programming journey began early during my technical
                education, where I developed a strong interest in systems and
                technology. Since then, I have been dedicated to expanding my
                knowledge and skills through both formal education and practical
                experiences.
            </p>
            <p className={styles.presenting_text}>
                During my undergraduate studies, I had the opportunity to work
                as a Backend Development Monitor at DIT - IFAL. There, I
                developed various APIs using Go and PostgreSQL, following
                Hexagonal Architecture and agile methodologies like Scrum. This
                experience was crucial for my professional growth, allowing me
                to apply theoretical concepts to real projects.
            </p>
            <p className={styles.presenting_text}>
                Additionally, I had the privilege of interning at CompassUOL as
                a Java Developer, focusing on developing e-commerce APIs with
                Spring Boot and PostgreSQL, and learning about deploying these
                applications using AWS technologies such as EC2, S3, and RDS.
            </p>
            <p className={styles.presenting_text}>
                My technical skill set includes Spring Boot, Angular, React,
                Golang, MongoDB, and PostgreSQL, along with AWS experience. I am
                a problem solver, organized, with critical thinking and
                proactivity, always seeking to adapt and learn from different
                situations.
            </p>
            <p className={styles.presenting_text}>
                I am excited to continue my journey in software development,
                always striving for innovation and excellence. If you are
                looking for a dedicated professional passionate about
                technology, I would love to share more about my experiences and
                how I can contribute to your project.
            </p>
        </div>
    );
}

export default function AboutMe() {
    return (
        <section className={styles.section}>
            <SectionTitle
                title="About Me"
                description="Know a bit more about my path as a developer"
            />
            <article className={styles.about_me_container}>
                <div className={styles.photo_container}>
                <Photo url="/images/vinicius_side.png" isRounded={false} />
                </div>
                <div className={styles.about_me_text_container}>
                    <Presenting />
                    <Button
                        title="Download CV"
                        handleOnClick={() => {}}
                        icon={<DownloadSimple size={24} weight="bold" />}
                    />
                </div>
            </article>
            <article className={styles.skills_container}>
                <SkillCircle
                    percentage={70}
                    icon={<Coffee size={40} className={styles.icon} />}
                    techSkill="Spring Boot"
                />
                <SkillCircle
                    percentage={50}
                    icon={<Atom size={40} className={styles.icon} />}
                    techSkill="React"
                />
                <SkillCircle
                    percentage={60}
                    icon={<AmazonLogo size={40} className={styles.icon} />}
                    techSkill="AWS"
                />
                <SkillCircle
                    percentage={40}
                    icon={<GoogleLogo size={40} className={styles.icon} />}
                    techSkill="Golang"
                />
            </article>
        </section>
    );
}
