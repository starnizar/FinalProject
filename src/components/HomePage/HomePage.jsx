import React from 'react'
import styles from './HomePage.module.css'
import NavBar from './NavBar/NavBar.jsx'
import {LoggedOut} from '../haveUser.jsx'
import {useCookies} from 'react-cookie'

const HomePage = () => {
    LoggedOut()
    const [user] = useCookies()

    const test = (event) => {
        event.preventDefault()
        console.log(user);
    }
    return (
        <div className={styles.home}>
            <h1>Discover</h1>
            <button onClick={test}>Test</button>
            <NavBar/>
        </div>
    )
}

export default HomePage