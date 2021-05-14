import React, { useEffect, useState } from 'react'
import styles from './HomePage.module.css'
import NavBar from './NavBar/NavBar.jsx'
import Toast from '../Toast/Toast.jsx'
import {LoggedOut} from '../haveUser.jsx'
import {useCookies} from 'react-cookie'
   
const HomePage = () => {
    LoggedOut() 
    const [cookie] = useCookies()
    const [photos, setPhotos] = useState()
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')))
    const [msg, setMsg] = useState({text:'', show:'none', hide: '-100px', color:'#ffffff'})
    const [num, setNum] = useState(0)
    const currentUser = users.filter(user => user.id === cookie.currentUserID)
    const userPhotos = currentUser[0].allPhoto
    useEffect(() => {
        async function getPhoto() {
            let response = await fetch('https://api.unsplash.com/photos/?client_id=l8M5SXkNrsSODKvVdowuEGtTg_0-N9kZ6djjLES7zZ0')
            let photo = await response.json()
            setPhotos(photo)
        }
        getPhoto()
    }, [photos])
   
    const addToMe = (link) => {
        if(userPhotos.find(elem => elem === link) === undefined) {
            userPhotos.unshift(link)
            const updateUsers = users
            setUsers(updateUsers)
            localStorage.setItem('users',JSON.stringify(updateUsers))
            const newMsg = {text:'Photo added to your profile', show:'flex', hide: '0', color:'#01ff22'}
            const clearMsg = {text:'Photo added to your profile', show:'none', hide: '-100px', color:'#01ff22'}
            if(msg.hide === '0'){
                setMsg(clearMsg)
                setTimeout(setMsg(newMsg), 50)
            } else {setMsg(newMsg) 
            num === 0 ? setNum(1) : setNum(0)}  
        } else {
            const newMsg = {text:'You already have it', show:'flex', hide: '0', color:'#ff3939'}
            const clearMsg = {text:'You already have it', show:'none', hide: '-100px', color:'#ffffff'}
            if(msg.hide === '0'){
                setMsg(clearMsg)
                setTimeout(setMsg(newMsg), 50)
            } else {setMsg(newMsg) 
            num === 0 ? setNum(1) : setNum(0)}
        }
    }
    return (
        <div className={styles.home}>
            <h1>Discover</h1>
            <div className={styles.demoBox}>
                {photos && photos.map((item, index) => (
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
            <Toast num={num} msg={msg} setMsg={setMsg}/>
            <NavBar/>
        </div>
    )
}

export default HomePage