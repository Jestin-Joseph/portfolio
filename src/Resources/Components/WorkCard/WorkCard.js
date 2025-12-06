import styles from "./WorkCard.module.scss";

function WorkCard({ date, number, thumbnail, desc, title }) {
    return (
        <div className={styles.workCard_container}>
            <div className={styles.workHead}>
                <img src={thumbnail} alt="ss" />
            </div>
            <span>
                <div className={styles.workDesc_container}>
                    <p className={styles.title}>
                        {title}
                    </p>
                    <p className={styles.desc}>
                        {desc}
                    </p>
                </div>
            </span>
        </div>
    )
}

export default WorkCard