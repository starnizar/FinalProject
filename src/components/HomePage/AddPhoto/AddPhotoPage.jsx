import {React, useRef, useState} from 'react'
import styles from './AddPhotoPage.module.css'
import NavBar from '../NavBar/NavBar.jsx'
import {useCookies} from 'react-cookie'
import {LoggedOut} from '../../haveUser.jsx'
import Toast from '../../Toast/Toast.jsx'

const AddPhotoPage = () => {
    LoggedOut()
    const [cookie] = useCookies()
    let users = JSON.parse(localStorage.getItem('users'))
    const currentUser = users.filter(user => user.id === cookie.currentUserID)
    const photoInputRef = useRef()
    const [msg, setMsg] = useState({text:'', show:'none', hide: '-100px', color:'#ffffff'})
    const [num, setNum] = useState(0)
    

    const addFoto = () => {
        if(photoInputRef.current.value !==''){
            currentUser[0].allPhoto.unshift(photoInputRef.current.value)
            localStorage.setItem('users', JSON.stringify(users))
            const newMsg = {text:'You just added new awesome PHOTO!!!', show:'flex', hide: '0', color:'#ffffff'}
            const clearMsg = {text:'', show:'none', hide: '-100px', color:'#ffffff'}
            if(msg.hide === '0'){
                setMsg(clearMsg)
                setTimeout(setMsg(newMsg), 50)
            } else setMsg(newMsg) 
            num === 0 ? setNum(1) : setNum(0)
        } else {
            const newMsg = {text:'Field is empty!', show:'flex', hide: '0', color:'#ff3939'}
            const clearMsg = {text:'', show:'none', hide: '-100px', color:'#ffffff'}
            if(msg.hide === '0'){
                setMsg(clearMsg)
                setTimeout(setMsg(newMsg), 50)
            } else setMsg(newMsg) 
            num === 0 ? setNum(1) : setNum(0)
        }
    }

    return (
        <div className={styles.addPhotoPage}>
        <h1>Add Your Best</h1>
            <div className={styles.searchBox}>
                <input placeholder='Insert URL of PHOTO' ref={photoInputRef}/>
                <button onClick={addFoto}>Add New Foto</button>
            </div>
            <Toast num={num} msg={msg} setMsg={setMsg}/>
            <NavBar/>
        </div>
    )
}

export default AddPhotoPage