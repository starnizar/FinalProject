import React, { useState } from 'react'
import styles from './ShowUserFoto.module.css'
import {useCookies} from 'react-cookie'

const ShowUserFoto = () => {
    const [cookie] = useCookies()
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')))
    //const users = JSON.parse(localStorage.getItem('users'))
    const currentUser = users.filter(user => user.id === cookie.currentUserID)
    
    const deleteFoto = (id) => {
        currentUser[0].allPhoto.splice(id,1)
        let updateUsers = [...users]
        setUsers(updateUsers)
        localStorage.setItem('users', JSON.stringify(updateUsers))
    }

    return (
        <div className={styles.userPhoto}>
        {currentUser[0] ? currentUser[0].allPhoto.map((photo, index) => (
            <div key={index} className={styles.photoBox}>
                <img src={photo} alt="no way"/>
                <i onClick={() => deleteFoto(index)} className="fa fa-trash"></i>
            </div>
        )):(<h1>Add FOTO dude</h1>)}
    </div>
    )
}

export default ShowUserFoto