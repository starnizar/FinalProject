import React from 'react'
import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <Link to={'/home'}>
                <i class="fa fa-home"></i>
            </Link>
            <Link to={'/search'}>
                <i class="fa fa-search"></i>
            </Link>
            <Link className={styles.addBtn}>
                <i class="fa fa-plus"></i>
            </Link>
            <Link to={'/chats'}>
                <i class="fa fa-comment"></i>
            </Link>
            <Link to={'/profile'}>
                <i class="fa fa-user"></i>
            </Link>

        </div>
    )
}
export default NavBar