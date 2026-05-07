import React from 'react'
import styles from './SkillsContainer.module.scss'

function SkillItem({ number, skill, description, icons }) {
    return (
        <div className={styles.skillITem_container}>
            <div className={styles.skillItem_number}>
                <p>{number}</p>
            </div>
            <div className={styles.skillItem_content}>
                <h3>{skill}</h3>
                <p>{description}</p>
                <div className={styles.skill_item_icons}>
                    {icons?.map((icon, index) => (
                        <img key={`${skill}-icon-${index}`} src={icon} alt={`${skill} icon ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillItem