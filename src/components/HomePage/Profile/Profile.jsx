import React, { useState } from 'react'
import styles from '../Profile/Profile.module.css'
import NavBar from '../NavBar/NavBar.jsx'
import {useCookies} from 'react-cookie'
import {LoggedOut} from '../../haveUser.jsx'
import Burger from './Burger/Burger.jsx'
import {useHistory} from 'react-router-dom'
import ShowUserFoto from './ShowUserFoto/ShowUserFoto.jsx'

const Profile = () => {
    LoggedOut()
    const [cookie] = useCookies()
    const location = useHistory()
    const users = JSON.parse(localStorage.getItem('users'))
    const currentUser = users.filter(user => user.id === cookie.currentUserID)
    const [userPhoto, setUserPhoto] = useState(currentUser[0].profilePhoto)

    return (
        <div className={styles.profile}>
            <Burger users={users} currentUser={currentUser} setUserPhoto={setUserPhoto}/>
            <div style={{backgroundImage: `url(${userPhoto})`}} className={styles.userImg}></div>
            <h1>{currentUser[0]?currentUser[0].name:location.push('/')}</h1>
            <ShowUserFoto currentUser={currentUser}/>
            <NavBar/>
        </div>
    )
}

export default Profile