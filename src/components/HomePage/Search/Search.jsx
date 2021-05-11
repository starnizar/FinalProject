import React, { useRef, useState } from 'react'
import styles from '../Search/Search.module.css'
import NavBar from '../NavBar/NavBar.jsx'
import {LoggedOut} from '../../haveUser.jsx'
import {useCookies} from 'react-cookie'

const Search = () => {
    LoggedOut()
    const [cookie] = useCookies()
    const users = (JSON.parse(localStorage.getItem('users')))
    const [foundUser, setFoundUser] = useState()
    const userNameInputRef = useRef()
    const currentUser = users.filter(user => user.id === cookie.currentUserID)
    
    const findUser = () => {
        let letUser = users.filter(user => user.name === userNameInputRef.current.value)
        letUser ? setFoundUser(...letUser) : letUser = undefined
    }

    const follow = (id) => {
        if (id !== currentUser[0].id){
            if(currentUser[0].contacts.find(item => item === id) === undefined) {
                currentUser[0].contacts.push(id)
                localStorage.setItem('users',JSON.stringify(users))
            } else {alert(`You already know, ${foundUser.name}`)}
        } else {alert('It`s you, Dog!')}
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
            <NavBar/>
        </div>
    )
}

export default Search