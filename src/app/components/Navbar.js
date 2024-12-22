"use client";
import { useState } from 'react';
import { GoHeart } from 'react-icons/go';
import { CiUser, CiSearch } from 'react-icons/ci';
import { IoBagRemoveOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import styles from '../../styles/Navbar.module.css';
import logo from '../../../public/logo.png';
import { MdOutlineDashboard } from 'react-icons/md';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <div className={styles.topBarText}><MdOutlineDashboard /> Lorem ipsum dolor</div>
                <div className={styles.topBarText}><MdOutlineDashboard /> Lorem ipsum dolor</div>
                <div className={styles.topBarText}><MdOutlineDashboard /> Lorem ipsum dolor</div>
            </div>
            <div className={styles.mainHeader}>
                <FaBars className={styles.burgerMenu} onClick={toggleMenu} />
                <Image src={logo} alt="Logo" className={styles.logo} width={30} height={30} />
                <div className={styles.logo} >LOGO</div>
                <div className={styles.userActions}>
                    <CiSearch size={20} />
                    <GoHeart size={20} />
                    <IoBagRemoveOutline size={20} />
                    <CiUser size={20} />
                    <div className={styles.language}>ENG</div>
                </div>
            </div>
            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                <a href="#">HOME</a>
                <a href="#">SHOP</a>
                <a href="#">SKILLS</a>
                <a href="#">STORIES</a>
                <a href="#">ABOUT</a>
                <a href="#">CONTACT US</a>
            </nav>
        </header>
    )
}