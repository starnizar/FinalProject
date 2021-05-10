import styles from './ChooseFoto.module.css'
import {useCookies} from 'react-cookie'


const ChooseFoto = ({choose, setChoose}) => {
    const [cookie] = useCookies()
    let users = JSON.parse(localStorage.getItem('users'))
    const currentUser = users.filter(user => user.id === cookie.currentUserID)
    const setPhoto = (event) => {
        currentUser[0].profilePhoto = event.target.currentSrc
        localStorage.setItem('users', JSON.stringify(users))
        setChoose('none')
    }
    return(
        <div style={{display:choose}} className={styles.photoBlock}>
            {currentUser[0] ? currentUser[0].allPhoto.map((photo, index) => (
                <div key={index} className={styles.photoBox}>
                    <img onClick={setPhoto} src={photo} alt="no way"/>
                </div>
            )):(<h1>Add FOTO dude</h1>)}
        </div>
    )
}

export default ChooseFoto