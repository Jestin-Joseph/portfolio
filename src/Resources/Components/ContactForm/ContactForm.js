import React from 'react'
import styles from './ContactForm.module.scss'

import JButton from '../JButton/JButton'

function ContactForm() {
    return (
        <div className={styles.contatForm_container}>
            <div className={styles.name}>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Last Name' />
            </div>

            <div className={styles.email}>
                <input type='email' placeholder='E-mail' />
            </div>

            <textarea className={styles.message} placeholder='Type your message here...'>

            </textarea>
            <div className={styles.talkButton}>
                <JButton
                    buttonText={"Let's Talk"}
                    classStyle={{fontSize: "0.8rem", }}
                />
            </div>

        </div>
    )
}

export default ContactForm