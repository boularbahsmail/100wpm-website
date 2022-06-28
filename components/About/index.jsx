import React from 'react';
import Image from "next/image";
import styles from "../../styles/About.module.css";

// Cards
import cards from "./data/data.js";

const About = () => {
  return (
    <div className={styles.About}>
        <div className={styles.content}>
            <h1>Who We Are</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className={styles.Cards}>
                {
                    cards ?
                        cards.map((card, index) => 
                            <div key={index} className={styles.Card}>
                                <div className={styles.CardIcon}>
                                    <Image 
                                        src={card.icon} 
                                        alt="Card-Icon"
                                        height="30px"
                                        width="30px" 
                                    />
                                </div>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        )
                    : null
                }
            </div>
        </div>
    </div>
  )
}

export default About