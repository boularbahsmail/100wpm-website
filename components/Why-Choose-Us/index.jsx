import React from "react";
import Image from "next/image";
import styles from "../../styles/Why-Choose-Us.module.css";

// Services Cards Data
import cards from "./data/data.js";

const WhyChooseUs = () => {
    return (
        <div className={styles.whyus}>
            <div className={styles.banner}>
                <h1>Why Choose Us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className={styles.services}>
                <div className={styles.content}>
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
                                        <h3>{card.title}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                </div>    
                            )
                        : null
                    }
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;