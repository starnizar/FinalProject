import React from 'react'
import styles from '../Chats/Chats.module.css'
import NavBar from '../NavBar/NavBar.jsx'

const Chats = () => {
    return (
        <div className={styles.chats}>
            <h1>Chats</h1>
            <NavBar/>
        </div>
    )
}

export default Chats