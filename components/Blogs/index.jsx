import React from 'react';
import styles from "../../styles/Blogs.module.css";

// Blogs Data
import blogs from "./data/data.js";

const Blogs = () => {
  return (
    <div className={styles.blogs}>
        <div className={styles.banner}>
            <h1>Our Latest Blogs</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className={styles.Cards}>
            {
                blogs ?
                    blogs.map((blog, index) =>
                        <div key={index} className={styles.Card}>
                            <div className={styles.BlogCover}>
                                <img 
                                    src={blog.image}
                                    alt="Card-Cover"
                                />
                            </div>
                            <div className={styles.BlogContent}>
                                <h3>
                                    <a href="">{blog.title}</a>
                                </h3>
                                <i>{blog.date} / {blog.genre}</i>
                                <p>{blog.description}</p>
                            </div>
                        </div>
                    )
                : null
            }
        </div>
        <a href="" className={styles.more}>More Posts</a>
    </div>
  )
}

export default Blogs;