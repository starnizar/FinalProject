import {React, useState, useRef} from 'react'
import styles from './Register.module.css'
import {Link, useHistory} from 'react-router-dom'
import uniqid from 'uniqid'
import question from '../../assets/images/question.png'

const Register = () => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
    const mailInputRef = useRef()
    const passwordInputRef = useRef()
    const location = useHistory()
    const [error, setError] = useState({show:'-58px', msg:'Welcom'})


    const addNewUser = (event) => {
        event.preventDefault()
        const mailRegexp = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
        const usersMail = (users.filter(user => user.mail ===  mailInputRef.current.value));
        if (usersMail[0] === undefined) {
            if (mailRegexp.test(mailInputRef.current.value)){
                if (passwordInputRef.current.value.length > 5) {
                    const usersList = [...users, {id: uniqid(), mail: mailInputRef.current.value, password: passwordInputRef.current.value, name: '', allPhoto: [], profilePhoto: question, contacts:[]}]
                    setUsers(usersList)
                    localStorage.setItem('users', JSON.stringify(usersList))
                    location.push('/name')
                } else {
                    const errMsg = {show:'-18px', msg:'Password should have at least 6 symbols'}
                    setError(errMsg)
                }
            } else {
                const errMsg = {show:'-18px', msg:'Your email is incorrect!'}
                setError(errMsg)
            }
        } else {
            const errMsg = {show:'-18px', msg:'Email is already in use'}
            setError(errMsg)
        }
    }
    return (
        <div className={styles.register}>
            <Link to={'/'}>
                <i className="fa fa-arrow-left"></i>
            </Link>
            <h1>Register</h1>
            <form onChange={()=>setError({show:'-58px', msg:error.msg})} onSubmit={addNewUser} className={styles.registerForm}>
                <input placeholder={'example@mail.com'} required ref={mailInputRef}/>
                <input placeholder={'Your password'} required ref={passwordInputRef}/>
                <p style={{marginTop:error.show}} className={styles.error}>{error.msg}</p>
                <button>next</button>
            </form>
        </div>
    )
}

export default Register