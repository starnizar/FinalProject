import React,{useState} from 'react'
import styles from './AnotherUser.module.css'
import NavBar from '../NavBar/NavBar.jsx'
import {LoggedOut} from '../../haveUser.jsx'
import {Link} from 'react-router-dom'
import {useCookies} from 'react-cookie'

const AnotherUser = () => {
    LoggedOut()
    const [cookie] = useCookies()
    const user = JSON.parse(localStorage.getItem('anotherUser'))
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')))
    const currentUser = users.filter(user => user.id === cookie.currentUserID)
    const userPhotos = currentUser[0].allPhoto

    const addToMe = (link) => {
        if(userPhotos.find(elem => elem === link) === undefined) {
            userPhotos.unshift(link)
            const updateUsers = users
            setUsers(updateUsers)
            localStorage.setItem('users',JSON.stringify(updateUsers))
            alert('Photo added to your profile')
        } else {
            alert('You already have it')
        }
    }

    return (
        <div className={styles.anotherUser}>
            <Link to={'/chats'} id={styles.back}>
                <i className="fa fa-arrow-left"></i>
            </Link>
            <div style={{backgroundImage: `url(${user.profilePhoto})`}} className={styles.userImg}></div>
            <h1>{user.name}</h1>
            <div className={styles.photoContainer}>
                {user.allPhoto.map((item, index) => ( 
                    <div key={index} className={styles.photoBox}>
                        <div className={styles.imgBox}>
                            <img src={item} alt="WOOOPS!" />
                        </div>
                        <div onClick={()=>addToMe(item)} className={styles.addBox}>
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

export default AnotherUser