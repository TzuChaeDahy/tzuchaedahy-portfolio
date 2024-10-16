import { useReducer } from "react";
import Button from "../../utils/Button/Button";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
import { FormInfo, formReducer, ReducerActionType } from "./index";
import styles from "./style.module.css";

export default function ContactMe() {
    const emptyFormInfo: FormInfo = {
        name: "",
        email: "",
        description: "",
    };

    const [state, dispatch] = useReducer(formReducer, emptyFormInfo);

    return (
        <section className={styles.section} id="contact_me">
            <SectionTitle
                title="Contact Me"
                description="Reach out and connect with me"
            />
            <form className={styles.form_wrapper}>
                <div className={styles.container}>
                    <input
                        type="text"
                        placeholder="Name"
                        className={styles.input}
                        onChange={(newValue) => {
                            dispatch({
                                type: ReducerActionType.NAME,
                                payload: {
                                    ...state,
                                    name: newValue.target.value,
                                },
                            });
                        }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className={styles.input}
                        onChange={(newValue) => {
                            dispatch({
                                type: ReducerActionType.EMAIL,
                                payload: {
                                    ...state,
                                    email: newValue.target.value,
                                },
                            });
                        }}
                    />
                    <textarea
                        placeholder="Project Details"
                        className={styles.text_area}
                        onChange={(newValue) => {
                            dispatch({
                                type: ReducerActionType.DESCRIPTION,
                                payload: {
                                    ...state,
                                    description: newValue.target.value,
                                },
                            });
                        }}
                    />
                </div>
                <Button title="Send" handleOnClick={() => {}} secondary />
            </form>
        </section>
    );
}
