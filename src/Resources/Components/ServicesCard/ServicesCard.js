import styles from './ServicesCard.module.scss'

function ServicesCard({ icon, title, desc }) {
    return (
        <div className={styles.service_container}>
            <span className={styles.service_icon}>
                <img src={icon} alt='icon'  />
            </span>
            <p className={styles.service_title}>{title}</p>
            <p className={styles.service_desc}>{desc}</p>
        </div>
    )
}

export default ServicesCard