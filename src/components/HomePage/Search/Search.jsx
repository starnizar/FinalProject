import React from 'react'
import styles from '../Search/Search.module.css'
import NavBar from '../NavBar/NavBar.jsx'
import {LoggedOut} from '../../haveUser.jsx'

const Search = () => {
    LoggedOut()
    return (
        <div className={styles.search}>
            <h1>Search</h1>
            <NavBar/>
        </div>
    )
}

export default Search