import { useState } from 'react';
import styles from "./Navbar.module.scss";
import Icon from "../icons/Export"

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.header}>
                <div className={styles.rightSide}>
                    <button id='light'>
                        <Icon className={styles.buttons}  name="sun" size={20} color='#000'></Icon>
                    </button>
                    <button id='dark'>
                        <Icon className={styles.buttons}  name="moon" size={20} color='#000'></Icon>
                    </button>
                    <button id='notifications'>
                        <Icon className={styles.buttons}  name="bell" size={20} color='#000'></Icon>
                    </button>
                    <button id='logout'>
                        <Icon className={styles.buttons} name="logout" size={20} color='#000'></Icon>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;