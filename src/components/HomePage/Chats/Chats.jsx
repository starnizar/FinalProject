import React, { useState } from 'react'
import styles from '../Chats/Chats.module.css'
import NavBar from '../NavBar/NavBar.jsx'
import {LoggedOut} from '../../haveUser.jsx'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'

const Chats = () => {
    LoggedOut()
    const [cookie] = useCookies()
    const location = useHistory()
    const [, setAnotherUser] = useState(JSON.parse(localStorage.getItem('anotherUser')) || [])
    const users = (JSON.parse(localStorage.getItem('users')))
    const currentUser = users.filter(user => user.id === cookie.currentUserID)
    let userContacts = []
    for(let i = 0; i < currentUser[0].contacts.length; i++) {
        if(currentUser[0].contacts.filter(item => item === users[i].id)){
            userContacts.push(users[i])
        }
    }
    const sendUser = (item) => {
        const update = item
        setAnotherUser(update)
        localStorage.setItem('anotherUser', JSON.stringify(update))
        location.push('/anotheruser')
    }
    return (
        <div className={styles.chats}>
            <h1>Chats</h1>
                {userContacts.map((item, index) => (
                    <div onClick={()=>sendUser(item)} key={index} className={styles.contact}>
                        <div style={{backgroundImage: `url(${item.profilePhoto})`}} className={styles.imgBox}></div>
                        <h2 className={styles.name}>{item.name}</h2>
                    </div>
                 ))}
            <NavBar/>
        </div>
    )
}

export default Chats