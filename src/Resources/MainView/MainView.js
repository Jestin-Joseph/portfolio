import styles from "./MainView.module.scss";
import me from "../../assets/image/me.jpg";
import { ThemeToggle } from "../ThemeSettings/ThemeToggle";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from "react";

//components
import WorkCard from "../Components/WorkCard/WorkCard";
// import ContactForm from "../Components/ContactForm/ContactForm";
import MobileMenu from "../Components/MobileMenu/MobileMenu";
import SkillItem from "../Components/SkillsContainer/SkillsContainer";


//images
import nodeIcon from "../../assets/icons/original node.png";
import reactIcon from "../../assets/icons/original react.png";
import pyIcon from "../../assets/icons/original python.png";
import figIcon from "../../assets/icons/original figma.png";
import goIcon from "../../assets/icons/go.png"
import flutterIcon from "../../assets/icons/flutterLogo.png";

//icons
import BulletPoint from "../Components/BulletPoint/BulletPoint";
import { Menu } from 'lucide-react';

// Project Data
import TaskManagerImg from "../../assets/screenshots/TaskManagerThumbnail.png"
import PillAngelImg from "../../assets/screenshots/PillAngelThumbnail.png"
import Footer from "../Components/Footer/Footer";

export const menuItems = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Resume', navigate: 'https://docs.google.com/document/d/1KrtrsKs81BOYyYQ4hHK8AhTak1TIKttWZYO3wL8rEAk/edit?usp=sharing' },
];

function MainView() {
    const navigate = useNavigate();
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    return (
        <div className={styles.MainView_container}>
            {/* header desktop view */}
            <header>
                <div className={styles.myImage_icon}>
                    <img src={me} alt="me icon" />
                </div>
                <div className={styles.navItems}>
                    {
                        menuItems.map((menuItem) => (
                            <button
                                key={menuItem.name}
                                onClick={() => { menuItem.path ? navigate(menuItem.path) : window.open(menuItem.navigate, '_blank') }}
                                style={{ color: location.pathname === menuItem.path ? 'var(----menu-items-selected)' : '' }}

                            >
                                {menuItem.name}
                            </button>
                        ))
                    }

                </div>
                <ThemeToggle />
            </header>
            {/* header mobile view */}
            <header2>
                <button onClick={() => { setIsMobileMenuOpen(true) }}>
                    <Menu />
                </button>
                <div className={styles.myImage_icon}>
                    <img src={me} alt="me icon" />
                </div>
                {isMobileMenuOpen && <MobileMenu closeMenu={() => { setIsMobileMenuOpen(false) }} />}
            </header2>
            {/* intro section - pic and intro paragraph */}
            <div className={styles.intro_container}>
                <div className={styles.intro_para}>
                    <p className={styles.hello_container}>
                        <span> Hello, </span>
                        <span>I'm Jestin Joseph</span></p>
                    <p className={styles.about_container}>A passionate Software Engineer from India, currently based in Chicago, Illinois. I Specialize in building scalable
                        <strong>web applications</strong> and crafting clean, <strong>efficient code</strong>. With a strong foundation in
                        <strong> full-stack development</strong> and a keen interest in solving real-world problems through technology, I love
                        turning ideas into impactful digital experiences.
                    </p>
                </div>
                <div className={styles.intro_pic_container}>
                    <div className={styles.intro_pic}>
                        <img src={me} alt="my imgae" />
                    </div>
                    <svg viewBox="0 0 200 200" className={styles.text_circle}>
                        <defs>
                            <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                        </defs>
                        <text font-size="5.5" fill='var(--menu-items-selected)'>
                            <textPath href="#circlePath" startOffset="0">
                                • FULL STACK DEVELOPER • BASED IN CHICAGO
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
            {/* skills section */}
            <div className={styles.skills_container}>
                <div className={styles.skills_heading}>
                    <BulletPoint />
                    <p>My Skills</p>
                </div>
                <div className={styles.skills_item_containter}>
                    <div className={styles.skill_1}>
                        <SkillItem
                            number={1}
                            skill="Full-Stack Development"
                            description="Have specialized in Full-stack development by developing end-to-end application using (Tools and skills)."
                            icons={[nodeIcon, reactIcon, pyIcon, goIcon]}
                        />
                    </div>
                    <div className={styles.skill_2}>
                        <SkillItem
                            number={2}
                            skill="UI/UX Design"
                            description="Experienced developing delightful interfaces collaborating with other designers and stakeholders"
                            icons={[figIcon]}
                        />
                    </div>
                    <div className={styles.skill_3}>
                        <SkillItem
                            number={3}
                            skill="Mobile Apps"
                            description="Building responsive, high-performance apps that provide seamless user experiences across all mobile platforms."
                            icons={[flutterIcon]}
                        />
                    </div>
                </div>

            </div>

            <div className={styles.projects_container}>
                <div className={styles.projects_heading}>
                    <BulletPoint />
                    <p>Projects</p>
                </div>

                <div className={styles.projects_item_containter}>
                    <WorkCard
                        thumbnail={PillAngelImg}
                        title="Pill Angel – Smart Medication Companion"
                        desc="Pill Angel is a full-stack healthcare application designed to help patients and caregivers better understand and organize medications. Users can upload prescriptions, simplify dosage instructions into plain language, track medications, and stay on top of daily schedules through an intuitive and accessible interface."
                    />
                    <WorkCard
                        thumbnail={TaskManagerImg}
                        title="TaskIt - Task Management Application"
                        desc="TaskIT is a task management web application that helps users organize their work by creating and prioritizing tasks, pinning important ones, and categorizing them."
                    />

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainView