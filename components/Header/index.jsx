import React, { useState } from 'react';
import Link from "next/link";
import styles from "../../styles/Header.module.css";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.logo}>
                    <h2>
                        <Link href="">DevJam</Link>
                    </h2>
                </div>
                <ul className={`${styles.menu} ${menuOpen ? `${styles.open}` : null}`}>
                    <li>
                        <a href="" onClick={() => setMenuOpen(!menuOpen)}>Home</a>
                    </li>
                    <li>
                        <a href="" onClick={() => setMenuOpen(!menuOpen)}>Portfolio</a>
                    </li>
                    <li>
                        <a href="" onClick={() => setMenuOpen(!menuOpen)}>Pages</a>
                    </li>
                    <li>
                        <a href="" onClick={() => setMenuOpen(!menuOpen)}>Elements</a>
                    </li>
                    <li>
                        <a href="" onClick={() => setMenuOpen(!menuOpen)}>Blog</a>
                    </li>
                    <li>
                        <a href="" onClick={() => setMenuOpen(!menuOpen)}>Shop</a>
                    </li>
                </ul>
                <div 
                    className={`${styles.hamburger} ${menuOpen ? `${styles.open}` : null}`} 
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    )
}

export default Header;