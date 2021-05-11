import React from 'react'
import styles from '../Chats/Chats.module.css'
import NavBar from '../NavBar/NavBar.jsx'
import {LoggedOut} from '../../haveUser.jsx'
import {useCookies} from 'react-cookie'

const Chats = () => {
    LoggedOut()
    const [cookie] = useCookies()
    const users = (JSON.parse(localStorage.getItem('users')))
    const currentUser = users.filter(user => user.id === cookie.currentUserID)
    let userContacts = []
    for(let i = 0; i < currentUser[0].contacts.length; i++) {
        if(currentUser[0].contacts.filter(item => item === users[i].id)){
            userContacts.push(users[i])
        }
    }
    return (
        <div className={styles.chats}>
            <h1>Chats</h1>
                {userContacts.map((item, index) => (
                    <div key={index} className={styles.contact}>
                        <div style={{backgroundImage: `url(${item.profilePhoto})`}} className={styles.imgBox}></div>
                        <h2 className={styles.name}>{item.name}</h2>
                    </div>
                 ))}
           
            <NavBar/>
        </div>
    )
}

export default Chats