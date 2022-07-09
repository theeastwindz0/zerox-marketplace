import React from 'react'
import styles from '../CSS/Footer.module.css'

const Footer = () => {
    const year=new Date();
  return (
    <div className={styles.footer}>
        <h3>ZEROX MARKETPLACE</h3>
        <h4>Copyright &copy; {year.getFullYear()} All rights reserved</h4>
    </div>
  )
}

export default Footer