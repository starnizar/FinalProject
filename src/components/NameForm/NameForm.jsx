import {React, useRef} from 'react'
import styles from './NameForm.module.css'
import {Link, useHistory} from 'react-router-dom'
import { useCookies } from 'react-cookie'

const NameForm = () => {
    const [,setCookies] = useCookies(['currentUserID'])
    const nameInputRef = useRef()
    const location = useHistory()

    const setName = (event) => {
        event.preventDefault()
        const userNameRegexp = /[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*/
        if(userNameRegexp.test(nameInputRef.current.value) && nameInputRef.current.value ) {
            let allUsers = JSON.parse(localStorage.getItem('users'))
            allUsers[allUsers.length-1].userName = nameInputRef.current.value
            localStorage.setItem('users', JSON.stringify(allUsers))
            setCookies('currentUserID', allUsers[allUsers.length-1].id, { path: '/' })
            alert(`Welcome, ${nameInputRef.current.value}!`)
            location.push('/home')
        } else {
            alert('Use another name')
        }
    }
    return (
        <div className={styles.nameBox}>
            <Link to={'/registration'}>
                <i className="fa fa-arrow-left"></i>
            </Link>
            <h1>User Name</h1>
            <form className={styles.nameForm}>
                <input ref={nameInputRef}/>
                <button onClick={setName}>sign up</button>
            </form>
        </div>
    )
}

export default NameForm