import React from 'react'
import styles from './MobileMenu.module.scss'
import { CircleX } from 'lucide-react';
import { X } from 'lucide-react';
import { menuItems } from '../../MainView/MainView';
import me from "../../../assets/image/me.jpg";
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../../ThemeSettings/ThemeToggle';



function MobileMenu({ closeMenu }) {
    const navigate = useNavigate();
    const location = useLocation()

    const onMenuItemClick = (path) => {
        navigate(path);
        closeMenu();
    }

    return (
        <div className={styles.MobileMenu}>
            <div className={styles.menuHeader}>
                <div className={styles.myImage_icon}>
                    <img src={me} alt="me icon" />
                </div>
                <button onClick={closeMenu}>
                    <X  />
                </button>
            </div>
            <div className={styles.menuItems}>
                {
                    menuItems.map((menuItem) => (
                        <button
                            key={menuItem.name}
                            onClick={() => { onMenuItemClick(menuItem.path) }}
                            style={{ color: location.pathname === menuItem.path ? 'var(----menu-items-selected)' : '' }}

                        >
                            {menuItem.name}
                        </button>
                    ))
                }
                <ThemeToggle />
            </div>
        </div>
    )
}

export default MobileMenu