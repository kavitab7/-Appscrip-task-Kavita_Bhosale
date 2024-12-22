"use client";
import React, { useState } from 'react'
import styles from '../../styles/Sidebar.module.css';

export default function FilterBar({ isSideMenuOpen, setIsSideMenuOpen }) {
    const [isSortVisible, setIsSortVisible] = useState(false);
    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    const toggleSortVisibility = () => {
        setIsSortVisible(!isSortVisible);
    };

    return (
        <div className={styles.filterBar}>
            <div className={styles.leftFilterSection}>

                <h2>3425 ITEMS</h2>
                <div className={isSideMenuOpen ? 'styles.filterClose' : 'styles.filterOpen'} onClick={toggleSideMenu}>
                    {isSideMenuOpen ? '< Hide Filter' : '< Show Filter'}
                </div>
            </div>
            <div className={styles.rightFilterSection}>
                <h3 onClick={toggleSortVisibility} className={styles.sortHeader}>
                    Recommended {isSortVisible ? 'x' : '^'}
                </h3>
                {isSortVisible && (
                    <ul className={styles.sortOptions}>
                        <li>Recommended</li>
                        <li>Newest First</li>
                        <li>Popular</li>
                        <li>Price: High to Low</li>
                        <li>Price: Low to High</li>
                    </ul>
                )}
            </div>
        </div>
    )


}