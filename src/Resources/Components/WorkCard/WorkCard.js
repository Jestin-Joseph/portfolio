import styles from "./WorkCard.module.scss";
import JButton from "../JButton/JButton";

function WorkCard({ thumbnail, desc, title }) {
    return (
        <div className={styles.workCard_container}>
            <span className={styles.workImage_container}>
                <img src={thumbnail} alt="ss" />
            </span>
            <div className={styles.workDesc_container}>
                <p className={styles.title}>
                    {title}
                </p>
                <p className={styles.desc}>
                    {desc}
                </p>
            </div>
            <div className={styles.workBtn_container}>
                <JButton
                    buttonText={"view"}
                    classStyle={{ width: "5rem", padding: "0.5rem" }}
                />
            </div>
        </div>
    )
}

export default WorkCard