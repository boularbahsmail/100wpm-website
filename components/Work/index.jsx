import React from 'react';
import styles from "../../styles/Work.module.css";

// Work Data
import works from "./data/data.js";

// React Icons
import { BsArrowRight } from "react-icons/bs";


const Work = () => {
  return (
    <div className={styles.work}>
        <div className={styles.banner}>
            <h1>Our Latest Works</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className={styles.workWrapper}>
            <div className={styles.content}>
                {
                    works ?
                        works.map((work, index) =>
                            <div key={index} className={styles.WorkCard}>
                                <div className={styles.WorkImg}>
                                    <img 
                                        src={work.image} 
                                        alt="Work-Image" 
                                    />
                                </div>
                                <div className={styles.WorkText}>
                                    <h2>
                                        <a href="">{work.title}</a>
                                    </h2>
                                    <p>{work.description}</p>
                                    <button>
                                        <BsArrowRight />
                                    </button>
                                </div>
                            </div>    
                        )
                    : null
                }
            </div>
            <a href="" className={styles.more}>More Projects</a>
        </div>
    </div>
  )
}

export default Work;