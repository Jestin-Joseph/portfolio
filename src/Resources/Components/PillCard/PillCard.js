import React from 'react'
import styles from "./PillCard.module.scss"

function PillCard({ item, icon }) {
    return (
        <div className={styles.pill_card}>
            <div style={{height: item==="Cooking" ? '1.5em ': "", width: item==="Cooking" ? '1.5em ': ""}} className={styles.pill_icon}>
                <img src={icon} alt='item' />
            </div>
            {item}
        </div>
    )
}

export default PillCard