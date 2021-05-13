import React, { useRef, useState } from 'react'
import styles from '../Search/Search.module.css'
import NavBar from '../NavBar/NavBar.jsx'
import {LoggedOut} from '../../haveUser.jsx'
import {useCookies} from 'react-cookie'
import Toast from '../../Toast/Toast.jsx'

const Search = () => {
    LoggedOut()
    const [cookie] = useCookies()
    const users = (JSON.parse(localStorage.getItem('users')))
    const [foundUser, setFoundUser] = useState()
    const userNameInputRef = useRef()
    const currentUser = users.filter(user => user.id === cookie.currentUserID)
    const [msg, setMsg] = useState({text:'', show:'none', hide: '-100px', color:'#ffffff'})
    const [num, setNum] = useState(0)
    
    const findUser = () => {
        let letUser = users.filter(user => user.name === userNameInputRef.current.value)
        letUser ? setFoundUser(...letUser) : letUser = undefined
    }

    const follow = (id) => {
        if (id !== currentUser[0].id){
            if(currentUser[0].contacts.find(item => item === id) === undefined) {
                currentUser[0].contacts.push(id)
                localStorage.setItem('users',JSON.stringify(users))
                const newMsg = {text:`You just followed "${foundUser.name}"`, show:'flex', hide: '0', color:'#ffffff'}
                const clearMsg = {text:'', show:'none', hide: '-100px', color:'#ffffff'}
                if(msg.hide === '0'){
                    setMsg(clearMsg)
                    setTimeout(setMsg(newMsg), 50)
                } else setMsg(newMsg) 
                num === 0 ? setNum(1) : setNum(0)
            } else {
                const newMsg = {text:`You already know "${foundUser.name}"`, show:'flex', hide: '0', color:'#ffffff'}
                const clearMsg = {text:'', show:'none', hide: '-100px', color:'#ffffff'}
                if(msg.hide === '0'){
                    setMsg(clearMsg)
                    setTimeout(setMsg(newMsg), 50)
                } else setMsg(newMsg) 
                num === 0 ? setNum(1) : setNum(0)
            }
        } else {
            const newMsg = {text:'It`s you, Dog!', show:'flex', hide: '0', color:'#ffffff'}
                const clearMsg = {text:'', show:'none', hide: '-100px', color:'#ffffff'}
                if(msg.hide === '0'){
                    setMsg(clearMsg)
                    setTimeout(setMsg(newMsg), 50)
                } else setMsg(newMsg) 
                num === 0 ? setNum(1) : setNum(0)
            }
    }

    return (
        <div className={styles.search}>
            <h1>Search</h1>
            <input className={styles.searchInput} onChange={findUser} ref={userNameInputRef} placeholder='User Name' type="text" />
            {foundUser ? (
                <div className={styles.otherUsers}>
                    <div>
                        <div style={{backgroundImage: `url(${foundUser.profilePhoto})`}} className={styles.imgBox}></div>
                        <h1 className={styles.notFound}>{foundUser.name}</h1>
                    </div>
                    <button onClick={()=>follow(foundUser.id)}>Follow</button>
                </div>
                ) : <h2>User not found :(</h2>}
            <Toast num={num} msg={msg} setMsg={setMsg}/>
            <NavBar/>
        </div>
    )
}

export default Search