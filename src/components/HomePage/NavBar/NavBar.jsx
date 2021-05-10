import React from 'react'
import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <Link to={'/home'}>
                <i className="fa fa-home"></i>
            </Link>
            <Link to={'/search'}>
                <i className="fa fa-search"></i>
            </Link>
            <Link to={'/addphoto'}className={styles.addBtn}>
                <i className="fa fa-plus"></i>
            </Link>
            <Link to={'/chats'}>
                <i className="fa fa-comment"></i>
            </Link>
            <Link to={'/profile'}>
                <i className="fa fa-user"></i>
            </Link>

        </div>
    )
}
export default NavBar