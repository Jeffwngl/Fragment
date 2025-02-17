import { useState } from 'react';
import styles from './Stats.module.scss';

const Stats = () => {
    return (
        <div className={styles.stats}>
            <div className={styles.bigStats}>
                <div className={styles.smallContainer}>
                    <p>STREAK</p>
                    <p id='streak' className={styles.pnl}>4</p>
                </div>
                <div className={styles.smallContainer}>
                    <p>DAILY PNL</p>
                    <p id='daily' className={styles.pnl}>0.00</p>
                </div>
                <div className={styles.smallContainer}>
                    <p>WEEKLY PNL</p>
                    <p id='weekly' className={styles.pnl}>0.00</p>
                </div>
                <div className={styles.smallContainer}>
                    <p>MONTHLY PNL</p>
                    <p id='monthly' className={styles.pnl}>0.00</p>
                </div>
            </div>
        </div>
    )
}

export default Stats;