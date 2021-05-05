import {React, useRef, useState} from 'react'
import styles from './NameForm.module.css'
import {NavLink} from 'react-router-dom'

const NameForm = () => {

    const [userName, setUserName] = useState([])
    const nameInputRef = useRef()

    const showUsers = (event) => {
        event.preventDefault()
    }

    const showCurrentUser = (event) => {
        event.preventDefault()
        let allUsers = JSON.parse(localStorage.getItem('users'))
        setUserName(allUsers[allUsers.length-1].name = nameInputRef.current.value)
    }
    console.log(userName);



    return (
        <div className={styles.nameBox}>
            <NavLink to={'/registration'}>
                <i className="fa fa-arrow-left"></i>
            </NavLink>
            <form className={styles.nameForm}>
                <input ref={nameInputRef}/>
                <button onClick={showUsers}>sign up</button>
            </form>
            <button onClick={showCurrentUser}>Test</button>
        </div>
    )
}

export default NameForm