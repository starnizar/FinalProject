import React from 'react'
import styles from './LoggedOut.module.css'
import icon from '../../assets/images/appIcon.svg'
import {Link} from 'react-router-dom'
import {LoggedIn} from '../haveUser.jsx'

const LoggedOut = () => {  
    LoggedIn()
    return (
        <div className={styles.loggedOutForm}>
            <div className={styles.iconBox}>
                <img src={icon} className={styles.icon} alt='icon'/>
            </div>
            <div className={styles.logBox}>
                <Link to={'/login'}>
                    <button className={styles.loginBtn}>log in</button>
                </Link>
                <Link to={'/registration'}>
                    <button className={styles.regBtn}>register</button>
                </Link>
            </div>
            
        </div>
    )
}

export default LoggedOut