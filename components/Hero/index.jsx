import React from 'react';
import styles from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.Hero}>
        <div className={styles.SemiTransparent}>
        </div>
          <div className={styles.content}>
              <h3>We Are A</h3>
              <h1>
                  Digital Pioneers <span>in Marketing</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
          </div>
    </div>
  )
}

export default Hero;