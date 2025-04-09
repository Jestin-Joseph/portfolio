import styles from "./WorkCard.module.scss";
import JButton from "../JButton/JButton";

function WorkCard({ date, number, thumbnail, desc, title }) {
    return (
        <div className={styles.workCard_container}>
            <div className={styles.workHead}>
                <div className={styles.title_date}>
                    <p className={styles.title}>
                        {number}. {title}
                    </p>
                    <p className={styles.date}>
                        {date}
                    </p>
                </div>
                <span className={styles.work_thumbnail}>
                    <img src={thumbnail} alt="ss" />
                </span>
            </div>
            <span>
                <div className={styles.workDesc_container}>

                    <p className={styles.desc}>
                        {desc}
                    </p>
                </div>
            </span>
        </div>
    )
}

export default WorkCard