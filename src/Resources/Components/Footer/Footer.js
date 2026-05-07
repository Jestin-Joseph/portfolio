import React from 'react'
import styles from './Footer.module.scss'
import me from "../../../assets/image/me.jpg";
import linkedInIcon from '../../../assets/icons/linkedIn.png';
import gitHubIcon from '../../../assets/icons/github.png'
import gitHubIconWhite from '../../../assets/icons/github-white.png'
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeSettings/ThemeToggle';


function Footer() {
    const { theme } = useContext(ThemeContext);

    const handleGitHubClick = () => {
        window.open('https://github.com/Jestin-Joseph', '_blank', 'noopener,noreferrer');
    };
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/jestin-joseph01', '_blank', 'noopener,noreferrer');
    };
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer_left}>
                    <div className={styles.footer_branding}>
                        <div className={styles.meImage_container}>
                            <img src={me} alt="me icon" />
                        </div>
                        <p>Jestin Joseph</p>
                    </div>
                    <div className={styles.footer_contact}>
                        <p>jestinjoseph106@gmail.com</p>
                        <p>+1 (312) - 371 - 1451</p>
                    </div>



                </div>
                <div className={styles.footer_right}>
                    <button onClick={handleGitHubClick} className={styles.footer_icon_button}>
                        <img src={theme === 'dark' ? gitHubIconWhite : gitHubIcon} alt="GitHub Icon" />
                    </button>
                    <button onClick={handleLinkedInClick} className={styles.footer_icon_button}>
                        <img src={linkedInIcon} alt="LinkedIn Icon" />
                    </button>


                </div>
            </div>
            <div className={styles.footer_copyright}>
                <p>© Copyright, 2025 Jestin Joseph</p>
            </div>
        </>
    )
}

export default Footer