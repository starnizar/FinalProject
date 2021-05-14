import React, { useRef, useState } from 'react'
import styles from './LogIn.module.css'
import {Link, useHistory} from 'react-router-dom'
import { useCookies } from 'react-cookie'


const LogIn = () => {
    const location = useHistory()
    const [,setCookie] = useCookies(['currentUserID'])
    const mailInputRef = useRef()
    const passwordInputRef = useRef()
    const users = JSON.parse(localStorage.getItem('users')) || []
    const [error, setError] = useState('-58px')
    const LoggingIn = (event) => {
        event.preventDefault()
        const mailLog = users.filter(item => item.mail === mailInputRef.current.value)
        if (mailLog[0] !== undefined) {
            if(mailLog[0].password === passwordInputRef.current.value) {
                setCookie('currentUserID', mailLog[0].id, { path: '/' })
                location.push('/home')
            } else {setError('-18px')}
        } else {setError('-18px')}
    }
    return (
        <div className={styles.LogIn}>
            <Link to={'/'}>
                 <i className="fa fa-arrow-left"></i>
            </Link>
            <h1>Log in</h1>
            <form onChange={()=>setError('-58px')} onSubmit={LoggingIn} className={styles.LogInForm}>
                <input autoComplete='on' placeholder={'example@mail.com'} required ref={mailInputRef}/>
                <input placeholder={'Your password'} required ref={passwordInputRef} type={'password'}/>
                <p style={{marginTop:error}} className={styles.error}>Incorrect email or password :(</p>
                <button>log in</button>
            </form> 
        </div>
    )
}

export default LogIn