import {React, useRef} from 'react'
import styles from './AddPhotoPage.module.css'
import NavBar from '../NavBar/NavBar.jsx'
import {useCookies} from 'react-cookie'
import {LoggedOut} from '../../haveUser.jsx'

const AddPhotoPage = () => {
    LoggedOut()
    const [cookie] = useCookies()
    let users = JSON.parse(localStorage.getItem('users'))
    const currentUser = users.filter(user => user.id === cookie.currentUserID)
    const photoInputRef = useRef()

    const addFoto = () => {
        if(photoInputRef.current.value !==''){
            currentUser[0].allPhoto.push(photoInputRef.current.value)
            localStorage.setItem('users', JSON.stringify(users))
            alert('You just added new awesome PHOTO!!!')
        } else {alert('Field is empty!')}
    }

    return (
        <div className={styles.addPhotoPage}>
        <h1>Add Your Best</h1>
            <div className={styles.searchBox}>
                <input placeholder='Insert URL of PHOTO' ref={photoInputRef}/>
                <button onClick={addFoto}>Add New Foto</button>
            </div>
            <NavBar/>
        </div>
    )
}

export default AddPhotoPage