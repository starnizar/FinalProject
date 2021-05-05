import React from 'react'
import styles from './LogIn.module.css'
import {Link} from 'react-router-dom'

const LogIn = () => {

    return (
        <div className={styles.LogIn}>
            <Link to={'/loggedout'}>
                 <i className="fa fa-arrow-left"></i>
            </Link>
            <h1>Log in</h1>
            <form className={styles.LogInForm}>
                <input/>
                <input/>
                <button>log in</button>
            </form> 
        </div>
    )
}

export default LogIn