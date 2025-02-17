import { useState } from 'react';
import styles from './Leftmenu.module.scss';

const Leftmenu = () => {
    return (
        <div className={styles.leftmenu}>
            <h1 className={styles.title}>Fragment<br></br>Dashboard</h1>
            <p className={styles.balance}>$0.00</p>
            <div className={styles.pages}>
                <button id='dashboard' className={styles.dashboard}>Dashboard</button>
                <button id='newTrade' className={styles.newTrade}>New Trade</button>
                <button id='newNote' className={styles.newNote}>New Note</button>
                <button id='track' className={styles.track}>Track</button>
                <button id='alert' className={styles.alert}>Set Alert</button>
                <button id='home' className={styles.home}>Homepage</button>
                <button id='settings' className={styles.settings}>Settings</button>
            </div>
        </div>
    )
}

export default Leftmenu;