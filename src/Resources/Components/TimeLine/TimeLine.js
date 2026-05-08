import React from 'react'
import styles from "./TimeLine.module.scss"
function TimeLine({ journey }) {
    return (
        <div className={styles.TimeLine_container}>
            <div className={styles.sideline}>
                <div className={styles.sideline_circle}>

                </div>
                <div className={styles.sideline_line}>

                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.head}>{journey.head}</p>
                <p className={styles.sub_head}>{journey.subHead}</p>
                <p className={styles.sub_head1}>{journey.subHead1}</p>
                <p className={styles.desc}>{journey.desc}</p>
                {journey?.foot &&
                    <div className={styles.foot}>
                        <p>{journey?.foot}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default TimeLine