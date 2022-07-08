import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../CSS/Buttons.module.css'
const Buttons = (props) => {
  return (
    <>
    <Link to='/home' className={styles.button}>HOME</Link>
    </>
  )
}

export default Buttons