import React from 'react';
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.content}>
            <div className={styles.links}>
                <div className={styles.Brand}>
                    <h1>
                        <a href="">DevJam</a>
                    </h1>
                    <p>222 Ave C South Saskatoon,17 Elizabeth Street Mountain Road.</p>
                    <p>Email: contact.devjam01@gmail.com</p>
                    <p>Fax: 92.206.222.3358</p>
                </div>
                <div className={styles.AdditionalLinks}>
                    <h3>Additional Links</h3>
                    <ul>
                        <li>
                            <a href="">Creative homepage</a>
                        </li>
                        <li>
                            <a href="">Company Analysis</a>
                        </li>
                        <li>
                            <a href="">Brand Creation</a>
                        </li>
                        <li>
                            <a href="">Corporate Identity</a>
                        </li>
                        <li>
                            <a href="">Press inquiries</a>
                        </li>
                        <li>
                            <a href="">Prdoucts Waranty</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.UsefulLinks}>
                    <h3>Useful Links</h3>
                    <ul>
                        <li>
                            <a href="">Creative homepage</a>
                        </li>
                        <li>
                            <a href="">Company Analysis</a>
                        </li>
                        <li>
                            <a href="">Brand Creation</a>
                        </li>
                        <li>
                            <a href="">Corporate Identity</a>
                        </li>
                        <li>
                            <a href="">Press inquiries</a>
                        </li>
                        <li>
                            <a href="">Prdoucts Waranty</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.OurServices}>
                    <h3>Our Services</h3>
                    <ul>
                        <li>
                            <a href="">Creative homepage</a>
                        </li>
                        <li>
                            <a href="">Company Analysis</a>
                        </li>
                        <li>
                            <a href="">Brand Creation</a>
                        </li>
                        <li>
                            <a href="">Corporate Identity</a>
                        </li>
                        <li>
                            <a href="">Press inquiries</a>
                        </li>
                        <li>
                            <a href="">Prdoucts Waranty</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                <h5>&copy; Copyright 2022 - DevJam <a href="https://twitter.com/boularbahsmail" target="_blank" rel="noreferrer">Ismailium</a></h5>
            </div>
        </div>
    </footer>
  )
}

export default Footer;