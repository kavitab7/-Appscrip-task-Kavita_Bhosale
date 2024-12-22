"use client";
import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import { SiGooglepay, SiVisa, SiMastercard, SiAmericanexpress, SiPaypal, SiApplepay } from 'react-icons/si';
import styles from '../../styles/Footer.module.css';

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);
    const [isCompanyInfoOpen, setIsCompanyInfoOpen] = useState(false);
    const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const toggleCompanyInfo = () => {
        if (isMobile) {
            setIsCompanyInfoOpen(!isCompanyInfoOpen);
        }
    };

    const toggleQuickLinks = () => {
        if (isMobile) {
            setIsQuickLinksOpen(!isQuickLinksOpen);
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.upperFooter}>
                    <div className={styles.subscription}>
                        <h4>BE THE FIRST TO KNOW</h4>
                        <p>Sign up for updates from metta muse.</p>
                        <div className={styles.subscribeForm}>
                            <input type="email" placeholder="Enter your e-mail..." className={styles.emailInput} />
                            <button className={styles.subscribeButton}>SUBSCRIBE</button>
                        </div>
                    </div>
                    <div className={styles.contactInfo}>
                        <div className={styles.contact}>
                            <h4>CONTACT US</h4>
                            <div className={styles.contactData} >
                                <p>+44 221 133 5360</p>
                                <p>customerservice@mettamuse.com</p>
                            </div>
                        </div>
                        <div className={styles.currency}>
                            <h4>CURRENCY</h4>
                            <p> USD</p>
                            <p className={styles.currText} >Transactions will be completed in Euros and a currency reference is available on hover.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.lowerFooter}>
                    <div className={`${styles.companyInfo} ${isCompanyInfoOpen ? 'styles.active' : ''}`}>

                        <h4 onClick={toggleCompanyInfo}>metta muse</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                        </ul>
                    </div>
                    <div className={`${styles.quickLinks} ${isQuickLinksOpen ? styles.active : ''}`}>
                        <h4 onClick={toggleQuickLinks}>QUICK LINKS</h4>
                        <ul>
                            <li>Orders & Shipping</li>
                            <li>Join/Login as a Seller</li>
                            <li>Payment & Pricing</li>
                            <li>Return & Refunds</li>
                            <li>FAQs</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className={styles.socialMedia}>
                        <div>
                            <h4>FOLLOW US</h4>
                            <div className={styles.icons}>
                                <RiInstagramFill className={styles.icon} size={24} />
                                <FaLinkedin className={styles.icon} size={24} />
                            </div>
                        </div>
                        <div>
                            <h4>metta muse ACCEPTS</h4>
                            <div className={styles.paymentIcons}>
                                <SiGooglepay size={24} />
                                <SiVisa size={24} />
                                <SiMastercard size={24} />
                                <SiAmericanexpress size={24} />
                                <SiPaypal size={24} />
                                <SiApplepay size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Copyright © 2024 mettamuse. All rights reserved.</p>
            </div>
        </footer>
    );
}
