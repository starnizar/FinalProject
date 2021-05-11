import React, { useState } from 'react'
import styles from './HomePage.module.css'
import NavBar from './NavBar/NavBar.jsx'
import {LoggedOut} from '../haveUser.jsx'
import {useCookies} from 'react-cookie'
   
const HomePage = () => {
    LoggedOut() 
    const [cookie] = useCookies()
    const photos = JSON.parse(localStorage.getItem('photos'))
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')))
    const currentUser = users.filter(user => user.id === cookie.currentUserID)
    const userPhotos = currentUser[0].allPhoto
    // const test = async (event) => {
    //     event.preventDefault()
    //     мой acces_key не украдите только ;)
    //     const response = await fetch('https://api.unsplash.com/photos/?client_id=l8M5SXkNrsSODKvVdowuEGtTg_0-N9kZ6djjLES7zZ0')
    //     const answer = await response.json()
    //     console.log(answer[0].urls.regular);
    // }
    const addToMe = (link) => {
        if(userPhotos.find(elem => elem === link) === undefined) {
            userPhotos.unshift(link)
            const updateUsers = users
            setUsers(updateUsers)
            localStorage.setItem('users',JSON.stringify(updateUsers))
        } else {
            alert('You already have it')
        }
    }
    return (
        <div className={styles.home}>
            <div className={styles.demoBox}>
            <h1>Discover</h1>
                {photos.map((item, index) => (
                    <div key={index} className={styles.photoBox}>
                        <div>
                            <img src={item.urls.regular} alt="Sorry" />
                        </div>
                        <div onClick={()=>addToMe(item.urls.regular)} className={styles.addBox}>
                            <h3>Add Photo</h3>
                            <i className="fa fa-plus-square"></i>
                        </div>
                    </div>
                ))}
            </div>
            <NavBar/>
        </div>
    )
}

export default HomePage