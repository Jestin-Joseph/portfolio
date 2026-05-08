import React from 'react'
import styles from "./NowCard.module.scss"

function NowCard({icon, action, description }) {
  return (
    <div className={styles.NowCard_container}>
            <div className={styles.NowCard_icon}>
                <img src={icon} alt={action} />
            </div>
            <div className={styles.NowCard_content}>
                <h3>{action}</h3>
                <p>{description}</p>
            </div>
        </div>
  )
}

export default NowCard