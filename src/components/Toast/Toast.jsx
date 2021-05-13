import React, { useEffect } from 'react'
import styles from './Toast.module.css'

const Toast = ({msg, setMsg, num}) => {
    useEffect(()=> {
        function autolose() {
            const notShow = {show:'flex', hide:'-100px'}
            setMsg(notShow) 
        }
        setTimeout(autolose , 1500)
    },[num, setMsg])
    const closeNow = () => {
        const notShow = {show:'flex', hide:'-100px'}
        setMsg(notShow) 
    }
    return (
        <div style={{display:msg.show, marginBottom:msg.hide, backgroundColor: msg.color}} className={styles.toastBox}>
            <p>{msg.text}</p>
            <i onClick={closeNow} className="fa fa-times"></i>
        </div>
    )
}
export default Toast