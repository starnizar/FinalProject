import {React, useRef} from 'react'
import styles from './AddPhotoPage.module.css'
import NavBar from '../NavBar/NavBar.jsx'
import {useCookies} from 'react-cookie'
import {LoggedOut} from '../../haveUser.jsx'
import { useHistory } from 'react-router'

const AddPhotoPage = () => {
    LoggedOut()
    const [cookie] = useCookies()
    const location = useHistory()
    let users = JSON.parse(localStorage.getItem('users'))
    const currentUser = users.filter(user => user.id === cookie.currentUserID)
    const photoInputRef = useRef()

    const addFoto = () => {
        currentUser[0].allPhoto.push(photoInputRef.current.value)
        localStorage.setItem('users', JSON.stringify(users))
        console.log(currentUser[0]);
        console.log(users);
    }

    return (
        <div className={styles.addPhotoPage}>
            <input ref={photoInputRef}/>
            <button onClick={addFoto}>Add New Foto</button>
            <div className={styles.photoBox}>
                {currentUser[0]?currentUser[0].allPhoto.map((item, index) => (
                    <img key={index} src={item} alt='no way' />
                )):location.push('/')}
            </div>
            <NavBar/>
        </div>
    )
}

export default AddPhotoPage