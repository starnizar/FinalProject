import React from 'react'
import styles from './HomePage.module.css'
import NavBar from './NavBar/NavBar.jsx'

const HomePage = () => {
    return (
        <div className={styles.home}>
            <h1>Discover</h1>
            <NavBar/>
        </div>
    )
}

export default HomePage