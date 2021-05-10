import React from 'react'
import styles from './ShowUserFoto.module.css'

const ShowUserFoto = ({currentUser}) => {

    const demo = (event) => {
        if(event.target.style.transform === 'scale(1)') {
            event.target.style.transform = 'scale(0.74)'
            event.target.style.position = 'absolute'
            event.target.style.top = '0'
            event.target.style.zIndex = '1'
            event.target.style.left = '0'
        } else {
            event.target.style.transform = 'scale(1)'
            event.target.style.position = 'relative'
            event.target.style.zIndex = '0'
        }
        console.log(event.target.style.transform);
    }
    return (
        <div className={styles.userPhoto}>
        {currentUser[0] ? currentUser[0].allPhoto.map((photo, index) => (
            <div onClick={demo} key={index} className={styles.photoBox}>
                <img src={photo} alt="no way"/>
            </div>
        )):(<h1>Add FOTO dude</h1>)}
    </div>
    )
}

export default ShowUserFoto