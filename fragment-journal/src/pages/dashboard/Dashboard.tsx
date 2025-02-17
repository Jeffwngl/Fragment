import styles from "./Dashboard.module.scss";
import { useState } from 'react';
import Navbar from "../../components/ui/Navbar";
import Leftmenu from "../../components/ui/Leftmenu";
import Stats from "../../components/stats";

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <Leftmenu />
            <div className={styles.mainPage}>
                <Navbar />
                <Stats />
            </div>
        </div>
    )
}

export default Dashboard;