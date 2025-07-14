import styles from "./MainView.module.scss";
import me from "../../assets/image/me.jpg";
import { ThemeToggle } from "../ThemeSettings/ThemeToggle";
import { useNavigate, useLocation } from 'react-router-dom';

//components
import JButton from "../Components/JButton/JButton";
import ServicesCard from "../Components/ServicesCard/ServicesCard";
import WorkCard from "../Components/WorkCard/WorkCard";
import ContactForm from "../Components/ContactForm/ContactForm";

//data
import { services_given } from "../Data/services";
import { works } from "../Data/works";

//images
import nodeIcon from "../../assets/icons/original node.png";
import reactIcon from "../../assets/icons/original react.png";
import pyIcon from "../../assets/icons/original python.png";
import figIcon from "../../assets/icons/original figma.png";
import goIcon from "../../assets/icons/go.png"

//icons
import { MailOpen } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Linkedin } from 'lucide-react';



function MainView() {
    const navigate = useNavigate();
    const location = useLocation()
    const menuItems = [
        { name: 'Home', path: '/home' },
        { name: 'About', path: '/about' },
        { name: 'Resume', path: '/resume' },
    ];
    return (
        <div className={styles.MainView_container}>
            <header>
                <div className={styles.myImage_icon}>
                    <img src={me} alt="me icon" />
                </div>
                <div className={styles.navItems}>
                    {
                        menuItems.map((menuItem) => (
                            <button
                                key={menuItem.name}
                                onClick={() => { navigate(menuItem.path) }}
                                style={{ color: location.pathname === menuItem.path ? 'var(----menu-items-selected)' : '' }}

                            >
                                {menuItem.name}
                            </button>
                        ))
                    }

                </div>
                <ThemeToggle />
            </header>
            <div className={styles.intro_container}>
                <div className={styles.intro_para}>
                    <p>Hello, I'm Jestin Joseph</p>
                    <p>A passionate Software Engineer from India, currently based in Chicago, Illinois. I Specialize in building scalable
                        <strong>web applications</strong> and crafting clean, <strong>efficient code</strong>. With a strong foundation in
                        <strong>full-stack development</strong> and a keen interest in solving real-world problems through technology, I love
                        turning ideas into impactful digital experiences.
                    </p>
                </div>
                <div className={styles.intro_pic_container}>
                    <div className={styles.intro_pic}>
                        <img src={me} alt="my imgae" />
                    </div>
                    <svg viewBox="0 0 200 200" class={styles.text_circle}>
                        <defs>
                            <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"  />
                        </defs>
                        <text font-size="5.5" fill='var(--menu-items-selected)'>
                            <textPath href="#circlePath" startOffset="0">
                            • FULL STACK DEVELOPER • BASED IN CHICAGO 
                            </textPath>
                        </text>
                    </svg>
                    {/* <svg viewBox="0 0 200 200" class={styles.text_circle} style={{ transform: "rotate(180deg)" }}>
                        <defs>
                            <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                        </defs>
                        <text font-size="6" fill='var(--menu-items-selected)'>
                            <textPath href="#circlePath" startOffset="50%" >
                            • BASED IN CHICAGO •
                            </textPath>
                        </text>
                    </svg> */}
                </div>


            </div>
        </div>
    )
}

export default MainView