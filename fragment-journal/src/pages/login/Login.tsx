import styles from "./Login.module.scss";
import { useState } from 'react';


const Login = () => {
    return (
        <div className={styles.login}>
            <h1>Log-in</h1>
            <div className={styles.container}>
                <p>Email</p>
                <input id='email' placeholder="Type here..."></input>
                <p>Password</p>
                <input id='password' placeholder="Type here..."></input>
                <button>SIGN IN</button>
                <p className={styles.signup}>Don't have an account? <a href="#">Sign up here</a></p>
            </div>
        </div>
    )
}

export default Login;