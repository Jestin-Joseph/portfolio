import React from 'react'
import styles from "./AboutView.module.scss"

import me from "../../assets/image/me.jpg";
import { ThemeToggle } from "../ThemeSettings/ThemeToggle";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from "react";

//components
import MobileMenu from "../Components/MobileMenu/MobileMenu";
import PillCard from '../Components/PillCard/PillCard';
import TimeLine from '../Components/TimeLine/TimeLine';
import NowCard from '../Components/NowCard/NowCard';

//images
import nodeIcon from "../../assets/icons/original node.png";
import reactIcon from "../../assets/icons/original react.png";
import pyIcon from "../../assets/icons/original python.png";
import figIcon from "../../assets/icons/original figma.png";
import goIcon from "../../assets/icons/go.png"
import flutterIcon from "../../assets/icons/flutterLogo.png";

//icons
import BulletPoint from "../Components/BulletPoint/BulletPoint";
import cook from "../../assets/icons/cooking.png"
import reno from "../../assets/icons/Renovations.png"
import soft from "../../assets/icons/software.png"
import wood from "../../assets/icons/woodwork.png"
import diy from "../../assets/icons/DIY.png"
import study from "../../assets/icons/studying.png"
import search from "../../assets/icons/search.png"
import build from "../../assets/icons/build.png"

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

function AboutView() {
    const navigate = useNavigate();
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const interests = [
        {
            icon: cook,
            name: "Cooking"
        },
        {
            icon: wood,
            name: "Woodwork"
        },
        {
            icon: reno,
            name: "Renovations"
        },
        {
            icon: soft,
            name: "Software"
        },
        {
            icon: diy,
            name: "DIY everything!"
        },
    ]

    const journey = [
        {
            head: 'Growing up · Bahrain',
            subHead: 'Where it all began',
            subHead1: 'Kingdom of Bahrain',
            desc: 'Grew up in Bahrain and studied there through 10th grade — an island kid with a restless curiosity about how things work.'
        },
        {
            head: 'High School · Kerala, India',
            subHead: 'Back to roots',
            subHead1: 'India',
            desc: 'Returned to India to finish schooling in my native state of Kerala. Different pace, different people — same habit of pulling things apart to understand them.'
        },
        {
            head: '2020 – 2023 · Bangalore, India',
            subHead: 'Bachelor of Computer Applications',
            subHead1: `St. Joseph's College, Bangalore`,
            desc: 'Started undergrad right as COVID locked the world down. Found that building software was just another kind of making — and got hooked.',
            foot: 'BCA'

        },
        {
            head: '2023 · Bangalore, India',
            subHead: 'Associate Software Engineer',
            subHead1: 'TopGrep Tech — EdTech Startup',
            desc: 'First real job at an ed-tech startup. Nearly a year of fast shipping, late debugging sessions, and learning that production is a different beast from localhost.',
            foot: '~1 YR'
        },
        {
            head: '2024 · Chicago, IL, USA',
            subHead: 'MS in Computer Science',
            subHead1: 'DePaul University',
            desc: 'Packed up and crossed an ocean. Chicago winters are no joke, but the program — and the city — are worth every layer of outerwear.',
            foot: 'MS CS'
        },
        {
            head: '2025 Summer · Lombard, Illinois',
            subHead: 'Software Engineering Intern',
            subHead1: 'Ingenio Care — Healthcare Startup',
            desc: 'Joined a healthcare management startup and spent ~6 months building features that actually mattered to real patients and providers.',
            foot: '~6 MONTHS'

        },
        {
            head: 'Now · 2026 · Chicago',
            subHead: 'Final chapter of grad school',
            subHead1: 'DePaul University — Graduating June 2026',
            desc: `Wrapping up the MS, looking for what's next. Open to roles where I can build things that matter — and maybe put some IKEA furniture together on weekends.`,
            foot: 'OPEN TO WORK'
        }
    ]

    return (
        <div className={styles.AboutView_container}>
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



            <div className={styles.intro_container}>
                <p className={styles.intro_title}>
                    <span> — </span>
                    ABOUT ME
                </p>

                <p className={styles.intro_tag}>Builder By nature, <br /><span>not just code.</span></p>

                <p className={styles.intro_desc}>I'm Jestin — a software engineer who moved from Bahrain to Bangalore to Chicago, picking up a soldering iron, a chef's knife, and a CS degree along the way. I love making things... Any things.</p>
                <div className={styles.intro_interests}>
                    {
                        interests.map((interest) => {
                            return <PillCard item={interest.name} icon={interest.icon} />
                        })
                    }
                </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.journey_container}>
                <p className={styles.journey_title}>
                    <span> — </span>
                    THE JOURNEY

                </p>
                <div className={styles.journey_timeline} >
                    {
                        journey.map((j) => {
                            return (
                                <TimeLine
                                    key={j.desc}
                                    journey={j}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.right_now_container}>
                <p className={styles.right_now_title}>
                    <span> — </span>
                    RIGHT NOW

                </p>

                <div className={styles.right_now_content}>
                    <div className={styles.item_1}>
                        <NowCard
                            icon={study}
                            action="Studying"
                            description="Finishing my MS in CS at DePaul. Graduating June 2026."
                        />
                    </div>
                    <div className={styles.item_2}>
                        <NowCard
                            icon={search}
                            action="Looking"
                            description="Searching for a full-time SWE role where I can build meaningful products."
                        />
                    </div>
                    <div className={styles.item_3}>
                        <NowCard
                            icon={build}
                            action="Building"
                            description="Experimenting with projects, exploring out different tech stacks and trying to make something unique."
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutView