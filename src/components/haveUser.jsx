import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'


export function LoggedIn () {
    const location = useHistory()
    const [cookie] = useCookies()
    if(cookie.currentUserID !== undefined) location.push('/home')
}

export function LoggedOut () {
    const location = useHistory()
    const [cookie] = useCookies('currentUserID')
    if(cookie.currentUserID === undefined) location.push('/')
}