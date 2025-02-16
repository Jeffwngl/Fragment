import styles from "./Home.module.scss";
import { useState } from 'react';

const Home = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1 className={styles.t1}>Fragment</h1>
                    <h2 className={styles.t2}>Trading journal</h2>
                </div>
                <div className={styles.links}>
                    <a href='/login'>Login</a>
                    <a href='/dashboard'>Temp</a>
                    <a>Contribute</a>
                    <a href='/about'>About</a>
                </div>
            </div>
            <div className={styles.content1}>
                <h2 className={styles.callout}>Trade. Track. Triumph.<br></br>Your Journey, Your Journal.</h2>
                <button>SIGN UP NOW</button>
            </div>
        </>
    )
}

export default Home;