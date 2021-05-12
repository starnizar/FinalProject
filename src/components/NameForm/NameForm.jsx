import {React, useRef} from 'react'
import styles from './NameForm.module.css'
import {Link, useHistory} from 'react-router-dom'
import { useCookies } from 'react-cookie'

const NameForm = () => {
    const [,setCookies] = useCookies(['currentUserID'])
    const nameInputRef = useRef()
    const location = useHistory()
    const allUsers = JSON.parse(localStorage.getItem('users'))

    const setName = (event) => {
        event.preventDefault()
        const userNameRegexp = /[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*/
        const userNames = allUsers.filter(user => user.name === nameInputRef.current.value);
        if(userNames[0] === undefined) {
            if(userNameRegexp.test(nameInputRef.current.value) && nameInputRef.current.value ) {
                allUsers[allUsers.length-1].name = nameInputRef.current.value
                localStorage.setItem('users', JSON.stringify(allUsers))
                setCookies('currentUserID', allUsers[allUsers.length-1].id, { path: '/' })
                alert(`Welcome, ${nameInputRef.current.value}!`)
                location.push('/home')
            } else alert('Use another name')
        } else alert('You use existing user name')
    }
    const remove = ()=> {
        allUsers.splice([allUsers.length-1],1)
        localStorage.setItem('users', JSON.stringify(allUsers))
    } 
    return (
        <div className={styles.nameBox}>
            <Link to={'/registration'} onClick={remove}>
                <i className="fa fa-arrow-left"></i>
            </Link>
            <h1>User Name</h1>
            <form className={styles.nameForm}>
                <input placeholder='User Name' required ref={nameInputRef}/>
                <button onClick={setName}>sign up</button>
            </form>
        </div>
    )
}

export default NameForm