import { useState } from 'react'
import styles from './Burger.module.css'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'
import ChooseFoto from './ChooseFoto/ChooseFoto.jsx'

const Burger = ({users, currentUser,setUserPhoto}) => {
    const location = useHistory()
    const [cross, setCross] = useState("fa fa-bars")
    const [show, setShow] = useState('none')
    const [choose, setChoose] = useState('none')
    const [,,removeCookies] = useCookies()
   
    const showMenu = () => {
        if(cross === "fa fa-bars"){
            setCross("fa fa-times")
            setShow('flex')
        }else{
            setCross("fa fa-bars")
            setShow('none')
            setChoose('none')
        }
    }
    const logOut = () => {
        location.push('/')
        removeCookies('currentUserID')
    }
    const removeAcc = (event) => {
        event.preventDefault()
        users.splice(users.indexOf(currentUser[0]),1)
        localStorage.setItem('users', JSON.stringify(users))
        logOut()
    }
    const showChoose = (event) => {
        event.preventDefault()
        setChoose('grid')
    }
    return (
        <div>
            <div onClick={showMenu} className={styles.burger}>
                <i className={cross}></i>
            </div>
            <div style={{display: show}} className={styles.burgerMenu}>
                <ChooseFoto choose={choose} setChoose={setChoose} setUserPhoto={setUserPhoto}/>
                <button onClick={showChoose}>Profile Foto</button>
                <button onClick={logOut}>log out</button>
                <button onClick={removeAcc}>remove account</button>
            </div>
        </div>
    )
}

export default Burger