import React from "react";
import styles from "../../styles/Testimonials.module.css";

// Testimonials Data
import testimonials from "./data/data.js";

const Testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <div className={styles.banner}>
                <h1>What People Say About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className={styles.content}>
                <div className={styles.Cards}>
                    {
                        testimonials ?
                            testimonials.map((testimonial, index) => 
                                <div key={index} className={styles.Card}>
                                    <p>{testimonial.feedback}</p>
                                    <h3>{testimonial.full_name}</h3>
                                    <span>{testimonial.role}</span>
                                </div>
                            )
                        : null
                    }
                </div>
            </div>
        </div>
    );
}

export default Testimonials;