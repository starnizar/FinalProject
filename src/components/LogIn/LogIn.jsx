import React, { useRef } from 'react'
import styles from './LogIn.module.css'
import {Link, useHistory} from 'react-router-dom'
import { useCookies } from 'react-cookie'


const LogIn = () => {
    const location = useHistory()
    const [,setCookie] = useCookies(['currentUserID'])
    const mailInputRef = useRef()
    const passwordInputRef = useRef()
    const users = JSON.parse(localStorage.getItem('users')) || []
    const LoggingIn = (event) => {
        event.preventDefault()
        const mailLog = users.filter(item => item.mail === mailInputRef.current.value)
        if (mailLog[0] !== undefined) {
            if(mailLog[0].password === passwordInputRef.current.value) {
                alert(`Welcome back, ${mailLog[0].name}`)
                setCookie('currentUserID', mailLog[0].id, { path: '/' })
                location.push('/home')
            } else {
                alert('Incorrect mail or password :(')
            }
        } else {alert('Incorrect mail or password :(')}
    }
    return (
        <div className={styles.LogIn}>
            <Link to={'/'}>
                 <i className="fa fa-arrow-left"></i>
            </Link>
            <h1>Log in</h1>
            <form onSubmit={LoggingIn} className={styles.LogInForm}>
                <input autoComplete='on' placeholder={'example@mail.com'} required ref={mailInputRef}/>
                <input placeholder={'Your password'} required ref={passwordInputRef} type={'password'}/>
                <button>log in</button>
            </form> 
        </div>
    )
}

export default LogIn