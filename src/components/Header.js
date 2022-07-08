import React from 'react'
import styles from '../CSS/Header.module.css'
import logo from '../Images/logo.png'
import Buttons from './Buttons'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <img src={logo} alt="logo"/>
      </div>
      <div className={styles.header_middle}>
        <Buttons/>
      </div>
      <div className={styles.header_right}>
        text
      </div>
    </div>
  )
}

export default Header