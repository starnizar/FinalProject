import React,{useState} from 'react'
import styles from './AnotherUser.module.css'
import NavBar from '../NavBar/NavBar.jsx'
import {LoggedOut} from '../../haveUser.jsx'
import {Link} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import Toast from '../../Toast/Toast.jsx'

const AnotherUser = () => {
    LoggedOut()
    const [cookie] = useCookies()
    const user = JSON.parse(localStorage.getItem('anotherUser'))
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')))
    const currentUser = users.filter(user => user.id === cookie.currentUserID)
    const userPhotos = currentUser[0].allPhoto
    const [msg, setMsg] = useState({text:'', show:'none', hide: '-100px', color:'#ffffff'})
    const [num, setNum] = useState(0)
    

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
            } else setMsg(newMsg) 
            num === 0 ? setNum(1) : setNum(0)
        } else {
            const newMsg = {text:'You already have it', show:'flex', hide: '0', color:'#ff3939'}
            const clearMsg = {text:'', show:'none', hide: '-100px', color:'#ffffff'}
            if(msg.hide === '0'){
                setMsg(clearMsg)
                setTimeout(setMsg(newMsg), 50)
            } else setMsg(newMsg) 
            num === 0 ? setNum(1) : setNum(0)
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
            <Toast num={num} msg={msg} setMsg={setMsg}/>
            <NavBar/>
        </div>
    )
}

export default AnotherUser