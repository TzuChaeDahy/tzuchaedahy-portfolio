import { Cpu, MessageSquareCode, Smartphone, Waypoints } from "lucide-react";
import { ServiceProps } from ".";
import SectionTitle from "../../utils/sectionTitle/SectionTitle";
import styles from "./style.module.css";

function Service({ title, description, icon }: ServiceProps) {
    return (
        <div className={styles.service_wrapper}>
            <span className={styles.service_icon}>{icon}</span>
            <h1 className={styles.service_title}>{title}</h1>
            <p className={styles.service_description}>{description}</p>
        </div>
    );
}

export default function Services() {
    return (
        <section className={styles.services_container}>
            <SectionTitle
                title="Services"
                description="Watch out below some services i can offer to you"
            />
            <article className={styles.services_wrapper}>
                <Service
                    title="Landing Page"
                    description="Develop a responsive and interactive landing page"
                    icon={<MessageSquareCode size={40} />}
                />
                <Service
                    title="API"
                    description="Build an API, so you can integrate it in your app"
                    icon={<Cpu size={40} />}
                />
                <Service
                    title="Mobile"
                    description="Create an Android/iOS mobile app to you"
                    icon={<Smartphone size={40} />}
                />

                <Service
                    title="Deployment"
                    description="Deploy your system using the most updated frameworks"
                    icon={<Waypoints size={40} />}
                />
            </article>
        </section>
    );
}
