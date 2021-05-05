import {React, useState, useRef} from 'react'
import styles from './Register.module.css'
import {Link} from 'react-router-dom'
import uniqid from 'uniqid'

const Register = () => {
    const [users, setUsers] = useState([])
    const mailInputRef = useRef()
    const passwordInputRef = useRef()

    const addNewUser = (event) => {
        event.preventDefault()
        setUsers([...users, {id: uniqid(), mail: mailInputRef.current.value, password: passwordInputRef.current.value, userName: ''}])
        localStorage.setItem('users', JSON.stringify(users))
        mailInputRef.current.value = ''
        passwordInputRef.current.value = ''
    }



    return (
        <div className={styles.register}>
            <Link to={'/loggedout'}>
                <i className="fa fa-arrow-left"></i>
            </Link>
            <h1>Register</h1>
            <form onSubmit={addNewUser} className={styles.registerForm}>
                <input ref={mailInputRef}/>
                <input ref={passwordInputRef}/>
                <button>next</button>
            </form>
            <button onClick={() => document.location.href = document.location.origin+'/name'}>NextPage</button>
        </div>
    )
}

export default Register