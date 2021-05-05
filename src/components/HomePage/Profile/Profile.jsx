import React from 'react'
import styles from '../Profile/Profile.module.css'
import NavBar from '../NavBar/NavBar.jsx'

const Profile = () => {
    return (
        <div className={styles.profile}>
            <h1>Profile</h1>
            <NavBar/>
        </div>
    )
}

export default Profile